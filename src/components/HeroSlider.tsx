import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Users, HandHeart } from "lucide-react";

import heroCover from "../assets/hero-cover.jpeg";

export function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--royal-deep)] text-white pt-24 md:pt-28">
      {/* Full-width cover image */}
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <img
          src={heroCover}
          alt="Lord Buddha, Samrat Ashok and Dr. B. R. Ambedkar with the Ashoka Chakra"
          className="block w-full h-auto"
        />
      </div>

      {/* Text content below the image */}
      <div className="container-page relative z-10 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            DHAMMA IS THE PATH,<br />
            <span className="text-gradient-gold">HUMANITY IS THE GOAL</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
            "Welcome to Devanampriya Samrat Ashok Buddha Vihar Trust"
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/about" className="btn-primary"><ArrowRight className="h-4 w-4" /> Know More</Link>
            <Link to="/contact" className="btn-outline"><Users className="h-4 w-4" /> Join Us</Link>
            <Link to="/donate" className="btn-outline"><HandHeart className="h-4 w-4" /> Donate Now</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}