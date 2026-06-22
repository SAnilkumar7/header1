// import { createFileRoute } from "@tanstack/react-router";
// import { Reveal, SectionHeading } from "../components/Reveal";
// import { ArrowRight } from "lucide-react";
// import buddha from "../assets/about-buddha.jpg";
// import ashoka from "../assets/about-ashoka.jpg";
// import ambedkar from "../assets/about-ambedkar.jpg";
// import stupa from "../assets/hero-stupa.jpg";
// import heroBuddha from "../assets/Bodh Gaya.jpg";
// import heroAshoka from "../assets/hero-ashoka.jpg";
// import community from "../assets/hero-community.jpg";
// import krishana from "../assets/Kushinagar.jpg";
// import AjantaCaves from "../assets/Ajanta Caves.jpg";
// import nalanda from "../assets/nalanda.jpg";



// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About — DEVANAMPRIYA | Buddha, Ashoka & Ambedkar" },
//       { name: "description", content: "The story behind Devanampriya — inspired by Lord Buddha, Emperor Ashoka and Dr. B.R. Ambedkar." },
//       { property: "og:title", content: "About DEVANAMPRIYA" },
//       { property: "og:description", content: "Our roots in Dhamma, history and the vision of equality." },
//       { property: "og:url", content: "/about" },
//     ],
//     links: [{ rel: "canonical", href: "/about" }],
//   }),
//   component: AboutPage,
// });

// const FIGURES = [
//   {
//     name: "Lord Buddha",
//     era: "563 – 483 BCE",
//     img: buddha,
//     intro: "The Awakened One who showed the Middle Path — a life of wisdom, ethics and meditation, free from extremes.",
//     points: [
//       "The Four Noble Truths — the nature and cessation of suffering.",
//       "The Noble Eightfold Path — right view, intention, speech, action, livelihood, effort, mindfulness and concentration.",
//       "Universal compassion — Metta extended to all beings, without distinction.",
//     ],
//     quote: "Hatred is never appeased by hatred. It is appeased by love alone.",
//   },
//   {
//     name: "Emperor Ashoka",
//     era: "304 – 232 BCE",
//     img: ashoka,
//     intro: "After Kalinga, the warrior king became Devanampriya — Beloved of the Gods — choosing Dhamma over conquest.",
//     points: [
//       "Transformation after the Kalinga War — renouncing violence forever.",
//       "Spread Buddhism across Asia through emissaries and his children.",
//       "The Ashoka Pillars and Edicts — the world's first proclamation of universal welfare.",
//       "Emperor Ashoka built 86,000 Buddhist viharas across India.",
//     ],
//     quote: "All men are my children. I desire for my children their welfare and happiness.",
//   },
//   {
//     name: "Dr. B.R. Ambedkar",
//     era: "1891 – 1956",
//     img: ambedkar,
//     intro: "Architect of the Indian Constitution and modern apostle of equality, who revived Buddhism for millions.",
//     points: [
//       "Lifelong struggle for the dignity and rights of the marginalised.",
//       "Drafted the Constitution of India — a charter of liberty, equality and fraternity.",
//       "Embraced Buddhism in 1956, leading the great Dhamma revival.",
//     ],
//     quote: "Cultivation of mind should be the ultimate aim of human existence.",
//   },
// ] as const;

// const PLACES = [
//   { name: "Sanchi Stupa", img: stupa, desc: "The oldest stone structure in India — a UNESCO World Heritage site of serene grandeur." },
//   { name: "Bodh Gaya", img: heroBuddha, desc: "Where the Buddha attained Enlightenment beneath the sacred Bodhi tree." },
//   { name: "Sarnath", img: heroAshoka, desc: "The deer park where the first sermon — Dhammacakkappavattana — was preached." },
//   { name: "Kushinagar", img: krishana, desc: "The hallowed site of the Buddha's Mahaparinirvana." },
//   { name: "Ajanta Caves", img: AjantaCaves, desc: "Rock-cut wonders adorned with the finest Buddhist murals of ancient India." },
//   { name: "Nalanda University", img: nalanda, desc: "The ancient seat of learning that lit the lamp of wisdom across Asia." },
// ];

// function AboutPage() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-[var(--royal-deep)] pt-32 pb-20 text-white">
//         <img src={heroBuddha} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)] via-[var(--royal-deep)]/70 to-[var(--royal-deep)]/40" />
//         <div className="container-page relative">
//           <Reveal>
//             <span className="eyebrow">Our Story</span>
//             <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Three voices across <span className="text-gradient-gold">two and a half millennia</span> — one timeless message.
//             </h1>
//             <p className="mt-6 max-w-2xl text-lg text-white/80">From the Buddha's enlightenment to Ashoka's transformation to Ambedkar's awakening — we carry forward a living tradition of compassion and justice.</p>
//           </Reveal>
//         </div>
//       </section>

//       {/* FIGURES — alternating timeline */}
//       <section className="bg-background py-24 md:py-32">
//         <div className="container-page space-y-28">
//           {FIGURES.map((f, i) => (
//             <div key={f.name} className="grid items-center gap-12 lg:grid-cols-2">
//               <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
//                 <div className="relative">
//                   <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-[var(--gold-soft)] to-transparent" />
//                   <img src={f.img} alt={f.name} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" />
//                 </div>
//               </Reveal>
//               <Reveal delay={0.1}>
//                 <span className="eyebrow">{f.era}</span>
//                 <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">{f.name}</h2>
//                 <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{f.intro}</p>
//                 <ul className="mt-6 space-y-3">
//                   {f.points.map((p) => (
//                     <li key={p} className="flex gap-3 text-foreground/85">
//                       <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" /> {p}
//                     </li>
//                   ))}
//                 </ul>
//                 <blockquote className="mt-7 border-l-4 border-[var(--gold)] bg-secondary/60 p-5 italic text-foreground/80">
//                   "{f.quote}"
//                 </blockquote>
//               </Reveal>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PLACES */}
//       <section className="bg-secondary/40 py-24 md:py-32">
//         <div className="container-page">
//           <Reveal><SectionHeading center eyebrow="Sacred Heritage" title="Famous Buddhist places" subtitle="Pilgrimage sites that hold the breath of history and the silence of meditation." /></Reveal>
//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {PLACES.map((p, i) => (
//               <Reveal key={p.name} delay={i * 0.05}>
//                 <article className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
//                   <div className="aspect-[4/3] overflow-hidden">
//                     <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold">{p.name}</h3>
//                     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
//                     <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)] transition hover:text-[var(--gold)]">Learn more <ArrowRight className="h-4 w-4" /></button>
//                   </div>
//                 </article>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "../components/Reveal";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import buddha from "../assets/about-buddha.jpg";
import ashoka from "../assets/about-ashoka.jpg";
import ambedkar from "../assets/about-ambedkar.jpg";
import stupa from "../assets/hero-stupa.jpg";
import heroBuddha from "../assets/Bodh Gaya.jpg";
import heroAshoka from "../assets/hero-ashoka.jpg";
import krishana from "../assets/kushinagar.jpg";
import AjantaCaves from "../assets/Ajanta Caves.jpg";
import nalanda from "../assets/nalanda.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DEVANAMPRIYA | Buddha, Ashoka & Ambedkar" },
      { name: "description", content: "The story behind Devanampriya — inspired by Lord Buddha, Emperor Ashoka and Dr. B.R. Ambedkar." },
      { property: "og:title", content: "About DEVANAMPRIYA" },
      { property: "og:description", content: "Our roots in Dhamma, history and the vision of equality." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const FIGURES = [
  {
    name: "Lord Buddha",
    era: "563 – 483 BCE",
    img: buddha,
    intro: "The Awakened One who showed the Middle Path — a life of wisdom, ethics and meditation, free from extremes.",
    points: [
      "The Four Noble Truths — the nature and cessation of suffering.",
      "The Noble Eightfold Path — right view, intention, speech, action, livelihood, effort, mindfulness and concentration.",
      "Universal compassion — Metta extended to all beings, without distinction.",
    ],
    quote: "Hatred is never appeased by hatred. It is appeased by love alone.",
  },
  {
    name: "Emperor Ashoka",
    era: "304 – 232 BCE",
    img: ashoka,
    intro: "After Kalinga, the warrior king became Devanampriya — Beloved of the Gods — choosing Dhamma over conquest.",
    points: [
      "Transformation after the Kalinga War — renouncing violence forever.",
      "Spread Buddhism across Asia through emissaries and his children.",
      "The Ashoka Pillars and Edicts — the world's first proclamation of universal welfare.",
      "Emperor Ashoka built 86,000 Buddhist viharas across India.",
    ],
    quote: "All men are my children. I desire for my children their welfare and happiness.",
  },
  {
    name: "Dr. B.R. Ambedkar",
    era: "1891 – 1956",
    img: ambedkar,
    intro: "Architect of the Indian Constitution and modern apostle of equality, who revived Buddhism for millions.",
    points: [
      "Lifelong struggle for the dignity and rights of the marginalised.",
      "Drafted the Constitution of India — a charter of liberty, equality and fraternity.",
      "Embraced Buddhism in 1956, leading the great Dhamma revival.",
    ],
    quote: "Cultivation of mind should be the ultimate aim of human existence.",
  },
] as const;

const PLACES = [
  { 
    name: "Sanchi Stupa", 
    img: stupa, 
    desc: "The oldest stone structure in India — a UNESCO World Heritage site of serene grandeur.",
    details: "Built by Emperor Ashoka in the 3rd century BCE, Sanchi Stupa is a masterpiece of Buddhist architecture. Its intricately carved toranas (gateways) depict Jataka tales and scenes from the Buddha's life, making it one of the most important Buddhist monuments in the world."
  },
  { 
    name: "Bodh Gaya", 
    img: heroBuddha, 
    desc: "Where the Buddha attained Enlightenment beneath the sacred Bodhi tree.",
    details: "The holiest site in Buddhism, Bodh Gaya is where Siddhartha Gautama attained enlightenment and became the Buddha. The Mahabodhi Temple complex, a UNESCO World Heritage site, houses the sacred Bodhi tree and the Vajrasana (Diamond Throne)."
  },
  { 
    name: "Sarnath", 
    img: heroAshoka, 
    desc: "The deer park where the first sermon — Dhammacakkappavattana — was preached.",
    details: "Sarnath marks the place where the Buddha delivered his first sermon, setting in motion the Wheel of Dharma. The Dhamek Stupa and the famous Ashoka Pillar with its four-lion capital, which is now India's national emblem, stand as enduring symbols of this momentous event."
  },
  { 
    name: "Kushinagar", 
    img: krishana, 
    desc: "The hallowed site of the Buddha's Mahaparinirvana.",
    details: "Kushinagar is the sacred site where the Buddha passed into Mahaparinirvana at the age of 80. The Parinirvana Stupa houses a magnificent 6-meter-long reclining Buddha statue, attracting pilgrims from around the world who come to pay their respects."
  },
  { 
    name: "Ajanta Caves", 
    img: AjantaCaves, 
    desc: "Rock-cut wonders adorned with the finest Buddhist murals of ancient India.",
    details: "The Ajanta Caves, a UNESCO World Heritage site, contain some of the finest surviving examples of ancient Indian art. These 29 rock-cut Buddhist cave monuments feature exquisite paintings and sculptures depicting the life of the Buddha and Jataka tales."
  },
  { 
    name: "Nalanda University", 
    img: nalanda, 
    desc: "The ancient seat of learning that lit the lamp of wisdom across Asia.",
    details: "Nalanda University was one of the world's first residential universities, attracting scholars from across Asia from the 5th to 12th centuries CE. It housed over 10,000 students and teachers, preserving and advancing Buddhist philosophy, mathematics, astronomy, and medicine."
  },
];

function AboutPage() {
  const [selectedPlace, setSelectedPlace] = useState<typeof PLACES[0] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedPlace(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-[var(--royal-deep)] pt-32 pb-20 text-white">
        <img src={heroBuddha} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)] via-[var(--royal-deep)]/70 to-[var(--royal-deep)]/40" />
        <div className="container-page relative">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Three voices across <span className="text-gradient-gold">two and a half millennia</span> — one timeless message.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">From the Buddha's enlightenment to Ashoka's transformation to Ambedkar's awakening — we carry forward a living tradition of compassion and justice.</p>
          </Reveal>
        </div>
      </section>

      {/* FIGURES — alternating timeline */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-page space-y-28">
          {FIGURES.map((f, i) => (
            <div key={f.name} className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-[var(--gold-soft)] to-transparent" />
                  <img src={f.img} alt={f.name} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="eyebrow">{f.era}</span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">{f.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{f.intro}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3 text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" /> {p}
                    </li>
                  ))}
                </ul>
                <blockquote className="mt-7 border-l-4 border-[var(--gold)] bg-secondary/60 p-5 italic text-foreground/80">
                  "{f.quote}"
                </blockquote>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* PLACES */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-page">
          <Reveal><SectionHeading center eyebrow="Sacred Heritage" title="Famous Buddhist places" subtitle="Pilgrimage sites that hold the breath of history and the silence of meditation." /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLACES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <article className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <button 
                      onClick={() => setSelectedPlace(p)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)] transition hover:text-[var(--gold)]"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[var(--royal-deep)] p-4 flex items-center justify-center"
            onClick={() => setSelectedPlace(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPlace(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-[var(--royal)] text-white hover:bg-[var(--royal-deep)] transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-[300px] md:h-[400px] overflow-hidden bg-[var(--royal-deep)]">
                <img 
                  src={selectedPlace.img} 
                  alt={selectedPlace.name} 
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--royal-deep)]">{selectedPlace.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-700">{selectedPlace.desc}</p>
                
                <div className="mt-6 p-4 bg-[var(--gold-soft)] rounded-xl border border-[var(--gold)]">
                  <p className="text-sm leading-relaxed text-[var(--royal-deep)]">
                    {selectedPlace.details}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPlace(null)}
                  className="mt-6 w-full py-3 bg-[var(--royal)] text-white rounded-xl font-semibold hover:bg-[var(--royal-deep)] transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}