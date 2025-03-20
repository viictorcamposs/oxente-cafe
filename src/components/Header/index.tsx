import Link from "next/link";
import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";

import Menu from "./Menu";

export default function Header() {
  return (
    <header className="relative py-7 lg:py-8 px-6 min-[480px]:px-16 max-[1023px]:h-[88px] bg-[#251F1A]">
      <div className="flex items-center justify-between max-w-[1034px] mx-auto">
        <div className="relative w-[170px] lg:w-[250px] h-[30px] lg:h-[45px]">
          <Image
            fill
            priority
            quality={100}
            src="/assets/logo.png"
            alt="Logo"
          />
        </div>

        <Menu />

        <nav className="hidden lg:flex items-center space-x-[28px]">
          <Link
            href="/"
            className="text-lg hover:underline -tracking-[0.54px] text-[#FCF4E9] hover:text-[#D4AF85]"
          >
            Início
          </Link>

          <Link
            href="/sobre-nos"
            className="text-lg hover:underline -tracking-[0.54px] text-[#FCF4E9] hover:text-[#D4AF85]"
          >
            Sobre nós
          </Link>

          <Link
            href="/nossos-cafes"
            className="text-lg hover:underline -tracking-[0.54px] text-[#FCF4E9] hover:text-[#D4AF85]"
          >
            Nossos cafés
          </Link>

          <Link
            href="/contatos"
            className="text-lg hover:underline -tracking-[0.54px] text-[#FCF4E9] hover:text-[#D4AF85]"
          >
            Contatos
          </Link>

          <a
            href="https://wa.me/558182799240"
            className="relative flex items-center justify-center gap-2.5 w-[175px] h-[42px] bg-[url('/assets/elementos/botao.png')] bg-cover bg-center"
          >
            <FaWhatsapp size={22} color="#251F1A" />

            <span className="text-lg -tracking-[0.54px] font-semibold">
              Fale conosco
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
