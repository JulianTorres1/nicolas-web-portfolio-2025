export default function Experience() {
  return (
    <section id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Experiencia</h2>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {/* EXPERIENCIA ACTUAL */}
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Z" />
              </svg>
            </span>

            <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-300 dark:text-white">
              Técnico en Sistemas
              <span className="bg-blue-100 text-blue-800 text-sm font-medium ms-3 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                Actual
              </span>
            </h3>

            <time className="block mb-2 text-sm text-gray-400 dark:text-gray-500">
              Colteinge S.A.S · Obra: Colegio Salesiano San Pedro Claver <br />
              Agosto 2025 – Actualidad · Presencial
            </time>

            <p className="text-base text-gray-300 dark:text-gray-400">
              Administración integral de infraestructura TI: gestión de más de
              160 equipos de cómputo, servidores Linux, servicios corporativos y
              sistemas web institucionales. Administración de infraestructura de
              red <strong>Ubiquiti UniFi</strong> (routers, switches y APs),
              soporte a usuarios y supervisión técnica de aprendices.
            </p>
          </li>

          {/* DESARROLLADOR DE SOFTWARE */}
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-6-4H4Z" />
              </svg>
            </span>

            <h3 className="mb-1 text-lg font-semibold text-blue-300 dark:text-white">
              Desarrollador de Software
            </h3>

            <time className="block mb-2 text-sm text-gray-400 dark:text-gray-500">
              Freelance · Junio 2018 – Diciembre 2019
            </time>

            <p className="text-base text-gray-300 dark:text-gray-400">
              Desarrollo de aplicaciones web utilizando JavaScript, React,
              Next.js y Node.js. Integración de APIs REST, despliegue en
              servidores Linux y mantenimiento evolutivo de aplicaciones.
            </p>
          </li>

          {/* EXPERIENCIA ANTERIOR */}
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Z" />
              </svg>
            </span>

            <h3 className="mb-1 text-lg font-semibold text-blue-300 dark:text-white">
              Auxiliar de Sistemas
            </h3>

            <time className="block mb-2 text-sm text-gray-400 dark:text-gray-500">
              Colegio Salesiano San Pedro Claver · Noviembre 2024 – Julio 2025
            </time>

            <p className="text-base text-gray-300 dark:text-gray-400">
              Soporte técnico, mantenimiento de equipos, instalación de sistemas
              operativos, administración de servidores y desarrollo del sistema
              de votaciones internas del colegio.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
