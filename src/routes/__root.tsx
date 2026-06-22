// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {
//   Outlet,
//   Link,
//   createRootRouteWithContext,
//   useRouter,
//   HeadContent,
//   Scripts,
// } from "@tanstack/react-router";
// import { useEffect, useState, type ReactNode } from "react";
// import { Menu, X, HandHeart, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

// const Facebook = (p: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>);
// const Instagram = (p: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
// const Youtube = (p: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M23 12s0-3.7-.47-5.48a2.78 2.78 0 0 0-2-2C18.75 4 12 4 12 4s-6.75 0-8.53.5a2.78 2.78 0 0 0-2 2C1 8.3 1 12 1 12s0 3.7.47 5.48a2.78 2.78 0 0 0 2 2C5.25 20 12 20 12 20s6.75 0 8.53-.5a2.78 2.78 0 0 0 2-2C23 15.7 23 12 23 12zM10 15.5v-7l6 3.5z"/></svg>);
// const Twitter = (p: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2H21.5l-7.5 8.58L22.5 22h-6.844l-5.36-7.01L4.2 22H.94l8.02-9.17L1.5 2h7.014l4.84 6.4L18.244 2zm-1.2 18h1.86L7.06 4h-1.99l11.974 16z"/></svg>);
// import { motion, AnimatePresence } from "framer-motion";

// import appCss from "../styles.css?url";
// import logo from "../assets/logo.png";
// import { reportLovableError } from "../lib/lovable-error-reporting";

// const NAV = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/objectives", label: "Objectives" },
//   { to: "/activities", label: "Activities" },
//   { to: "/gallery", label: "Gallery" },
//   { to: "/contact", label: "Contact" },
// ] as const;

// function NotFoundComponent() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="text-8xl font-bold text-gradient-gold">404</h1>
//         <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>
//         <p className="mt-2 text-sm text-muted-foreground">The path you seek is not yet paved.</p>
//         <div className="mt-6">
//           <Link to="/" className="btn-primary">Return Home</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
//   console.error(error);
//   const router = useRouter();
//   useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="text-2xl font-semibold">Something went off the path</h1>
//         <p className="mt-2 text-sm text-muted-foreground">Please try again or return home.</p>
//         <div className="mt-6 flex justify-center gap-3">
//           <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
//           <a href="/" className="btn-outline" style={{ color: "var(--royal)", borderColor: "var(--royal)" }}>Home</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
//   head: () => ({
//     meta: [
//       { charSet: "utf-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//       { title: "DEVANAMPRIYA — Guided by Dhamma, United by Humanity" },
//       { name: "description", content: "DEVANAMPRIYA NGO — spreading Dhamma, equality, compassion and social justice inspired by Lord Buddha and Dr. B.R. Ambedkar." },
//       { name: "author", content: "DEVANAMPRIYA" },
//       { name: "theme-color", content: "#0A1F5B" },
//       { property: "og:site_name", content: "DEVANAMPRIYA" },
//       { property: "og:type", content: "website" },
//       { property: "og:title", content: "DEVANAMPRIYA — Guided by Dhamma, United by Humanity" },
//       { property: "og:description", content: "Spreading Dhamma, equality, compassion and social justice." },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//     links: [
//       { rel: "stylesheet", href: appCss },
//       { rel: "preconnect", href: "https://fonts.googleapis.com" },
//       { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
//       { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
//     ],
//   }),
//   shellComponent: RootShell,
//   component: RootComponent,
//   notFoundComponent: NotFoundComponent,
//   errorComponent: ErrorComponent,
// });

// function RootShell({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head><HeadContent /></head>
//       <body>{children}<Scripts /></body>
//     </html>
//   );
// }

// function ScrollProgress() {
//   const [progress, setProgress] = useState(0);
//   useEffect(() => {
//     const onScroll = () => {
//       const h = document.documentElement;
//       const total = h.scrollHeight - h.clientHeight;
//       setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
//       <div className="h-full bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)]" style={{ width: `${progress}%`, transition: "width .1s linear" }} />
//     </div>
//   );
// }

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-[var(--royal-deep)]/95 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
//       <div className="container-page flex h-20 items-center justify-between gap-4">
//         <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
//           <img src={logo} alt="DEVANAMPRIYA" className="h-14 w-auto shrink-0 object-contain" />
//           <div className="min-w-0">
//             <div className="text-lg font-bold tracking-wider text-white sm:text-xl">DEVANAMPRIYA</div>
//             <div className="hidden text-[10px] uppercase tracking-[0.25em] text-[var(--gold-soft)] sm:block">Dhamma • Humanity • Equality</div>
//           </div>
//         </Link>
//         <nav className="hidden items-center gap-1 lg:flex">
//           {NAV.map((n) => (
//             <Link key={n.to} to={n.to} className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
//               activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold text-[var(--royal-deep)] bg-[var(--gold)]" }}
//               activeOptions={{ exact: n.to === "/" }}>
//               {n.label}
//             </Link>
//           ))}
//           <Link to="/donate" className="btn-primary ml-3 !py-2 !px-5 !text-sm hidden lg:inline-flex"><HandHeart className="h-4 w-4" /> Donate</Link>
//         </nav>
//         <div className="flex items-center gap-2 lg:hidden">
//           <Link to="/donate" className="btn-primary !py-2 !px-3 !text-xs"><HandHeart className="h-3 w-3" /> </Link>
//           <button aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className="rounded-full p-2 text-white">
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>
//       <AnimatePresence>
//         {open && (
//           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 lg:hidden">
//             <div className="container-page flex flex-col gap-1 py-4">
//               {NAV.map((n) => (
//                 <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
//                   activeProps={{ className: "rounded-lg px-4 py-3 text-sm font-semibold text-[var(--royal-deep)] bg-[var(--gold)]" }} activeOptions={{ exact: n.to === "/" }}>
//                   {n.label}
//                 </Link>
//               ))}
//               <Link to="/donate" onClick={() => setOpen(false)} className="btn-primary mt-2"><HandHeart className="h-4 w-4" /> Donate Now</Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-[var(--royal-deep)] text-white/80">
//       <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
//         <div>
//           <div className="flex items-center gap-3">
//             <img src={logo} alt="" className="h-14 w-auto object-contain" />
//             <div className="text-xl font-bold tracking-wider text-white">DEVANAMPRIYA</div>
//           </div>
//           <p className="mt-4 text-sm leading-relaxed">Guided by Dhamma, united by humanity, inspired by equality. Building a peaceful and just society for all.</p>
//           <div className="mt-5 flex gap-3">
//             {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
//               <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--royal-deep)]"><Icon className="h-4 w-4" /></a>
//             ))}
//           </div>
//         </div>
//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Explore</h4>
//           <ul className="mt-4 space-y-2 text-sm">
//             {NAV.map((n) => (<li key={n.to}><Link to={n.to} className="transition hover:text-[var(--gold)]">{n.label}</Link></li>))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Contact</h4>
//           <ul className="mt-4 space-y-3 text-sm">
//             <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-[var(--gold)]" /> 12, Bodhi Marg, Nagpur, Maharashtra, India</li>
//             <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-[var(--gold)]" /> +91 98765 43210</li>
//             <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-[var(--gold)]" /> connect@devanampriya.org</li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Newsletter</h4>
//           <p className="mt-4 text-sm">Receive monthly stories of compassion and impact.</p>
//           <form className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5" onSubmit={(e) => e.preventDefault()}>
//             <input type="email" required placeholder="your@email.com" className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none" />
//             <button className="bg-[var(--gold)] px-4 text-sm font-semibold text-[var(--royal-deep)] hover:brightness-105">Join</button>
//           </form>
//         </div>
//       </div>
//       <div className="border-t border-white/10">
//         <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
//           <p>© {new Date().getFullYear()} DEVANAMPRIYA. All rights reserved.</p>
//           <p>Sabbe satta sukhi hontu — May all beings be happy.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function BackToTop() {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setShow(window.scrollY > 600);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.button initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           aria-label="Back to top"
//           className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[var(--gold)] text-[var(--royal-deep)] shadow-[var(--shadow-gold)] transition hover:-translate-y-1">
//           <ArrowUp className="h-5 w-5" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// }

// function WhatsAppFloat() {
//   return (
//     <a href="https://wa.me/917019428321" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
//       className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1">
//       <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.412 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /></svg>
//     </a>
//   );
// }

// function RootComponent() {
//   const { queryClient } = Route.useRouteContext();
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ScrollProgress />
//       <Navbar />
//       <main className="pt-0">
//         <Outlet />
//       </main>
//       <Footer />
//       <BackToTop />
//       <WhatsAppFloat />
//     </QueryClientProvider>
//   );
// }




import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, HandHeart, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/>
  </svg>
);

const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Youtube = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23 12s0-3.7-.47-5.48a2.78 2.78 0 0 0-2-2C18.75 4 12 4 12 4s-6.75 0-8.53.5a2.78 2.78 0 0 0-2 2C1 8.3 1 12 1 12s0 3.7.47 5.48a2.78 2.78 0 0 0 2 2C5.25 20 12 20 12 20s6.75 0 8.53-.5a2.78 2.78 0 0 0 2-2C23 15.7 23 12 23 12zM10 15.5v-7l6 3.5z"/>
  </svg>
);

const Twitter = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2H21.5l-7.5 8.58L22.5 22h-6.844l-5.36-7.01L4.2 22H.94l8.02-9.17L1.5 2h7.014l4.84 6.4L18.244 2zm-1.2 18h1.86L7.06 4h-1.99l11.974 16z"/>
  </svg>
);

import { motion, AnimatePresence } from "framer-motion";

// Fix: Use correct import path for CSS
import appCss from "../styles.css?url";
// Fix: Use correct import path for logo
import logo from "../assets/logo.png";
// Fix: Create this file or remove this import
// import { reportLovableError } from "../lib/lovable-error-reporting";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/objectives", label: "Objectives" },
  { to: "/activities", label: "Activities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The path you seek is not yet paved.</p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  
  // Fix: Comment out or implement reportLovableError
  // useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Something went off the path</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or return home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button 
            onClick={() => { 
              router.invalidate(); 
              reset(); 
            }} 
            className="btn-primary"
          >
            Try again
          </button>
          <Link to="/" className="btn-outline" style={{ color: "var(--royal)", borderColor: "var(--royal)" }}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DEVANAMPRIYA — Guided by Dhamma, United by Humanity" },
      { name: "description", content: "DEVANAMPRIYA NGO — spreading Dhamma, equality, compassion and social justice inspired by Lord Buddha and Dr. B.R. Ambedkar." },
      { name: "author", content: "DEVANAMPRIYA" },
      { name: "theme-color", content: "#0A1F5B" },
      { property: "og:site_name", content: "DEVANAMPRIYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "DEVANAMPRIYA — Guided by Dhamma, United by Humanity" },
      { property: "og:description", content: "Spreading Dhamma, equality, compassion and social justice." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)]" 
        style={{ width: `${progress}%`, transition: "width .1s linear" }} 
      />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || open ? "bg-[var(--royal-deep)]/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}>
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="DEVANAMPRIYA" className="h-14 w-auto shrink-0 object-contain" />
          <div className="min-w-0">
            <div className="text-lg font-bold tracking-wider text-white sm:text-xl">DEVANAMPRIYA</div>
            <div className="hidden text-[10px] uppercase tracking-[0.25em] text-[var(--gold-soft)] sm:block">
              Dhamma • Humanity • Equality
            </div>
          </div>
        </Link>
        
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link 
              key={n.to} 
              to={n.to} 
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              activeProps={{ 
                className: "rounded-full px-4 py-2 text-sm font-semibold text-[var(--royal-deep)] bg-[var(--gold)]" 
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link 
            to="/donate" 
            className="btn-primary ml-3 !py-2 !px-5 !text-sm hidden lg:inline-flex"
          >
            <HandHeart className="h-4 w-4" /> Donate
          </Link>
        </nav>
        
        <div className="flex items-center gap-2 lg:hidden">
          <Link to="/donate" className="btn-primary !py-2 !px-3 !text-xs">
            <HandHeart className="h-3 w-3" /> 
          </Link>
          <button 
            aria-label="Toggle menu" 
            onClick={() => setOpen((o) => !o)} 
            className="rounded-full p-2 text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV.map((n) => (
                <Link 
                  key={n.to} 
                  to={n.to} 
                  onClick={() => setOpen(false)} 
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
                  activeProps={{ 
                    className: "rounded-lg px-4 py-3 text-sm font-semibold text-[var(--royal-deep)] bg-[var(--gold)]" 
                  }} 
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/donate" onClick={() => setOpen(false)} className="btn-primary mt-2">
                <HandHeart className="h-4 w-4" /> Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--royal-deep)] text-white/80">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-auto object-contain" />
            <div className="text-xl font-bold tracking-wider text-white">DEVANAMPRIYA</div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Guided by Dhamma, united by humanity, inspired by equality. Building a peaceful and just society for all.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                aria-label="social" 
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--royal-deep)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition hover:text-[var(--gold)]">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-[var(--gold)]" /> 
              #4-6-01(Shop No-2) Shashi Mahal Talkies Road, Manglwar Pet. Near Reddy floar mill Raichur-584101
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[var(--gold)]" /> 
              +91 70194 28321
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[var(--gold)]" /> 
              connect@devanampriya.org
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Newsletter</h4>
          <p className="mt-4 text-sm">Receive monthly stories of compassion and impact.</p>
          <form className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              required 
              placeholder="your@email.com" 
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none" 
            />
            <button className="bg-[var(--gold)] px-4 text-sm font-semibold text-[var(--royal-deep)] hover:brightness-105">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} DEVANAMPRIYA. All rights reserved.</p>
          <p>Sabbe satta sukhi hontu — May all beings be happy.</p>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <AnimatePresence>
      {show && (
        <motion.button 
          initial={{ opacity: 0, scale: 0.6 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[var(--gold)] text-[var(--royal-deep)] shadow-[var(--shadow-gold)] transition hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/917019428321" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.412 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    </a>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}