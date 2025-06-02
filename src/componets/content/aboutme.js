import {
  GraduationCap,
  Languages,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Code,
  FileCode,
  Server,
  Cpu,
  Box,
  Terminal,
  BookOpen,
  User,
  MonitorSmartphone,
  Braces,
} from "lucide-react";

export default function AboutMe() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 space-y-12 text-zinc-100">
      <div>
        <h2 className="text-4xl font-bold mb-6 flex items-center gap-2">
          <User size={32} /> Sobre mí
        </h2>
        <p className="text-lg text-zinc-300">
          Soy un desarrollador junior con experiencia en frontend y Backend
          utilizando JavaScript, HTML y CSS. También tengo conocimientos en
          administración de servidores Linux, infraestructura de redes Cisco y
          Ubiquiti, así como dominio de tecnologías como Java, Node.js, React
          JS, Next.js y Tailwind CSS.
        </p>
        <p className="text-lg text-zinc-300 mt-4">
          Actualmente estudio Ingeniería de Software en la Universidad de
          Cartagena y soy Tecnólogo en Gestión de Redes de Datos certificado por
          el SENA. Me destaco por ser proactivo, amigable y siempre dispuesto a
          asumir nuevos retos y contribuir en entornos colaborativos.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
          <GraduationCap size={24} /> Educación
        </h3>
        <ul className="space-y-2 text-zinc-300">
          <li>
            <GraduationCap size={18} className="inline mr-1" />
            <strong> Ingeniería de Software</strong> — Universidad de Cartagena
            (En curso, 5to semestre)
          </li>
          <li>
            <GraduationCap size={18} className="inline mr-1" />
            <strong> Tecnólogo en Gestión de Redes de Datos</strong> — SENA
            (Etapa lectiva finalizada en 2024)
          </li>
          <li>
            <BookOpen size={18} className="inline mr-1" />
            <strong> Curso de Inglés</strong> — Centro Colombo Americano
            (Finalizado en diciembre de 2023, nivel B2 APTIS)
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-green-400 flex items-center gap-2">
          <Code size={24} /> Habilidades Técnicas
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-zinc-300">
          <li className="flex items-center gap-2">
            <Braces size={20} /> HTML / CSS / JavaScript
          </li>
          <li className="flex items-center gap-2">
            <MonitorSmartphone size={20} /> React / Next.js / Tailwind / Astro
          </li>
          <li className="flex items-center gap-2">
            <FileCode size={20} /> Node.js
          </li>
          <li className="flex items-center gap-2">
            <Cpu size={20} /> Java
          </li>
          <li className="flex items-center gap-2">
            <Server size={20} /> Linux y administración de servidores
          </li>
          <li className="flex items-center gap-2">
            <Box size={20} /> Docker
          </li>
          <li className="flex items-center gap-2">
            <Terminal size={20} /> Bash scripting
          </li>
          <li className="flex items-center gap-2">
            <Cpu size={20} /> Hardware y electrónica
          </li>
          <li className="flex items-center gap-2">
            <Box size={20} />
            Reparación de equipos de computo
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-rose-400 flex items-center gap-2">
          <Languages size={24} /> Idiomas
        </h3>
        <ul className="text-zinc-300 space-y-2">
          <li>
            <Languages size={18} className="inline mr-1" /> Español — Nativo
          </li>
          <li>
            <Languages size={18} className="inline mr-1" /> Inglés — Nivel B2
            certificado (APTIS)
          </li>
        </ul>
      </div>
    </section>
  );
}
