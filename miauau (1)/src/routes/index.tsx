import { createFileRoute, Link } from "@tanstack/react-router";
import heroDog from "@/assets/hero-dog.jpg";
import petLuna from "@/assets/pet-luna.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MiauAu — Encontrando lares. Criando famílias." },
      { name: "description", content: "Conecte-se com animais resgatados e encontre o novo membro da sua família. Uma experiência emocional de adoção consciente." },
      { property: "og:title", content: "MiauAu — Encontrando lares. Criando famílias." },
      { property: "og:description", content: "Conecte-se com animais resgatados e encontre o novo membro da sua família." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <MatchPreview />
        <HappyStories />
        <Donation />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/75 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <span className="text-primary-foreground text-lg">🐾</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">MiauAu</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#match" className="hover:text-primary transition-colors">Match</a>
          <a href="#historias" className="hover:text-primary transition-colors">Histórias</a>
          <a href="#doacao" className="hover:text-primary transition-colors">Doação</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 rounded-full transition-all">
            Entrar
          </button>
          <button className="px-5 sm:px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg shadow-primary/25 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95">
            Criar Conta
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* ambient particles */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 size-2 rounded-full bg-primary/40 animate-float" />
        <div className="absolute top-64 right-1/4 size-3 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/3 size-1.5 rounded-full bg-primary/50 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            12 novos amigos resgatados hoje
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight text-balance">
            Seu novo melhor amigo pode estar{" "}
            <span className="text-primary">esperando</span> por você ❤️
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed text-pretty">
            Encontrando lares. Criando famílias. Uma experiência emocional de conexão com animais que buscam um recomeço.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/quiz" className="px-7 py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:translate-y-0">
              Encontrar meu companheiro ideal
            </Link>
            <a href="#sobre" className="px-7 py-4 bg-surface-100 text-foreground font-bold rounded-2xl hover:bg-surface-200 transition-all">
              Conheça o projeto
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "18.4k+", l: "Adotados" },
              { v: "320+", l: "ONGs" },
              { v: "98%", l: "Sucesso" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-bold text-foreground">{s.v}</dt>
                <dd className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div aria-hidden className="absolute -inset-6 bg-primary/15 rounded-[3rem] blur-3xl" />
          <div aria-hidden className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-[2.75rem] blur-2xl" />
          <div className="relative w-full aspect-[4/5] rounded-[2.5rem] shadow-2xl outline outline-1 -outline-offset-1 outline-black/5 overflow-hidden bg-surface-100">
            <img
              src={heroDog}
              alt="Cachorro resgatado olhando diretamente para a câmera"
              width={1024}
              height={1280}
              className="size-full object-cover"
              fetchPriority="high"
            />
          </div>
          {/* floating glass card */}
          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-background/85 backdrop-blur-xl border border-border p-5 rounded-2xl shadow-2xl max-w-[260px] animate-float">
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 rounded-full bg-success" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-success">98% Compatível</span>
            </div>
            <p className="text-sm font-medium leading-snug">"Pipoca adora tardes calmas no sofá — perfeita para apartamentos."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Crie sua conta", d: "Em menos de um minuto você faz parte da maior rede de carinho do Brasil.", c: "bg-primary/10 text-primary" },
    { n: "02", t: "Faça o Quiz", d: "Nossa IA entende sua rotina e espaço para sugerir o pet ideal para você.", c: "bg-secondary/10 text-secondary" },
    { n: "03", t: "Conheça animais", d: "Explore perfis 100% compatíveis com seu estilo de vida.", c: "bg-success/10 text-success" },
    { n: "04", t: "Encontre seu amigo", d: "Agende uma visita e prepare-se para receber um novo membro na família.", c: "bg-accent text-accent-foreground" },
  ];
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Jornada</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 tracking-tight">Como encontrar sua família</h2>
          <p className="text-muted-foreground">Quatro passos guiados por tecnologia e coração.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className={`size-12 rounded-2xl flex items-center justify-center font-bold ${s.c} group-hover:scale-110 transition-transform`}>
                {s.n}
              </div>
              <h3 className="mt-6 font-bold text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatchPreview() {
  return (
    <section id="match" className="py-24 lg:py-32 bg-surface-50 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Match Inteligente</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 tracking-tight text-balance">
            Conexões que tocam o coração
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Inspirado no que há de melhor em apps de relacionamento, mas humanizado: conheça a personalidade de cada animal antes mesmo do primeiro encontro.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Algoritmo de compatibilidade baseado no seu Quiz",
              "Fotos, vídeos e histórias de cada resgate",
              "Chat direto com a ONG responsável",
              "Agendamento de visita em poucos cliques",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 size-5 rounded-full bg-success/15 text-success flex items-center justify-center text-xs font-bold">✓</span>
                <span className="text-foreground/85">{f}</span>
              </li>
            ))}
          </ul>
          <Link to="/quiz" className="inline-block px-7 py-4 bg-foreground text-background font-bold rounded-2xl hover:scale-105 transition-transform">
            Começar agora
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md relative group">
            <div aria-hidden className="absolute -inset-3 bg-gradient-to-b from-primary to-secondary opacity-15 blur-2xl group-hover:opacity-25 transition-opacity rounded-[3rem]" />
            <article className="relative bg-card rounded-[2.5rem] shadow-2xl overflow-hidden border border-border">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={petLuna}
                  alt="Luna, gata resgatada à espera de adoção"
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-primary tracking-wider">
                    Esperando há 428 dias
                  </span>
                  <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-white tracking-wider">
                    Curitiba, PR
                  </span>
                </div>
              </div>
              <div className="p-7">
                <div className="flex justify-between items-end mb-3 gap-3">
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold truncate">Luna, 2 anos</h3>
                    <p className="text-muted-foreground text-sm font-medium">Porte Médio • Vacinada • Castrada</p>
                  </div>
                  <span className="shrink-0 text-success font-bold bg-success/10 px-3 py-1 rounded-full text-xs">
                    98% Match
                  </span>
                </div>
                <p className="text-muted-foreground italic leading-relaxed mb-7 text-sm">
                  "Luna ama brincar de bolinha e espera há mais de 400 dias por uma família que entenda seu tempo de adaptação."
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-border font-bold hover:bg-surface-100 transition-all">
                    <span>👋</span> Passar
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all">
                    <span>❤️</span> Conhecer
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function HappyStories() {
  return (
    <section id="historias" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Histórias Felizes</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-4 tracking-tight">
          <span className="text-primary">18.425+</span> vidas transformadas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
          Animais que deixaram as ruas para se tornarem o coração de uma nova família.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            { name: "Família Soares", pet: "Barthô", time: "Adotaram há 6 meses", q: "Estava muito debilitado quando o encontramos. Hoje ele é o rei da casa e não dorme sem o cobertor azul." },
            { name: "Mariana Luz", pet: "Luna", time: "Adotou há 1 ano", q: "Era arisca no abrigo. Hoje ronrona assim que sento no sofá. O melhor presente que já me dei." },
            { name: "Pedro Henrique", pet: "Thor", time: "Adotou há 3 meses", q: "Thor mudou minha rotina inteira. Acordo cedo, caminho mais — e nunca mais me senti sozinho." },
          ].map((s) => (
            <article key={s.name} className="p-8 rounded-3xl bg-card border border-border hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">❤️</div>
              <p className="italic text-foreground/80 leading-relaxed mb-6">"{s.q}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div className="min-w-0">
                  <p className="font-bold text-sm truncate">{s.name} & {s.pet}</p>
                  <p className="text-xs text-muted-foreground">{s.time}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Donation() {
  const values = ["R$ 5", "R$ 10", "R$ 20", "Outro"];
  return (
    <section id="doacao" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-secondary rounded-[2.5rem] lg:rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div aria-hidden className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <div className="absolute -right-20 -top-20 size-80 rounded-full border-[40px] border-white" />
            <div className="absolute right-40 bottom-10 size-40 rounded-full bg-white" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">Patrocine um Focinho</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight tracking-tight">
                Nem todos podem adotar.<br />Todos podem ajudar.
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-md">
                Sua doação garante comida, vacina e abrigo para quem ainda espera por uma família.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {values.map((v, i) => (
                  <button
                    key={v}
                    className={`p-4 rounded-2xl font-bold transition-all ${
                      i === 2
                        ? "bg-white text-secondary shadow-xl shadow-black/20"
                        : "bg-white/10 border border-white/20 text-white hover:bg-white hover:text-secondary"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 py-4 px-5 bg-white/10 rounded-2xl border border-white/15">
                <div className="size-10 shrink-0 bg-success rounded-full flex items-center justify-center text-success-foreground font-bold">✓</div>
                <p className="text-white font-medium text-sm">
                  Com <span className="font-bold">R$ 20</span> você alimenta um animal por 5 dias.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 self-center">
              <div className="bg-white/95 backdrop-blur p-7 rounded-3xl shadow-2xl">
                <div className="text-4xl font-bold text-primary mb-1">18.425</div>
                <div className="text-xs font-bold uppercase tracking-widest text-foreground/50">Vidas Transformadas</div>
              </div>
              <div className="bg-white/95 backdrop-blur p-7 rounded-3xl shadow-2xl mt-10">
                <div className="text-4xl font-bold text-secondary mb-1">R$ 240k</div>
                <div className="text-xs font-bold uppercase tracking-widest text-foreground/50">Em Doações</div>
              </div>
              <div className="bg-white/95 backdrop-blur p-7 rounded-3xl shadow-2xl col-span-2">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">Meta de Dezembro</span>
                  <span className="text-sm font-bold text-secondary">72%</span>
                </div>
                <div className="h-2 rounded-full bg-surface-100 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: "72%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
          Existe alguém esperando para te chamar de família.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Comece sua jornada agora. Em 2 minutos você conhece animais perfeitos para o seu estilo de vida.
        </p>
        <Link to="/quiz" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 transition-all text-lg">
          Encontrar meu companheiro ideal
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-sm">🐾</span>
          </div>
          <span className="text-lg font-bold text-primary">MiauAu</span>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          © 2026 MiauAu — Encontrando lares. Criando famílias.
        </p>
        <div className="flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Termos</a>
          <a href="#" className="hover:text-primary transition-colors">ONGs</a>
        </div>
      </div>
    </footer>
  );
}
