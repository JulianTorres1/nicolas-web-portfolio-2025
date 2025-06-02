"use client";
import { animate, motion } from "framer-motion";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    animate(window.scrollY, y, {
      duration: 0.7,
      onUpdate: (v) => window.scrollTo(0, v),
      ease: [0.22, 1, 0.36, 1],
    });
  }
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 max-w-4xl mx-auto backdrop-blur-md">
      <div className="text-lg font-bold flex items-center">
        Nicolas Torres
        <motion.span
          className="ml-1 w-[2px] h-7 bg-white inline-block"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        />
      </div>
      <ul className="flex space-x-8">
        <li>
          <button
            onClick={() => scrollToSection("experiencia")}
            className="hover:underline bg-transparent border-none cursor-pointer"
          >
            Experiencia
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("proyectos")}
            className="hover:underline bg-transparent border-none cursor-pointer"
          >
            Proyectos
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("sobre-mi")}
            className="hover:underline bg-transparent border-none cursor-pointer"
          >
            Sobre mi
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:underline bg-transparent border-none cursor-pointer"
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
}
