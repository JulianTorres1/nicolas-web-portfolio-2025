import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Plataforma de Desarrollo Estudiantil",
      description:
        "Una plataforma diseñada para que los docentes registren y gestionen el desarrollo de actividades y los temas abordados durante sus clases.",
      link: "https://github.com/JulianTorres1/desarrollo-de-aprendisaje-sspc",
      image: "/desarrollo.png",
      color: "bg-[#3b82f6]/10 border border-blue-500",
    },
    {
      title: "Sistema de Votaciones Estudiantil",
      description:
        "Aplicación web para gestionar elecciones académicas de forma segura y transparente, permitiendo a los estudiantes votar por sus representantes en tiempo real.",
      link: "https://github.com/JulianTorres1/Votaciones2025SPC_Backend",
      image: "/votaciones.png",
      color: "bg-[#22d3ee]/10 border border-cyan-400",
    },
    {
      title: "To-Do List Frog-Do 🐸 ",
      description:
        "Aplicación de tareas minimalista construida con Electron, diseñada para mejorar la productividad mediante una interfaz simple, eficiente y amigable.",
      link: "https://github.com/JulianTorres1/Frog-Do",
      image: "/frog-do-preview.png",
      color: "bg-[#22c55e]/10 border border-green-500",
    },
    {
      title: "Portafolio Artístico Interactivo",
      description:
        "Galería digital interactiva para exhibir obras, proyectos creativos y trayectoria de una artista visual, con un diseño enfocado en la estética y la experiencia del usuario.",
      link: "https://github.com/JulianTorres1/PortafolioZuleimaArzuza",
      image: "/portafolio-zule.png",
      color: "bg-[#f472b6]/10 border border-pink-400",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-10 text-zinc-100">Proyectos</h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
          selectedProject ? "blur-sm" : ""
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className={`cursor-pointer rounded-xl p-6 text-zinc-100 backdrop-blur-md hover:scale-[1.08] transition-transform duration-300 shadow-md ${project.color}`}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-zinc-400">{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-zinc-900 p-6 rounded-2xl max-w-md w-full shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-100 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {selectedProject.title}
            </h3>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={500}
              height={300}
              className="w-full rounded-xl mb-4"
            />
            <p className="text-zinc-300 mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Ver repositorio
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
