import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz de Compatibilidade — MiauAu" },
      { name: "description", content: "Responda algumas perguntas e descubra os animais perfeitos para o seu estilo de vida." },
    ],
  }),
  component: QuizPage,
});

type Option = { value: string; label: string; emoji: string };
type Question = { id: string; title: string; subtitle: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "moradia",
    title: "Onde você mora hoje?",
    subtitle: "Isso nos ajuda a entender o espaço disponível.",
    options: [
      { value: "ap", label: "Apartamento", emoji: "🏢" },
      { value: "casa", label: "Casa", emoji: "🏡" },
      { value: "chacara", label: "Chácara / Sítio", emoji: "🌳" },
    ],
  },
  {
    id: "quintal",
    title: "Você tem quintal ou área externa?",
    subtitle: "Alguns pets adoram correr ao ar livre.",
    options: [
      { value: "sim", label: "Sim, espaço aberto", emoji: "🌿" },
      { value: "varanda", label: "Apenas varanda", emoji: "🪴" },
      { value: "nao", label: "Não tenho", emoji: "🚪" },
    ],
  },
  {
    id: "criancas",
    title: "Tem crianças em casa?",
    subtitle: "Indicamos pets com temperamento compatível.",
    options: [
      { value: "sim", label: "Sim", emoji: "👶" },
      { value: "as-vezes", label: "Às vezes (visitas)", emoji: "👨‍👩‍👧" },
      { value: "nao", label: "Não", emoji: "🙅" },
    ],
  },
  {
    id: "experiencia",
    title: "É o seu primeiro pet?",
    subtitle: "Sem julgamentos — todo começo é especial.",
    options: [
      { value: "sim", label: "Sim, é o primeiro", emoji: "✨" },
      { value: "alguns", label: "Já tive alguns", emoji: "🐾" },
      { value: "muitos", label: "Sou veterano", emoji: "🏆" },
    ],
  },
  {
    id: "tempo-fora",
    title: "Quanto tempo fica fora de casa?",
    subtitle: "Pets sociais sofrem com longas ausências.",
    options: [
      { value: "4", label: "Até 4 horas", emoji: "☕" },
      { value: "8", label: "4 a 8 horas", emoji: "💼" },
      { value: "9", label: "Mais de 8 horas", emoji: "🌙" },
    ],
  },
  {
    id: "energia",
    title: "Que tipo de pet combina com você?",
    subtitle: "Pense na sua rotina ideal de companhia.",
    options: [
      { value: "ativo", label: "Muito ativo", emoji: "🏃" },
      { value: "moderado", label: "Moderado", emoji: "🚶" },
      { value: "calmo", label: "Calmo e tranquilo", emoji: "🛋️" },
    ],
  },
];

function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];
  const progress = useMemo(() => ((step + (done ? 1 : 0)) / total) * 100, [step, done, total]);

  function answer(value: string) {
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    setTimeout(() => {
      if (step < total - 1) setStep(step + 1);
      else setDone(true);
    }, 200);
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-sm">🐾</span>
            </div>
            <span className="font-bold text-primary">MiauAu</span>
          </Link>
          <div className="flex-1 max-w-md">
            <div className="h-2 rounded-full bg-surface-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <span className="text-xs font-bold text-muted-foreground tabular-nums shrink-0">
            {done ? total : step + 1}/{total}
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        {done ? (
          <Result answers={answers} onRestart={restart} />
        ) : (
          <QuestionCard
            key={current.id}
            q={current}
            selected={answers[current.id]}
            onAnswer={answer}
            onBack={back}
            canBack={step > 0}
          />
        )}
      </main>
    </div>
  );
}

function QuestionCard({
  q,
  selected,
  onAnswer,
  onBack,
  canBack,
}: {
  q: Question;
  selected?: string;
  onAnswer: (v: string) => void;
  onBack: () => void;
  canBack: boolean;
}) {
  return (
    <div className="w-full max-w-2xl animate-fade-up">
      <span className="text-xs font-bold uppercase tracking-widest text-primary">Quiz de Compatibilidade</span>
      <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-3 tracking-tight text-balance">
        {q.title}
      </h1>
      <p className="text-muted-foreground mb-10 text-lg">{q.subtitle}</p>

      <div className="grid gap-3">
        {q.options.map((o) => {
          const isSelected = selected === o.value;
          return (
            <button
              key={o.value}
              onClick={() => onAnswer(o.value)}
              className={`group flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all hover:-translate-y-0.5 ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/15"
                  : "border-border bg-card hover:border-primary/40 hover:shadow-soft"
              }`}
            >
              <span className="size-12 rounded-xl bg-surface-100 group-hover:bg-primary/10 flex items-center justify-center text-2xl shrink-0 transition-colors">
                {o.emoji}
              </span>
              <span className="font-semibold text-lg flex-1 min-w-0">{o.label}</span>
              <span
                className={`size-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                  isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border"
                }`}
              >
                {isSelected && <span className="text-xs font-bold">✓</span>}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={onBack}
          disabled={!canBack}
          className="px-5 py-2.5 rounded-full text-sm font-semibold text-muted-foreground hover:bg-surface-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          ← Voltar
        </button>
        <p className="text-xs text-muted-foreground">Toque em uma opção para continuar</p>
      </div>
    </div>
  );
}

function Result({ answers, onRestart }: { answers: Record<string, string>; onRestart: () => void }) {
  // Fake compatibility score based on answers
  const score = useMemo(() => {
    const base = 78;
    const bonus = Object.values(answers).length * 3;
    return Math.min(98, base + bonus);
  }, [answers]);
  const matches = Math.floor(8 + Math.random() * 8);

  return (
    <div className="w-full max-w-2xl text-center animate-fade-up">
      <div className="inline-flex items-center justify-center size-24 rounded-full bg-gradient-to-br from-primary to-secondary mb-8 shadow-2xl shadow-primary/30 animate-float">
        <span className="text-5xl">🎉</span>
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-primary">Pronto!</span>
      <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-balance">
        Encontramos <span className="text-primary">{matches} animais</span> perfeitos para você
      </h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
        Baseado nas suas respostas, calculamos a compatibilidade com cada pet disponível.
      </p>

      <div className="bg-card border border-border rounded-3xl p-8 mb-8 shadow-soft">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Seu perfil de afinidade
          </span>
          <span className="text-3xl font-bold text-primary tabular-nums">{score}%</span>
        </div>
        <div className="h-3 rounded-full bg-surface-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-left">
          Você combina com pets de energia moderada, sociáveis e que se adaptam bem à sua rotina.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/matches"
          className="px-7 py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 transition-all"
        >
          Ver meus matches ❤️
        </Link>
        <button
          onClick={onRestart}
          className="px-7 py-4 bg-surface-100 text-foreground font-bold rounded-2xl hover:bg-surface-200 transition-all"
        >
          Refazer quiz
        </button>
      </div>
    </div>
  );
}
