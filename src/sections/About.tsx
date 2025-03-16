import Image from "next/image";
import Link from "next/link";

import * as C from "@/components/ui/carousel";

export default function About() {
  return (
    <section className="py-[72px] lg:pb-[78px] lg:pt-[104px] px-5 overflow-hidden bg-[#251F1A]">
      <div className="max-w-[1108px] mx-auto space-y-[72px] lg:flex lg:justify-between">
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
            href=""
            className="flex justify-center py-3 max-w-[250px] border-2 border-[#D4AF85] bg-[#B27944]"
          >
            <span className="text-lg -tracking-[0.9px] font-semibold text-[#FDF8F1]">
              Saiba mais sobre a Oxente
            </span>
          </Link>
        </div>

        <div className="relative w-full max-w-[340px] lg:max-w-[448px] lg:max-h-[560px] mx-auto lg:mr-0 aspect-[340/425] lg:aspect-[448/560]">
          <C.Carousel
            className="relative z-10 h-full w-full rounded-4xl overflow-hidden border-4 border-[#D4AF85]"
            opts={{
              loop: true,
              containScroll: false,
            }}
          >
            <C.CarouselContent className="-ml-0">
              <C.CarouselItem className="pl-0">
                <div className="relative w-full aspect-[340/425] h-full lg:aspect-[448/560]">
                  <Image
                    fill
                    src="/assets/bento.png"
                    alt="Bento, fundador do Oxente Café"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </C.CarouselItem>

              <C.CarouselItem className="pl-0">
                <div className="relative w-full aspect-[340/425] lg:aspect-[448/560]">
                  <Image
                    fill
                    src="/assets/bento.png"
                    alt="Bento, fundador do Oxente Café"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </C.CarouselItem>

              <C.CarouselItem className="pl-0">
                <div className="relative w-full aspect-[340/425] lg:aspect-[448/560]">
                  <Image
                    fill
                    src="/assets/bento.png"
                    alt="Bento, fundador do Oxente Café"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </C.CarouselItem>
            </C.CarouselContent>
          </C.Carousel>

          <Image
            height={144}
            width={145}
            src="/assets/star-1.png"
            alt="Estrela para design"
            className="absolute -bottom-[60px] -left-[60px]"
          />

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
