"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// icons
import { Github, Linkedin, FileDown } from "lucide-react";

// components
import Experience from "@/componets/content/experience";
import Projects from "@/componets/content/projects";
import AboutMe from "@/componets/content/aboutme";
import ContactMe from "@/componets/content/contactMe";
import Footer from "@/componets/footer";

export default function Home() {
  return (
    <div className="relative mt-8">
      <div
        className="absolute top-[-80px] left-[90%] -translate-x-1/2 w-72 h-72 bg-blue-400 opacity-30 rounded-full blur-3xl z-0"
        aria-hidden="true"
      />
      <main className="mx-auto px-4 gap-6 relative z-10 flex flex-col">
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="flex-1">
            <motion.h1
              className="text-4xl font-bold text-center sm:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Nicolas Torres
            </motion.h1>

            <motion.div
              className="flex justify-center sm:justify-start mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-2">
                Full Stack Web Developer
              </span>
              <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mr-2">
                Networks
              </span>
              <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                Linux
              </span>
            </motion.div>

            <motion.h2
              className="text-xl text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Software Engineer & Full Stack Web Developer
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-3 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://github.com/JulianTorres1"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-[1.08] transition-transform duration-300"
              >
                <span className="relative px-5 py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <Github size={18} /> GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/nicolas-julian-torres-torres-0b0075198/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 hover:scale-[1.08] transition-transform duration-300"
              >
                <span className="relative px-5 py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <Linkedin size={18} /> LinkedIn
                </span>
              </a>

              <a
                href="/Hoja De Vida Nicolas Julian Torres Torres 2025.pdf"
                download
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 hover:scale-[1.08] transition-transform duration-300"
              >
                <span className="relative px-5 py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <FileDown size={18} /> Descargar CV
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 mb-4 sm:mb-0 sm:ml-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src="/Avatar-portfolio.png"
              alt="Avatar de Nicolas Torres"
              width={120}
              height={120}
              className="rounded-full border-4 border-gray-200 shadow-lg bg-white"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full mt-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div
            id="experiencia"
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Experience />
          </motion.div>
          <motion.div
            id="proyectos"
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Projects />
          </motion.div>
          <motion.div
            id="sobre-mi"
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <AboutMe />
          </motion.div>
          <motion.div
            id="contacto"
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ContactMe />
          </motion.div>
          <Footer />
        </motion.div>
      </main>
    </div>
  );
}
