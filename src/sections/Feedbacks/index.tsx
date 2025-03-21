import Image from "next/image";

import * as C from "./carousel";

const feedbacks = [
  {
    id: 1,
    src: "/assets/feedback-1.png",
    width: 362,
    height: 315,
  },
  {
    id: 2,
    src: "/assets/feedback-2.png",
    width: 346,
    height: 315,
  },
  {
    id: 3,
    src: "/assets/feedback-3.png",
    width: 362,
    height: 315,
  },
  {
    id: 4,
    src: "/assets/feedback-4.png",
    width: 346,
    height: 315,
  },
  {
    id: 5,
    src: "/assets/feedback-5.png",
    width: 358,
    height: 315,
  },
  {
    id: 6,
    src: "/assets/feedback-6.png",
    width: 404,
    height: 315,
  },
  {
    id: 7,
    src: "/assets/feedback-7.png",
    width: 320,
    height: 315,
  },
];

export default function Feedbacks() {
  return (
    <section className="relative pt-[72px] pb-28 lg:py-32 bg-[#251F1A] overflow-hidden">
      <h2 className="font-primary text-center text-[42px]/[42px] lg:text-[52px]/[52px] -tracking-[0.84px] mb-[60px] lg:mb-0 text-[#FCF4E9]">
        Quem já provou,{" "}
        <span className="block lg:inline text-[#B27944]">aprovou!</span>
      </h2>

      <p className="hidden lg:block text-[#FCF4E9] text-center mt-5 mb-[74px]">
        Veja os elogios e avaliações de quem já sentiu esse sabor.
      </p>

      <C.Carousel opts={{ loop: true }} className="relative pb-8 lg:pb-10">
        <C.CarouselContent className="-ml-4">
          {feedbacks.map((feedback) => (
            <C.CarouselItem key={feedback.id} className="pl-4 w-fit basis-auto">
              <Image
                key={`feedback_${feedback.id}`}
                width={feedback.width}
                height={feedback.height}
                src={feedback.src}
                alt="Depoimento"
              />
            </C.CarouselItem>
          ))}
        </C.CarouselContent>

        <div className="absolute z-50 w-5 -translate-x-1/2 -bottom-7 left-1/2">
          <C.CarouselPrevious className="h-12 w-12 bg-[#B27944] hover:bg-[#9c6532] border-[#B27944]" />
          <C.CarouselNext className="h-12 w-12 bg-[#B27944] hover:bg-[#9c6532] border-[#B27944]" />
        </div>
      </C.Carousel>

      <div className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#251F1A]" />
      <div className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#251F1A]" />
    </section>
  );
}
