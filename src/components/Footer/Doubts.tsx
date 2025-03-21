"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { FaWhatsapp } from "react-icons/fa";

import { cn } from "@/lib/utils";

export default function Doubts() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "relative w-full max-w-[372px] lg:max-w-[1065px] mx-auto h-[650px] lg:h-[436px] pt-[42px] lg:pt-[52px] px-8 lg:px-20 overflow-hidden lg:overflow-visible",
        pathname == "/contatos" ? "hidden" : ""
      )}
    >
      <h3 className="relative z-20 text-6xl font-primary lg:text-9xl">
        Dúvidas?
      </h3>

      <p className="relative z-10 text-base/[22px] lg:text-lg/[28px] mb-5 lg:mb-8 max-w-[415px]">
        <span className="font-medium">
          Quer saber mais sobre nossos cafés, torra sob demanda ou métodos de
          preparo?
        </span>{" "}
        Nosso time está pronto para te atender! Fale conosco, aqui o atendimento
        é tão especial quanto o café!
      </p>

      <a
        href="https://wa.me/558182799240"
        className="relative z-10 duration-200 hover:scale-105 flex items-center justify-center gap-2 lg:gap-3 w-full max-w-[150px] lg:max-w-[220px] h-[40px] lg:h-[60px] bg-[url('/assets/elementos/botao-4.png')] bg-cover bg-center"
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
  );
}
