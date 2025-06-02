export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12   text-zinc-400 text-center">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <span>
          © {new Date().getFullYear()} Nicolas Torres. Desarrollado con 💙
        </span>
        <span>
          <a
            href="https://github.com/JulianTorres1"
            className="hover:underline text-blue-400"
          >
            Github
          </a>
          {" | "}
          <a
            href="www.linkedin.com/in/nicolas-julian-torres-torres-0b0075198"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
