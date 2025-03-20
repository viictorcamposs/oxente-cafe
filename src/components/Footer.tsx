import Link from "next/link";
import Image from "next/image";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaRegClock, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative pt-[42px] lg:pt-32 overflow-hidden bg-[#251F1A]">
      <div className="relative px-5 pb-12 lg:pb-[100px] space-y-[72px] lg:space-y-[160px]">
        <div className="relative w-full max-w-[372px] lg:max-w-[1065px] mx-auto h-[650px] lg:h-[436px] pt-[42px] lg:pt-[52px] px-8 lg:px-20 overflow-hidden lg:overflow-visible">
          <h3 className="relative z-20 text-6xl font-primary lg:text-9xl">
            Dúvidas?
          </h3>

          <p className="relative z-10 text-base/[22px] lg:text-lg/[28px] mb-5 lg:mb-8 max-w-[415px]">
            <span className="font-medium">
              Quer saber mais sobre nossos cafés, torra sob demanda ou métodos
              de preparo?
            </span>{" "}
            Nosso time está pronto para te atender! Fale conosco, aqui o
            atendimento é tão especial quanto o café!
          </p>

          <a
            href="https://wa.me/558182799240"
            className="relative z-10 flex items-center justify-center gap-2 lg:gap-3 w-full max-w-[150px] lg:max-w-[220px] h-[40px] lg:h-[60px] bg-[url('/assets/elementos/botao-4.png')] bg-cover bg-center"
          >
            <FaWhatsapp size={18} color="#FDF8F1" className="lg:hidden" />
            <FaWhatsapp size={25} color="#FDF8F1" className="hidden lg:block" />

            <span className="text-sm lg:text-xl font-semibold -tracking-[0.4px] text-[#FDF8F1]">
              Fale conosco
            </span>
          </a>

          <div className="absolute z-10 right-0 bottom-0 w-full lg:w-[532px] aspect-[363/325] lg:aspect-[532/476] -translate-y-2.5 lg:translate-y-0">
            <Image
              fill
              src="/assets/duvidas.png"
              alt="Mão segurando um pacote de café da Oxente Café"
            />
          </div>

          <Image
            fill
            src="/assets/elementos/duvidas-1.png"
            alt="Design"
            className="lg:hidden"
          />

          <Image
            fill
            src="/assets/elementos/duvidas-2.png"
            alt="Design"
            className="max-[1024px]:hidden"
          />
        </div>

        <div className="w-full max-w-[335px] lg:max-w-[1065px] lg:grid lg:grid-cols-[408px_1fr_1fr] lg:gap-11 space-y-8 lg:space-y-0 mx-auto">
          <div className="space-y-8 lg:space-y-10 lg:border-r lg:border-[#D4AF85]">
            <Image
              width={337}
              height={62}
              src="/assets/full-logo.png"
              alt="Logo"
            />

            <p className="text-[22px]/[32px] lg:max-w-[335px] text-[#F5EBDF]">
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

              <a
                href=""
                className="flex items-center justify-center w-11 h-11 rounded-full bg-[#D4AF85]"
              >
                <FaFacebookF size={24} color="#251F1A" />
              </a>
            </div>
          </div>

          <div className="py-[22px] lg:pt-5 lg:pb-0 space-y-[22px] border-t lg:border-t-0 border-b lg:border-b-0 lg:order-3 border-[#D4AF85] text-[#F5EBDF]">
            <h4 className="text-lg font-bold">ATENDIMENTO</h4>

            <div className="space-y-2">
              <span className="block text-lg">Chame no WhatsApp</span>
              <div className="flex items-center gap-3">
                <FaWhatsapp size={28} color="#D4AF85" />
                <strong className="text-lg">81 8279-9240</strong>
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-lg">Mande um email</span>
              <div className="flex items-center gap-3">
                <MdOutlineMail size={28} color="#D4AF85" />
                <strong className="text-lg">oxentecafebp@gmail.com</strong>
              </div>
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
