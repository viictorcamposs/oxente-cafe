import Image from "next/image";

import Hero from "@/sections/sobre-nos/Hero";
import Brand from "@/sections/sobre-nos/Brand";
import Bento from "@/sections/sobre-nos/Bento";
import Methodology from "@/sections/Methodology";

import Carousel from "@/components/Carousel";

export default function AboutUs() {
  return (
    <main>
      <Hero />

      <Carousel
        slides={[
          <div key="slide1" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-1.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide2" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-2.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide3" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-3.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide4" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-4.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide5" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-5.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide6" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-6.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide7" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-7.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide8" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-8.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide8" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-9.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide8" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-10.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide8" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-11.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide8" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-12.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
          <div key="slide8" className="relative w-full h-[264px] lg:h-[414px]">
            <Image
              fill
              src="/assets/about-carousel-13.png"
              alt="Foto"
              style={{ objectFit: "cover" }}
            />
          </div>,
        ]}
      />

      <Brand />

      <Bento />

      <Methodology />
    </main>
  );
}
