// import { createFileRoute } from "@tanstack/react-router";
// import { useState, useEffect, useCallback } from "react";
// import { Reveal } from "../components/Reveal";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// import community from "../assets/hero-community.jpg";
// import education from "../assets/hero-education.jpg";
// import stupa from "../assets/hero-stupa.jpg";
// import ashoka from "../assets/hero-ashoka.jpg";
// import buddha from "../assets/hero-buddha.jpg";
// import aboutBuddha from "../assets/about-buddha.jpg";
// import aboutAshoka from "../assets/about-ashoka.jpg";
// import aboutAmbedkar from "../assets/about-ambedkar.jpg";

// export const Route = createFileRoute("/gallery")({
//   head: () => ({
//     meta: [
//       { title: "Gallery — DEVANAMPRIYA" },
//       { name: "description", content: "Photographs from our events, community service, education and welfare programmes." },
//       { property: "og:title", content: "Gallery — DEVANAMPRIYA" },
//       { property: "og:description", content: "Moments of compassion in action." },
//       { property: "og:url", content: "/gallery" },
//     ],
//     links: [{ rel: "canonical", href: "/gallery" }],
//   }),
//   component: GalleryPage,
// });

// const CATS = ["All", "Events", "Community", "Education", "Buddhist Programs", "Welfare"] as const;
// type Cat = typeof CATS[number];

// const ITEMS: { img: string; cat: Exclude<Cat, "All">; title: string }[] = [
//   { img: community, cat: "Community", title: "Community Kitchen" },
//   { img: education, cat: "Education", title: "Rural Classroom" },
//   { img: stupa, cat: "Buddhist Programs", title: "Heritage Walk — Sanchi" },
//   { img: ashoka, cat: "Events", title: "Ashoka Day" },
//   { img: buddha, cat: "Buddhist Programs", title: "Meditation Retreat" },
//   { img: aboutBuddha, cat: "Buddhist Programs", title: "Dhamma Talk" },
//   { img: aboutAshoka, cat: "Events", title: "Annual Convention" },
//   { img: aboutAmbedkar, cat: "Welfare", title: "Constitution Day" },
//   { img: community, cat: "Welfare", title: "Health Camp" },
//   { img: education, cat: "Education", title: "Scholarship Day" },
//   { img: stupa, cat: "Events", title: "Vesak Celebration" },
//   { img: ashoka, cat: "Community", title: "Village Outreach" },
// ];

// function GalleryPage() {
//   const [cat, setCat] = useState<Cat>("All");
//   const [openIdx, setOpenIdx] = useState<number | null>(null);
//   const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

//   const close = useCallback(() => setOpenIdx(null), []);
//   const prev = useCallback(() => setOpenIdx((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)), [filtered.length]);
//   const next = useCallback(() => setOpenIdx((i) => (i === null ? i : (i + 1) % filtered.length)), [filtered.length]);

//   useEffect(() => {
//     if (openIdx === null) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [openIdx, close, prev, next]);

//   const current = openIdx !== null ? filtered[openIdx] : null;

//   return (
//     <>
//       <section className="bg-[var(--royal-deep)] pt-32 pb-16 text-white">
//         <div className="container-page">
//           <Reveal>
//             <span className="eyebrow">Gallery</span>
//             <h1 className="mt-4 text-4xl font-semibold sm:text-5xl md:text-6xl">A visual <span className="text-gradient-gold">journal</span> of our journey.</h1>
//           </Reveal>
//         </div>
//       </section>

//       <section className="bg-background py-16 md:py-20">
//         <div className="container-page">
//           <div className="flex flex-wrap gap-2">
//             {CATS.map((c) => (
//               <button key={c} onClick={() => setCat(c)}
//                 className={`rounded-full px-5 py-2 text-sm font-medium transition ${cat === c ? "bg-[var(--royal)] text-white" : "border border-border text-foreground hover:border-[var(--gold)] hover:text-[var(--royal)]"}`}>
//                 {c}
//               </button>
//             ))}
//           </div>

//           <motion.div layout className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
//             <AnimatePresence>
//               {filtered.map((item, idx) => (
//                 <motion.button layout key={item.title + item.img}
//                   initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
//                   onClick={() => setOpenIdx(idx)}
//                   className="group relative aspect-square overflow-hidden rounded-xl bg-secondary">
//                   <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
//                   <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--royal-deep)]/85 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
//                     <div className="text-left">
//                       <div className="text-xs uppercase tracking-wider text-[var(--gold)]">{item.cat}</div>
//                       <div className="mt-1 font-semibold text-white">{item.title}</div>
//                     </div>
//                   </div>
//                 </motion.button>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>

//       <AnimatePresence>
//         {current && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={close}
//             className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur">
//             {/* Close */}
//             <button
//               onClick={(e) => { e.stopPropagation(); close(); }}
//               aria-label="Close"
//               className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
//             >
//               <X className="h-5 w-5" />
//             </button>

//             {/* Prev */}
//             <button
//               onClick={(e) => { e.stopPropagation(); prev(); }}
//               aria-label="Previous"
//               className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-[var(--gold)] hover:text-[var(--royal-deep)] sm:left-6 sm:h-14 sm:w-14"
//             >
//               <ChevronLeft className="h-7 w-7" />
//             </button>

//             {/* Next */}
//             <button
//               onClick={(e) => { e.stopPropagation(); next(); }}
//               aria-label="Next"
//               className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-[var(--gold)] hover:text-[var(--royal-deep)] sm:right-6 sm:h-14 sm:w-14"
//             >
//               <ChevronRight className="h-7 w-7" />
//             </button>

//             {/* Image with swipe */}
//             <motion.div
//               key={current.img + openIdx}
//               className="flex max-h-[85vh] w-full max-w-5xl flex-col items-center px-12"
//               onClick={(e) => e.stopPropagation()}
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={0.2}
//               onDragEnd={(_, info) => {
//                 if (info.offset.x < -80) next();
//                 else if (info.offset.x > 80) prev();
//               }}
//             >
//               <motion.img
//                 initial={{ opacity: 0, scale: 0.96 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//                 src={current.img}
//                 alt={current.title}
//                 draggable={false}
//                 className="max-h-[70vh] w-auto select-none rounded-xl object-contain shadow-2xl"
//               />
//               <div className="mt-4 text-center text-white">
//                 <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{current.cat}</div>
//                 <div className="mt-1 text-lg font-semibold">{current.title}</div>
//                 <div className="mt-1 text-xs text-white/60">{openIdx! + 1} / {filtered.length} · Swipe or use arrows</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }







import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Reveal } from "../components/Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import community from "../assets/social.jpg";
import Religious from "../assets/Religious.jpg";
import education from "../assets/youth.jpg";
import education1 from "../assets/industdevelopments.jpg";
import Event1 from "../assets/Event1.jpg";
import Event from "../assets/Event.jpg";
import buddha from "../assets/program.jpg";
import buddha1 from "../assets/program1.jpg";
import aboutBuddha from "../assets/monk.jpg";
import welfare from "../assets/welfare.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — DEVANAMPRIYA" },
      { name: "description", content: "Photographs from our events, community service, education and welfare programmes." },
      { property: "og:title", content: "Gallery — DEVANAMPRIYA" },
      { property: "og:description", content: "Moments of compassion in action." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const CATS = ["All", "Events", "Community", "Education", "Buddhist Programs", "Welfare"] as const;
type Cat = typeof CATS[number];

const ITEMS: { img: string; cat: Exclude<Cat, "All">; title: string }[] = [
  { img: community, cat: "Community", title: "Community Kitchen" },
  { img: education, cat: "Education", title: "Rural Classroom" },
  { img: buddha1, cat: "Buddhist Programs", title: "Heritage Walk — Sanchi" },
  { img: Event, cat: "Events", title: "Ashoka Day" },
  { img: buddha, cat: "Buddhist Programs", title: "Meditation Retreat" },
  { img: aboutBuddha, cat: "Buddhist Programs", title: "Dhamma Talk" },
  { img: welfare, cat: "Welfare", title: "Constitution Day" },
  { img: community, cat: "Welfare", title: "Health Camp" },
  { img: education1, cat: "Education", title: "Scholarship Day" },
  { img: Event1, cat: "Events", title: "Vesak Celebration" },
  { img: Religious, cat: "Community", title: "Village Outreach" },
];

function GalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(() => setOpenIdx((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)), [filtered.length]);
  const next = useCallback(() => setOpenIdx((i) => (i === null ? i : (i + 1) % filtered.length)), [filtered.length]);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, close, prev, next]);

  const current = openIdx !== null ? filtered[openIdx] : null;

  return (
    <>
      <section className="bg-[var(--royal-deep)] pt-32 pb-16 text-white">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Gallery</span>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl md:text-6xl">A visual <span className="text-gradient-gold">journal</span> of our journey.</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${cat === c ? "bg-[var(--royal)] text-white" : "border border-border text-foreground hover:border-[var(--gold)] hover:text-[var(--royal)]"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* ✅ Updated: Removed fixed aspect ratio - images show in natural sizes */}
          <motion.div layout className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence>
              {filtered.map((item, idx) => (
                <motion.button 
                  layout 
                  key={item.title + item.img}
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setOpenIdx(idx)}
                  className="group relative overflow-hidden rounded-xl bg-secondary"
                >
                  {/* ✅ Removed aspect-square and object-cover - images now show full size */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    loading="lazy" 
                    className="w-full transition duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--royal-deep)]/85 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-wider text-[var(--gold)]">{item.cat}</div>
                      <div className="mt-1 font-semibold text-white">{item.title}</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {current && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur">
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-[var(--gold)] hover:text-[var(--royal-deep)] sm:left-6 sm:h-14 sm:w-14"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-[var(--gold)] hover:text-[var(--royal-deep)] sm:right-6 sm:h-14 sm:w-14"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {/* Image with swipe */}
            <motion.div
              key={current.img + openIdx}
              className="flex max-h-[85vh] w-full max-w-5xl flex-col items-center px-12"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={current.img}
                alt={current.title}
                draggable={false}
                className="max-h-[70vh] w-auto select-none rounded-xl object-contain shadow-2xl"
              />
              <div className="mt-4 text-center text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{current.cat}</div>
                <div className="mt-1 text-lg font-semibold">{current.title}</div>
                <div className="mt-1 text-xs text-white/60">{openIdx! + 1} / {filtered.length} · Swipe or use arrows</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}