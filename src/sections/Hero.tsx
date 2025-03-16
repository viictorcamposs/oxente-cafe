import Link from "next/link";
import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative md:flex md:flex-col pt-[42px] overflow-hidden md:pt-14 md:h-[862px] bg-[#FAF0E3]">
      <h1 className="font-primary text-[42px]/[42px] md:text-[58px]/[52px] tracking-[-1.25px] md:tracking-[-1.74px] text-center">
        O Nordeste tem{" "}
        <span className="md:flex md:gap-3 justify-center">
          <span className="block md:inline relative text-[#B27944]">
            Café Especial
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 201 6"
              fill="none"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2.5 md:translate-y-3.5 w-[200px] md:w-[275px]"
            >
              <path
                d="M0 4.10572C1.92123 4.10572 53.0341 2.43715 78.3503 1.60286L158.931 4.10572L200.229 1.60286"
                stroke="#B27944"
                strokeWidth="2.19408"
              />
            </svg>
          </span>{" "}
          <span>de Verdade!</span>
        </span>
      </h1>

      <Image
        width={538}
        height={134}
        src="/assets/home-hero-mobile.png"
        alt="Imagem com cafés da Oxente Café"
        className="mx-auto md:hidden"
      />

      <Image
        width={884}
        height={382}
        src="/assets/home-hero-desktop.png"
        alt="Imagem com cafés da Oxente Café"
        className={`
            hidden md:flex absolute z-50
            left-1/2 -translate-x-1/2 
            top-1/2 -translate-y-[calc(50%+100px)] lg:-translate-y-[calc(50%+60px)]
            w-[90%] max-w-[884px]
          `}
      />

      <Image
        width={1578}
        height={278}
        src="/assets/elementos-hero-desktop.png"
        alt="Imagem com cafés da Oxente Café"
        className="hidden md:flex min-w-[1578px] absolute top-[20px] lg:top-[60px] left-1/2 lg:-translate-x-1/2"
      />

      <div className="relative z-10 px-5 pt-8 pb-[72px] lg:pb-[98px] md:mt-auto bg-[#CDA981] lg:bg-transparent">
        <div className="w-full max-w-[884px] mx-auto lg:grid lg:grid-cols-[1fr_346px]">
          <div className="lg:border-r-2 lg:space-y-1 lg:border-r-[#251F1A]">
            <h2 className="font-primary text-[42px]/[42px] text-center lg:text-left tracking-[-1.68px]">
              Aqui, café é coisa séria!
            </h2>

            <p className="text-center lg:text-lg lg:text-left max-w-[347px] lg:max-w-full mx-auto lg:ml-0">
              <span className="italic underline font-semibold">
                Valorizamos os produtores locais, selecionamos grãos com rigor e
                torramos artesanalmente
              </span>{" "}
              para oferecer uma bebida que respeita a tradição e entrega sabor
              de verdade.
            </p>
          </div>

          <div className="w-full lg:w-fit ml-auto">
            <h3 className="text-center lg:text-2xl mt-5 lg:mt-0 mb-3 lg:mb-5 tracking-[-1px] font-bold text-[20px]">
              Bora sentir esse sabor?
            </h3>

            <Link
              href=""
              className="flex items-center justify-center gap-2 w-full max-w-[320px] lg:w-[312px] h-[55px] mx-auto border border-[#251F1A] bg-[#FCE1C3]"
            >
              <FaWhatsapp size={20} color="#251F1A" />
              <span className="font-semibold -tracking-[0.9px]">
                Fale com a gente no WhatsApp!
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Image
        width={1928}
        height={418}
        src="/assets/hero-design.png"
        alt="Detalhe de design"
        className="hidden lg:flex absolute bottom-0 left-0"
      />

      <Image
        width={578}
        height={42}
        src="/assets/section-design.png"
        alt="Detalhe de design"
        className="absolute bottom-0 left-0 w-full aspect-[480/42] max-h-[42px]"
      />
    </section>
  );
}
