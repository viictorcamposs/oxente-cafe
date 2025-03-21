import Image from "next/image";
import Link from "next/link";

import * as C from "@/components/ui/carousel";

const carouselPhotos = [
  {
    key: 1,
    src: "/assets/about-carousel-1.png",
  },
  {
    key: 2,
    src: "/assets/about-carousel-2.png",
  },
  {
    key: 3,
    src: "/assets/about-carousel-3.png",
  },
  {
    key: 4,
    src: "/assets/about-carousel-4.png",
  },
  {
    key: 5,
    src: "/assets/about-carousel-5.png",
  },
  {
    key: 6,
    src: "/assets/about-carousel-6.png",
  },
  {
    key: 7,
    src: "/assets/about-carousel-7.png",
  },
  {
    key: 8,
    src: "/assets/about-carousel-8.png",
  },
  {
    key: 9,
    src: "/assets/about-carousel-9.png",
  },
  {
    key: 10,
    src: "/assets/about-carousel-10.png",
  },
  {
    key: 11,
    src: "/assets/about-carousel-11.png",
  },
  {
    key: 12,
    src: "/assets/about-carousel-12.png",
  },
  {
    key: 13,
    src: "/assets/about-carousel-13.png",
  },
  {
    key: 14,
    src: "/assets/about-carousel-14.png",
  },
  {
    key: 15,
    src: "/assets/about-carousel-15.png",
  },
  {
    key: 16,
    src: "/assets/about-carousel-16.png",
  },
  {
    key: 17,
    src: "/assets/about-carousel-17.png",
  },
];

export default function About() {
  return (
    <section className="pt-[72px] pb-32 lg:pb-[78px] lg:pt-[104px] px-5 overflow-hidden bg-[#251F1A]">
      <div className="max-w-[1108px] mx-auto space-y-[72px] lg:grid lg:grid-cols-2">
        <div className="max-w-[350px] lg:max-w-[530px] mx-auto lg:ml-0">
          <h2 className="font-primary text-[42px]/[42px] lg:text-[52px]/[52px] tracking-[-0.84px] text-[#FCF4E9]">
            Quem disse que café{" "}
            <span className="text-[#D4AF85] lg:block">bom só vem de fora?</span>
          </h2>

          <div className="space-y-8 mt-5 mb-11 lg:lg:my-[30px] text-[#FCF4E9]">
            <p className="lg:text-lg/7 ">
              Criada por Bento, a{" "}
              <span className="underline">
                Oxente Café nasceu da paixão pelos cafés especiais e do desejo
                de valorizar o Nordeste
              </span>
              . Inspirada nas riquezas da região, temos o compromisso de levar
              ao público grãos selecionados, cultivados e torrados com
              excelência.
            </p>

            <p className="lg:text-lg/7 ">
              Com raízes fincadas na tradição nordestina, a Oxente Café prova
              que qualidade e autenticidade estão mais perto do que se imagina.{" "}
              <span className="underline">
                Cada lote é escolhido com cuidado, garantindo sabor, identidade
                e uma experiência única em cada xícara.
              </span>
            </p>

            <p className="lg:text-lg/7 ">
              Hoje, estamos presentes em diversas cidades, conquistando
              apreciadores que reconhecem a força do café nordestino.{" "}
              <span className="font-medium underline">
                Mais do que um café, a Oxente é um movimento para valorizar
                produtores locais e mostrar ao mundo que o Nordeste também é
                terra de cafés premiados.
              </span>
            </p>
          </div>

          <Link
            href="/sobre-nos"
            className="relative duration-200 hover:scale-105 flex justify-center py-3 max-w-[250px]"
          >
            <span className="relative z-10 text-lg -tracking-[0.9px] font-semibold text-[#FDF8F1]">
              Saiba mais sobre a Oxente
            </span>

            <Image fill src="/assets/elementos/botao-3.png" alt="Design" />
          </Link>
        </div>

        <div className="relative w-full">
          <C.Carousel
            className="relative w-full max-w-[340px] lg:max-w-[448px] lg:max-h-[560px] mx-auto lg:mr-0 aspect-[340/425] lg:aspect-[448/560]"
            opts={{
              loop: true,
              containScroll: false,
            }}
          >
            <C.CarouselContent className="absolute top-0 bottom-0 left-0 right-0 z-10 -ml-0">
              {carouselPhotos.map((photo) => (
                <C.CarouselItem
                  key={photo.key}
                  className="border-4 border-[#D4AF85] rounded-4xl overflow-hidden"
                >
                  <Image
                    fill
                    src={photo.src}
                    alt="Foto"
                    style={{ objectFit: "cover" }}
                  />
                </C.CarouselItem>
              ))}
            </C.CarouselContent>

            <div className="absolute -bottom-11 z-50 w-[130px] left-1/2 -translate-x-1/2">
              <C.CarouselPrevious className="w-10 lg:w-12 h-10 lg:h-12 left-0 bg-[#D4AF85] hover:bg-[#ad8e6b] border-[#D4AF85]" />
              <C.CarouselNext className="w-10 lg:w-12 h-10 lg:h-12 right-0 bg-[#D4AF85] hover:bg-[#ad8e6b] border-[#D4AF85]" />
            </div>

            <Image
              height={144}
              width={145}
              src="/assets/star-1.png"
              alt="Estrela para design"
              className="absolute -bottom-[60px] -left-[60px]"
            />
          </C.Carousel>

          <Image
            height={68}
            width={68}
            src="/assets/star-2.png"
            alt="Estrela para design"
            className="absolute top-0 -right-[34px] z-10"
          />
        </div>
      </div>
    </section>
  );
}
