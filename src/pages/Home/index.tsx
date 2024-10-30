import { PromotionCard } from "@/components/PromotionCard"
import { HalloweenCard } from "@/components/HalloweenCard"
import { ChristmasCard } from "@/components/ChristmasCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import astroBot from "@/assets/AstroBot.png"
import NBA from "@/assets/2K25.png"
import redDead from "@/assets/RedDeadRedemption2.png"
import fortnite from "@/assets/Fortnite.png"
import hogwartsLegacy from "@/assets/HogwartsLegacy.png"
import eFootball from "@/assets/eFootball.png"
import RiseOfTheRonin from "@/assets/RiseOfTheRonin.png"
import horizonZeroDawn from "@/assets/HorizonZeroDawn.png"
import silentHill from "@/assets/SilentHill2.png"
import dyingLight from "@/assets/DyingLight.png"
import fallout from "@/assets/Fallout4.png"
import untilDawn from "@/assets/UntilDawn.png"

export function Home() {
  return (
    <main className="flex flex-col items-center gap-12 py-10 text-white">
      <Carousel>
        <CarouselContent className="w-[1600px] exl:w-[940px] exxl:w-[1350px]">
          <CarouselItem className="flex items-center justify-center space-x-10 exl:space-x-4 exxl:space-x-8">
            <img
              src={astroBot}
              alt="Astro Bot"
              className="exl:w-[300px] exxl:w-[420px]"
            />
            <img
              src={NBA}
              alt="2K25"
              className="exl:w-[300px] exxl:w-[420px]"
            />
            <img
              src={redDead}
              alt="Red Dead Redemption 2"
              className="exl:w-[300px] exxl:w-[420px]"
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center space-x-10 exl:space-x-4 exxl:space-x-8">
            <img
              src={fortnite}
              alt="Fortnite"
              className="exl:w-[300px] exxl:w-[420px]"
            />
            <img
              src={hogwartsLegacy}
              alt="Hogwarts Legacy"
              className="exl:w-[300px] exxl:w-[420px]"
            />
            <img
              src={eFootball}
              alt="eFootball"
              className="exl:w-[300px] exxl:w-[420px]"
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center space-x-10 exl:space-x-4 exxl:space-x-8">
            <img
              src={RiseOfTheRonin}
              alt="God Of War Ragnarök"
              className="exl:w-[300px] exxl:w-[420px]"
            />
            <img
              src={horizonZeroDawn}
              alt="Horizon Zero Dawn"
              className="exl:w-[300px] exxl:w-[420px]"
            />
            <img
              src={silentHill}
              alt="Silent Hill 2"
              className="exl:w-[300px] exxl:w-[420px]"
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center space-x-10 exl:space-x-4 exxl:space-x-8">
            <img
              src={dyingLight}
              alt="Dying Light"
              className="exl:w-[300px] exxl:w-[420px]"
            />
            <img
              src={fallout}
              alt="Fallout 4"
              className="exl:w-[300px] exxl:w-[420px]"
            />
            <img
              src={untilDawn}
              alt="Until Dawn"
              className="exl:w-[300px] exxl:w-[420px]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div>
        <h1 className="font-serif text-4xl exl:text-3xl exxl:text-5xl">
          Promoções da Semana
        </h1>

        <PromotionCard />
      </div>

      <div>
        <h1 className="font-serif text-4xl exl:text-3xl exxl:text-5xl">
          Halloween 2024
        </h1>

        <HalloweenCard />
      </div>

      <div>
        <h1 className="font-serif text-4xl exl:text-3xl exxl:text-5xl">
          Especial de Natal
        </h1>

        <ChristmasCard />
      </div>
    </main>
  )
}
