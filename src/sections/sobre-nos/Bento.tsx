import Image from "next/image";

export default function Bento() {
  return (
    <section className="pt-6 lg:pt-20 pb-20 px-5 bg-[#251F1A]">
      <div className="space-y-12 lg:flex lg:justify-between max-w-[1060px] mx-auto">
        <Image
          width={437}
          height={444}
          quality={100}
          src="/assets/patrao.png"
          alt="Bento, fundador do Oxente Café"
          className="mx-auto lg:mx-0 lg:w-[635px] lg:h-[646px] lg:order-2 lg:translate-x-[100px]"
        />

        <div className="w-full max-w-[350px] lg:max-w-[412px] space-y-10 mx-auto lg:mx-0 lg:translate-y-10">
          <h2 className="font-primary text-[42px]/[42px] lg:text-[52px]/[52px] -tracking-[0.84px] lg:-tracking-[1.04px] text-[#FAF0E3] lg:text-[#D4AF85]">
            <span className="lg:hidden">Conheça o Patrão</span>
            <span className="hidden lg:block max-w-[360px]">
              Quem está por trás da Oxente
            </span>
          </h2>

          <div className="space-y-6 lg:space-y-8">
            <p className="text-base/[28px] lg:text-lg/7 text-[#FAF0E3]">
              Nossa missão é simples, mas cheia de propósito: levar até você o
              verdadeiro sabor do café nordestino. Acreditamos que cada xícara
              carrega uma história, um pedaço da nossa terra e do carinho que
              colocamos em cada etapa do processo.
            </p>

            <p className="text-base/[28px] lg:text-lg/7 text-[#FAF0E3]">
              Queremos que mais pessoas conheçam e valorizem os grãos cultivados
              no Nordeste, levar até você o verdadeiro sabor do café nordestino.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
