import Image from "next/image";

import * as A from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="relative pt-12 pb-[102px] lg:py-28 px-5 bg-[#F5EBDF]">
      <h2 className="font-primary text-[42px]/[42px] lg:text-[52px]/[52px] text-center font-normal w-full max-w-[302px] lg:max-w-full mx-auto">
        Puxa uma cadeira e bora{" "}
        <span className="text-[#B27944]">tirar as dúvidas!</span>
      </h2>

      <p className="hidden lg:block text-center text-lg">
        Adiantamos as perguntas mais comuns para facilitar sua vida. Se ainda
        precisar, chama a gente!
      </p>

      <A.Accordion
        type="single"
        className="max-w-[350px] lg:max-w-[1060px] mx-auto mt-[38px]"
        collapsible
      >
        <A.AccordionItem
          value="item-1"
          className="py-0 lg:py-3 border-b border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Qual a diferença entre café especial e café gourmet?
            </span>
          </A.AccordionTrigger>

          <A.AccordionContent className="w-full max-w-[788px] space-y-5">
            <p>
              Ah, essa é uma dúvida comum! O café especial é aquele que atinge
              um nível altíssimo de qualidade, com grãos selecionados
              manualmente, livres de defeitos e cheios de notas sensoriais
              incríveis. Para ser especial, ele precisa alcançar pelo menos 80
              pontos na escala da SCA (Specialty Coffee Association) e passar
              por um processo rigoroso de avaliação.
            </p>

            <p>
              Já o café gourmet tem um padrão superior ao café tradicional, mas
              não segue os mesmos critérios rígidos dos cafés especiais. Ele
              pode ter pequenas imperfeições e não recebe uma pontuação oficial.
              Em resumo, todo café especial é de alta qualidade, mas nem todo
              café gourmet é especial.
            </p>
          </A.AccordionContent>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-2"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              O que são notas sensoriais?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-3"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Como são definidas as notas sensoriais do café?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-4"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              As notas sensoriais mudam dependendo do método de preparo?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-5"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Por que escolhemos grãos do Nordeste?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-6"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              É melhor comprar café em grão ou moído?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-7"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Vocês podem moer o café antes de enviar?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-8"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              O que significa a pontuação do café?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-9"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Qual a diferença entre o café especial e o café do mercado?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-10"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              O que é processamento natural, CD e fermentado?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-11"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Café especial tem mais cafeína que o café tradicional?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-12"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Cafés com notas sensoriais significam que foram aromatizados
              artificialmente?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-13"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Café especial é mais caro? Por quê?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>

        <A.AccordionItem
          value="item-14"
          className="py-0 lg:py-3 border-b first:border-t space-y-2 border-[#D4AF85]"
        >
          <A.AccordionTrigger>
            <span className="text-base lg:text-lg font-medium w-full max-w-[270px] lg:max-w-full">
              Como armazenar meu café para manter o frescor?
            </span>
          </A.AccordionTrigger>
        </A.AccordionItem>
      </A.Accordion>

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
