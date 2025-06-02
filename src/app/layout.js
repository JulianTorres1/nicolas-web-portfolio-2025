import "./globals.css";
// Importa la fuente desde next/font/google
import { Josefin_Sans } from "next/font/google";

//Components
import Navar from "@/componets/navbar";

// Carga la fuente con los subsets necesarios
const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Nicolas Torres",
  keywords: [
    "Nicolas Torres",
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "Tailwind CSS",
  ],
  description: "Nicolas Torres Web developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${josefin.className} bg-[#202023] antialiased text-white min-h-screen`}
      >
        <Navar />
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
