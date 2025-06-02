"use client";

import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario (EmailJS, API, etc)
    alert(`Gracias por tu mensaje, ${form.name}!`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg text-zinc-100">
      {/* Datos de contacto */}
      <div className="md:w-1/2 bg-zinc-800 rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-6 text-yellow-400 flex items-center gap-2">
          <Mail size={24} /> Contacto
        </h3>
        <ul className="space-y-4 text-zinc-300">
          <li className="flex items-center gap-3">
            <MapPin size={20} className="text-yellow-400" />
            <span>Cartagena, Colombia</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={20} className="text-green-400" />
            <a
              href="tel:+573046140073"
              className="hover:underline transition-colors"
            >
              +57 304 614 0073
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={20} className="text-blue-400" />
            <a
              href="mailto:juliantorres136@gmail.com"
              className="hover:underline transition-colors"
            >
              juliantorres136@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={20} className="text-blue-400" />
            <a
              href="mailto:nicjtorres@soy.sena.edu.co"
              className="hover:underline transition-colors"
            >
              nicjtorres@soy.sena.edu.co
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Linkedin size={20} className="text-blue-500" />
            <a
              href="https://www.linkedin.com/in/nicolas-julian-torres-torres-0b0075198/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Formulario de contacto */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 bg-zinc-800 rounded-lg p-6 flex flex-col gap-4"
      >
        <h3 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
          <Mail size={24} /> Envíame un mensaje
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-400 text-zinc-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-400 text-zinc-100"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-400 text-zinc-100 resize-none"
        />
        <button
          type="submit"
          className="bg-blue-400 text-zinc-900 font-semibold py-3 rounded hover:bg-blue-500 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
