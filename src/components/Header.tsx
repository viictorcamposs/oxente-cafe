import Link from "next/link";
import Image from "next/image";

import { IoMdMenu } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative py-7 lg:py-8 px-6 min-[480px]:px-16 bg-[#251F1A]">
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

        <button className="lg:hidden">
          <IoMdMenu color="#D4AF85" className="text-3xl" />
        </button>

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

          <Link
            href="/"
            className="flex items-center justify-center gap-2.5 w-[180px] h-[50px] bg-[#D4AF85]"
          >
            <FaWhatsapp size={22} color="#251F1A" />
            <span className="text-lg -tracking-[0.54px] font-semibold">
              Fale conosco
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
