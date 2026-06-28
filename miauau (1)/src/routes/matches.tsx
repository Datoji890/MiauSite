import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import petLuna from "@/assets/pet-luna.jpg";
import petThor from "@/assets/pet-thor.jpg";
import petMia from "@/assets/pet-mia.jpg";
import petBento from "@/assets/pet-bento.jpg";
import petOliver from "@/assets/pet-oliver.jpg";

export const Route = createFileRoute("/matches")({
  head: () => ({
    meta: [
      { title: "Seus matches — MiauAu" },
      { name: "description", content: "Encontre seu companheiro perfeito. Deslize, conheça e conecte-se com animais resgatados próximos a você." },
      { property: "og:title", content: "Seus matches — MiauAu" },
      { property: "og:description", content: "Deslize e descubra o companheiro perfeito para o seu lar." },
    ],
  }),
  component: MatchesPage,
});

type Pet = {
  id: string;
  name: string;
  age: string;
  species: string;
  breed: string;
  city: string;
  distance: string;
  affinity: number;
  story: string;
  tags: string[];
  image: string;
  ong: string;
};

const PETS: Pet[] = [
  {
    id: "luna",
    name: "Luna",
    age: "2 anos",
    species: "Gata",
    breed: "SRD",
    city: "São Paulo, SP",
    distance: "3 km",
    affinity: 98,
    story: "Resgatada na chuva, Luna é a definição de gratidão em forma de ronronar. Carinhosa, brincalhona e adora colos quentes.",
    tags: ["Carinhosa", "Vacinada", "Castrada", "Sociável"],
    image: petLuna,
    ong: "ONG Patinhas Felizes",
  },
  {
    id: "thor",
    name: "Thor",
    age: "8 meses",
    species: "Cão",
    breed: "SRD pequeno",
    city: "São Paulo, SP",
    distance: "5 km",
    affinity: 96,
    story: "Pequeno no tamanho, gigante no coração. Thor adora correr atrás de bolinhas e dormir em cima de qualquer pé disponível.",
    tags: ["Brincalhão", "Vermifugado", "Apto a apartamento"],
    image: petThor,
    ong: "Lar dos Focinhos",
  },
  {
    id: "mia",
    name: "Mia",
    age: "4 meses",
    species: "Gata",
    breed: "Tabby",
    city: "Guarulhos, SP",
    distance: "12 km",
    affinity: 94,
    story: "Mia chegou tímida, mas hoje persegue laser, miados e seu coração. Curiosa e cheia de personalidade.",
    tags: ["Curiosa", "Vacinada", "Filhote"],
    image: petMia,
    ong: "Resgate Felino SP",
  },
  {
    id: "bento",
    name: "Bento",
    age: "7 anos",
    species: "Cão",
    breed: "Beagle mix",
    city: "São Paulo, SP",
    distance: "8 km",
    affinity: 92,
    story: "Bento é puro sorriso. Senior, calmo e companheiro, busca um sofá macio e uma família para envelhecer junto.",
    tags: ["Sênior", "Castrado", "Calmo", "Sociável"],
    image: petBento,
    ong: "Adote um Idoso",
  },
  {
    id: "oliver",
    name: "Oliver",
    age: "3 anos",
    species: "Gato",
    breed: "Smoking",
    city: "São Bernardo, SP",
    distance: "18 km",
    affinity: 89,
    story: "Elegante como um cavalheiro, Oliver observa o mundo da janela e adora um cafuné no final do dia.",
    tags: ["Independente", "Castrado", "Vacinado"],
    image: petOliver,
    ong: "ONG Patinhas Felizes",
  },
];

type Decision = "like" | "pass" | "super";

function MatchesPage() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState<Pet[]>([]);
  const [matchPopup, setMatchPopup] = useState<Pet | null>(null);

  const current = PETS[index];
  const next = PETS[index + 1];
  const finished = index >= PETS.length;

  function handleDecision(decision: Decision) {
    if (!current) return;
    if (decision === "like" || decision === "super") {
      setLiked((l) => [...l, current]);
      if (current.affinity >= 95 || decision === "super") {
        setMatchPopup(current);
      }
    }
    setIndex((i) => i + 1);
  }

  function resetDeck() {
    setIndex(0);
    setLiked([]);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar likedCount={liked.length} />

      <main className="pt-24 pb-32 px-4">
        <div className="max-w-md mx-auto">
          <header className="text-center mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Match diário</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Quem combina com você</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {finished
                ? "Você viu todos os companheiros desta seleção."
                : `${PETS.length - index} companheiros aguardando seu lar`}
            </p>
          </header>

          <div className="relative h-[560px]">
            {finished ? (
              <EmptyState likedCount={liked.length} onReset={resetDeck} />
            ) : (
              <>
                {next && <PetCardStatic pet={next} />}
                <SwipeCard key={current.id} pet={current} onDecide={handleDecision} />
              </>
            )}
          </div>

          {!finished && (
            <ActionBar onDecide={handleDecision} />
          )}

          {liked.length > 0 && !finished && (
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Você curtiu <span className="text-primary font-semibold">{liked.length}</span>{" "}
              {liked.length === 1 ? "companheiro" : "companheiros"} até agora
            </p>
          )}
        </div>
      </main>

      <AnimatePresence>
        {matchPopup && (
          <MatchPopup pet={matchPopup} onClose={() => setMatchPopup(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function TopBar({ likedCount }: { likedCount: number }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-9 bg-primary rounded-xl flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground text-base">🐾</span>
          </div>
          <span className="text-base font-bold tracking-tight text-primary">MiauAu</span>
        </Link>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold">
            💖 {likedCount}
          </span>
          <Link
            to="/quiz"
            className="px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors font-medium"
          >
            Refazer quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}

function SwipeCard({ pet, onDecide }: { pet: Pet; onDecide: (d: Decision) => void }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-18, 0, 18]);
  const likeOpacity = useTransform(x, [40, 140], [0, 1]);
  const passOpacity = useTransform(x, [-140, -40], [1, 0]);
  const [expanded, setExpanded] = useState(false);

  function handleDragEnd(_: unknown, info: PanInfo) {
    const threshold = 120;
    if (info.offset.x > threshold) onDecide("like");
    else if (info.offset.x < -threshold) onDecide("pass");
  }

  return (
    <motion.article
      className="absolute inset-0 rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing shadow-2xl bg-card border border-border"
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="relative w-full h-full">
        <img
          src={pet.image}
          alt={`Foto de ${pet.name}, ${pet.species.toLowerCase()} para adoção`}
          width={1024}
          height={1024}
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />

        {/* Affinity badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg">
          <span className="text-xs font-semibold text-primary">★ {pet.affinity}% match</span>
        </div>

        {/* Swipe labels */}
        <motion.div
          style={{ opacity: likeOpacity }}
          className="absolute top-6 left-6 px-4 py-2 rounded-xl border-2 border-primary text-primary font-extrabold tracking-widest rotate-[-12deg] bg-background/80 backdrop-blur"
        >
          QUERO ❤
        </motion.div>
        <motion.div
          style={{ opacity: passOpacity }}
          className="absolute top-6 right-6 px-4 py-2 rounded-xl border-2 border-secondary text-secondary font-extrabold tracking-widest rotate-[12deg] bg-background/80 backdrop-blur"
        >
          DEPOIS
        </motion.div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-background">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                {pet.name}, <span className="font-normal opacity-90">{pet.age}</span>
              </h2>
              <p className="text-sm opacity-90 mt-1">
                {pet.species} · {pet.breed} · {pet.distance}
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded((v) => !v);
              }}
              className="size-10 shrink-0 rounded-full bg-background/15 backdrop-blur-md border border-background/30 flex items-center justify-center hover:bg-background/25 transition-colors"
              aria-label="Mais detalhes"
            >
              <span className="text-lg">{expanded ? "−" : "ⓘ"}</span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-sm leading-relaxed opacity-95">{pet.story}</p>
                <p className="mt-3 text-xs opacity-80">Resgate · {pet.ong}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {pet.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-background/15 backdrop-blur-md border border-background/25"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function PetCardStatic({ pet }: { pet: Pet }) {
  return (
    <div className="absolute inset-0 rounded-3xl overflow-hidden bg-card border border-border shadow-xl scale-95 opacity-70">
      <img
        src={pet.image}
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        className="w-full h-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
    </div>
  );
}

function ActionBar({ onDecide }: { onDecide: (d: Decision) => void }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-5">
      <ActionButton label="Passar" onClick={() => onDecide("pass")} variant="ghost">
        ✕
      </ActionButton>
      <ActionButton label="Super match" onClick={() => onDecide("super")} variant="super">
        ★
      </ActionButton>
      <ActionButton label="Quero conhecer" onClick={() => onDecide("like")} variant="like">
        ❤
      </ActionButton>
    </div>
  );
}

function ActionButton({
  children,
  label,
  onClick,
  variant,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  variant: "ghost" | "like" | "super";
}) {
  const sizes = variant === "super" ? "size-12 text-lg" : "size-16 text-2xl";
  const styles =
    variant === "like"
      ? "bg-primary text-primary-foreground shadow-glow hover:scale-110"
      : variant === "super"
      ? "bg-secondary text-secondary-foreground shadow-lg hover:scale-110"
      : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:scale-110";
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`${sizes} ${styles} rounded-full flex items-center justify-center transition-all duration-200 active:scale-95`}
    >
      {children}
    </button>
  );
}

function EmptyState({ likedCount, onReset }: { likedCount: number; onReset: () => void }) {
  return (
    <div className="absolute inset-0 rounded-3xl border border-border bg-card flex flex-col items-center justify-center text-center p-8">
      <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mb-5">
        🐾
      </div>
      <h2 className="text-2xl font-bold tracking-tight">Por hoje é só!</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-xs">
        Você conheceu todos os companheiros desta seleção e curtiu{" "}
        <span className="text-primary font-semibold">{likedCount}</span>{" "}
        {likedCount === 1 ? "perfil" : "perfis"}.
      </p>
      <div className="mt-6 flex flex-col gap-2 w-full">
        <button
          type="button"
          onClick={onReset}
          className="w-full px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform"
        >
          Ver novos perfis
        </button>
        <Link
          to="/"
          className="w-full px-5 py-3 rounded-full border border-border text-foreground font-medium hover:border-primary/40 transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function MatchPopup({ pet, onClose }: { pet: Pet; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/60 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="relative w-full max-w-sm rounded-3xl bg-card border border-border p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">É um match!</p>
        <h3 className="mt-2 text-3xl font-bold tracking-tight">Você e {pet.name} ✨</h3>
        <div className="mt-5 mx-auto size-32 rounded-full overflow-hidden border-4 border-primary shadow-glow">
          <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          {pet.name} também combina com você. Inicie uma conversa com a {pet.ong}
          {" "}e dê o próximo passo.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <button
            type="button"
            className="w-full px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform"
          >
            Enviar mensagem
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full px-5 py-3 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            Continuar deslizando
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
