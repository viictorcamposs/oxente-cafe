"use client";

import { useState } from "react";
import Link from "next/link";

import { IoMdMenu } from "react-icons/io";

import { cn } from "@/lib/utils";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <button onClick={handleMenu} className="relative w-6 h-6 lg:hidden">
        <IoMdMenu
          color="#D4AF85"
          className={cn(
            "absolute text-3xl duration-75 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          className={cn(
            "mr-1.5 duration-75 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <path
            d="M13.6296 17L8.37037 12.1797L3.7037 17L0 16.9632L5.77778 8.61039L0.666667 0.515151L4.18519 0.294372L9.48148 6.4026L15.3704 0L18 1.14069L11.963 9.16234L17.2963 16.8896L13.6296 17Z"
            fill="#D4AF85"
          />
        </svg>
      </button>

      <div
        className={cn(
          "absolute top-[88px] duration-75 space-y-6 right-0 z-50 shadow-2xl w-full max-w-[425px] px-10 py-10 bg-[#F5EBDF]",
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        )}
      >
        <div className="space-y-4">
          <Link href="/" className="flex w-full pb-3 border-b border-[#B27944]">
            <span className="max-[400px]:text-sm text-base -tracking-[0.54px]">
              Início
            </span>
          </Link>

          <Link
            href="/sobre-nos"
            className="flex w-full pb-3 border-b border-[#B27944]"
          >
            <span className="max-[400px]:text-sm text-base -tracking-[0.54px]">
              Sobre nós
            </span>
          </Link>

          <Link
            href="/nossos-cafes"
            className="flex w-full pb-3 border-b border-[#B27944]"
          >
            <span className="max-[400px]:text-sm text-base -tracking-[0.54px]">
              Nossos cafés
            </span>
          </Link>

          <Link
            href="/contatos"
            className="flex w-full pb-3 border-b border-[#B27944]"
          >
            <span className="max-[400px]:text-sm text-base -tracking-[0.54px]">
              Contatos
            </span>
          </Link>
        </div>

        <div className="flex items-center w-full gap-2">
          <a
            href="https://wa.me/558182799240"
            className="flex items-center justify-center w-full max-[400px]:max-w-[130px] max-w-[152px] gap-2 h-10 bg-[url('/assets/elementos/botao.png')] bg-cover bg-center"
          >
            <FaWhatsapp
              size={16}
              color="#251F1A"
              className="min-[400px]:hidden"
            />
            <FaWhatsapp
              size={20}
              color="#251F1A"
              className="max-[400px]:hidden"
            />

            <span className="max-[400px]:text-xs text-sm -tracking-[0.42px] font-semibold">
              Fale conosco
            </span>
          </a>

          <a
            href="https://instagram.com/oxente.cafe/"
            className="flex items-center justify-center w-full max-w-[188px] gap-2 h-10 bg-[url('/assets/elementos/botao.png')] bg-cover bg-center"
          >
            <FaInstagram
              size={16}
              color="#251F1A"
              className="min-[400px]:hidden"
            />
            <FaInstagram
              size={20}
              color="#251F1A"
              className="max-[400px]:hidden"
            />

            <span className="max-[400px]:text-xs text-sm -tracking-[0.42px] font-semibold">
              Siga no Instagram
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
