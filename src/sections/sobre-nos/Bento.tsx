import Image from "next/image";

export default function Bento() {
  return (
    <section className="pt-6 overflow-hidden lg:pt-20 pb-20 lg:pb-32 px-5 bg-[#251F1A]">
      <div className="space-y-12 lg:flex lg:justify-between max-w-[1060px] mx-auto">
        <Image
          width={437}
          height={444}
          quality={100}
          src="/assets/patrao.png"
          alt="Bento, fundador do Oxente Café"
          className="mx-auto lg:mx-0 lg:w-[635px] lg:h-[646px] lg:order-2 lg:translate-x-[100px]"
        />

        <div className="w-full max-w-[350px] lg:max-w-[412px] space-y-10 mx-auto lg:mx-0 lg:translate-y-10 lg:translate-x-10">
          <h2 className="font-primary text-[42px]/[42px] lg:text-[52px]/[52px] -tracking-[0.84px] lg:-tracking-[1.04px] text-[#FAF0E3] lg:text-[#D4AF85]">
            <span className="lg:hidden">Conheça o Patrão</span>
            <span className="hidden lg:block max-w-[360px]">
              Quem está por trás da Oxente
            </span>
          </h2>

          <div className="space-y-6 lg:space-y-8">
            <p className="text-base/[28px] lg:text-lg/7 text-[#FAF0E3]">
              Minha jornada no mundo do café começou em Piatã, Bahia, onde
              descobri os cafés especiais e me encantei com a riqueza de sabores
              e aromas que um único grão pode ter. Foi essa paixão que me levou
              a estudar, me tornar barista e torrador, e unir esse conhecimento
              com minha formação em Administração para criar a Oxente Café.
            </p>

            <p className="text-base/[28px] lg:text-lg/7 text-[#FAF0E3]">
              Acredito que o Nordeste é potência no café especial e que não
              precisamos ir longe para encontrar grãos incríveis. Na Oxente,
              valorizamos cada etapa do processo – da escolha dos grãos à torra
              –, sempre com respeito ao produtor e ao consumidor.
            </p>

            <p className="text-base/[28px] lg:text-lg/7 text-[#FAF0E3]">
              O café sempre fez parte da minha vida, do aroma vindo da cozinha
              dos meus pais à xícara que me acompanha todos os dias. Hoje, quero
              levar a qualidade do café nordestino para mais mesas brasileiras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
