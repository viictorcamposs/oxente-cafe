import Image from "next/image";

import * as A from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="relative pt-12 pb-[102px] lg:py-28 px-5 bg-[#F5EBDF]">
      <h2 className="font-primary text-[42px]/[42px] lg:text-[52px]/[52px] text-center font-normal w-full max-w-[302px] lg:max-w-full mx-auto">
        Puxa uma cadeira e bora{" "}
        <span className="text-[#B27944]">tirar as dúvidas!</span>
      </h2>

      <p className="hidden text-lg text-center lg:block">
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

          <A.AccordionContent className="w-full max-w-[788px]">
            Notas sensoriais são os aromas e sabores naturais que percebemos ao
            degustar o café. Dependendo da origem, variedade do grão e método de
            processamento, o café pode ter notas que lembram frutas, chocolate,
            mel, castanhas, caramelo e até flores.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            As notas sensoriais vêm da genética do grão, do terroir (clima, solo
            e altitude onde foi cultivado), do processamento e da torra. Durante
            a torra, os compostos do café se transformam, revelando diferentes
            aromas e sabores. A avaliação das notas é feita por provadores
            experientes.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px] space-y-5">
            <p>
              As notas sensoriais do café permanecem as mesmas, ou seja, um café
              frutado sempre terá características frutadas, independentemente do
              método de preparo. O que muda é a forma como essas características
              se destacam. Diferentes métodos podem acentuar ou suavizar
              elementos como doçura, acidez e corpo.
            </p>

            <p>
              Por exemplo, no V60, a acidez tende a ficar mais evidente,
              enquanto na prensa francesa, o corpo e os óleos naturais do café
              se destacam mais. No espresso, a doçura pode ser realçada devido à
              concentração dos sabores.
            </p>
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            Os grãos nordestinos, especialmente de regiões como Piatã (BA), são
            reconhecidos pela alta qualidade devido ao clima ameno, altitude
            elevada e cuidados no cultivo. Esses fatores resultam em cafés com
            perfis sensoriais sofisticados e equilíbrio entre doçura, acidez e
            corpo. Além disso, valorizamos os produtores locais, fortalecendo a
            economia da região.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            O ideal é comprar café em grãos e moer na hora do preparo. Assim, os
            aromas e sabores são preservados por mais tempo. O café moído perde
            frescor mais rapidamente, mas se armazenado corretamente, ainda pode
            proporcionar uma ótima experiência.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            Sim! Moemos o café no padrão ideal para seu método de preparo. Basta
            selecionar essa opção ao fazer sua compra.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            A pontuação do café é determinada por especialistas (Q-Graders) que
            avaliam critérios como acidez, doçura, corpo e equilíbrio da bebida.
            Somente cafés acima de 80 pontos são considerados especiais. Quanto
            maior a pontuação, mais refinadas e complexas são as características
            do café, além de menos defeitos e vão ter os grãos.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            O café especial possue maior complexidade sensorial, acidez
            equilibrada e doçura natural. Já os cafés tradicionais de mercado,
            geralmente, contêm grãos sabor amargo, menos doçura. Além disso,
            muitos cafés comerciais incluem grãos com defeitos e passam por
            torra excessiva para mascarar essas imperfeições.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px] space-y-5">
            <p>
              Natural: O café seca com a fruta ao redor do grão, resultando em
              uma bebida mais doce e encorpada.
            </p>

            <p>
              CD (Cereja Descascado): A polpa da fruta é removida antes da
              secagem, equilibrando doçura e acidez.
            </p>

            <p>
              Fermentado: O café passa por fermentação controlada para destacar
              sabores específicos, tornando a bebida mais intensa e
              diferenciada.
            </p>
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            Não necessariamente. A quantidade de cafeína depende mais da espécie
            do grão do que da qualidade. O arábica (usado na maioria dos cafés
            especiais) tem cerca de 50% menos cafeína do que o robusta/conilon
            (presente na maioria dos cafés comerciais).
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            Não! As notas sensoriais do café especial são naturais e resultam da
            variedade do grão, do terroir e do processo de torra. Diferente dos
            cafés comerciais que podem ter aromatizantes artificiais, o café
            especial não recebe aditivos.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px]">
            Sim, mas por um bom motivo. O café especial envolve colheita
            seletiva manual, processamento cuidadoso e torra precisa, além de
            beneficiar pequenos produtores. Isso garante qualidade excepcional e
            um café livre de defeitos, diferente dos cafés comerciais, que
            priorizam volume em vez de qualidade.
          </A.AccordionContent>
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

          <A.AccordionContent className="w-full max-w-[788px] space-y-5">
            <p>
              Guarde na própria embalagem ou em um pote hermético, longe da luz
              e da umidade.
            </p>

            <p>
              Evite geladeira ou congelador, pois podem alterar o sabor e a
              umidade dos grãos.
            </p>

            <p>
              Prefira consumir o café em até 30 dias após aberto para aproveitar
              melhor os aromas
            </p>
          </A.AccordionContent>
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
