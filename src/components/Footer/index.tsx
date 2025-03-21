import Link from "next/link";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Doubts from "./Doubts";

export default function Footer() {
  return (
    <footer className="relative pt-[42px] lg:pt-32 overflow-hidden bg-[#251F1A]">
      <div className="relative px-5 pb-12 lg:pb-[100px] space-y-[72px] lg:space-y-[160px]">
        <Doubts />

        <div className="w-full max-w-[335px] lg:max-w-[1065px] lg:grid lg:grid-cols-[408px_1fr_1fr] lg:gap-11 space-y-8 lg:space-y-0 mx-auto">
          <div className="space-y-8 lg:space-y-10 lg:border-r lg:border-[#D4AF85]">
            <Image
              width={337}
              height={62}
              src="/assets/full-logo.png"
              alt="Logo"
            />

            <p className="text-lg/[28px] lg:max-w-[335px] text-[#F5EBDF]">
              Valorizamos os grãos da nossa terra, prezamos pela qualidade e
              entregamos um café fresco, autêntico e cheio de identidade.
            </p>

            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://instagram.com/oxente.cafe/"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-[#D4AF85]"
              >
                <FaInstagram size={24} color="#251F1A" />
              </a>
            </div>
          </div>

          <div className="py-[22px] lg:pt-5 lg:pb-0 space-y-[22px] border-t lg:border-t-0 border-b lg:border-b-0 lg:order-3 border-[#D4AF85] text-[#F5EBDF]">
            <h4 className="text-lg font-bold">ATENDIMENTO</h4>

            <div className="space-y-2">
              <span className="block text-lg">Ligue pra gente</span>
              <div className="flex items-center gap-3">
                <FiPhone size={24} color="#D4AF85" />
                <strong className="text-lg">81 8279-9240</strong>
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-lg">Mande um email</span>
              <a
                href="mailto:oxentecafebp@gmail.com"
                className="flex items-center gap-3"
              >
                <MdOutlineMail size={28} color="#D4AF85" />
                <strong className="text-lg">oxentecafebp@gmail.com</strong>
              </a>
            </div>

            <div className="space-y-2">
              <span className="block text-lg">Horário de atendimento</span>
              <div className="flex items-center gap-3">
                <FaRegClock size={28} color="#D4AF85" />
                <strong className="text-lg">Seg a Sex: 09h - 18h</strong>
              </div>
            </div>
          </div>

          <div className="space-y-[22px] lg:border-r lg:order-2 lg:pt-5 lg:border-[#D4AF85] text-[#F5EBDF]">
            <h4 className="text-lg font-bold">INSTITUCIONAL</h4>

            <Link
              href="/"
              className="block text-lg hover:text-[#D4AF85] hover:underline"
            >
              Início
            </Link>

            <Link
              href="/sobre-nos"
              className="block text-lg hover:text-[#D4AF85] hover:underline"
            >
              Sobre nós
            </Link>

            <Link
              href="/nossos-cafes"
              className="block text-lg hover:text-[#D4AF85] hover:underline"
            >
              Nossos cafés
            </Link>

            <Link
              href="/contatos"
              className="block text-lg hover:text-[#D4AF85] hover:underline"
            >
              Contatos
            </Link>

            <Link
              href="/politica-de-privacidade"
              className="block text-lg hover:text-[#D4AF85] hover:underline"
            >
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>

      {/* Images para Design */}
      <div className="relative w-full aspect-[480/55] md:hidden">
        <Image fill src="/assets/footer-design.png" alt="Detalhe de design" />
      </div>

      <div className="hidden lg:block relative w-full aspect-[1920/148] translate-y-[2px]">
        <Image
          fill
          src="/assets/footer-design-desktop.png"
          alt="Detalhe de design"
        />
      </div>
      {/* Images para Design */}

      <div className="px-5 py-4 lg:py-9 bg-[#B27944]">
        <p className="text-sm font-medium text-center lg:text-base">
          OXENTE CAFÉ - CNPJ: 41.374.104/0001-43 ©{" "}
          <span className="block lg:inline">
            Todos os direitos reservados. 2025
          </span>
        </p>
      </div>
    </footer>
  );
}
