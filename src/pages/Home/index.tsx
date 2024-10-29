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
        <CarouselContent className="w-[1600px]">
          <CarouselItem className="flex items-center justify-center space-x-10">
            <img src={astroBot} alt="Astro Bot" />
            <img src={NBA} alt="2K25" />
            <img src={redDead} alt="Red Dead Redemption 2" />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center space-x-10">
            <img src={fortnite} alt="Fortnite" />
            <img src={hogwartsLegacy} alt="Hogwarts Legacy" />
            <img src={eFootball} alt="eFootball" />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center space-x-10">
            <img src={RiseOfTheRonin} alt="God Of War Ragnarök" />
            <img src={horizonZeroDawn} alt="Horizon Zero Dawn" />
            <img src={silentHill} alt="Silent Hill 2" />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center space-x-10">
            <img src={dyingLight} alt="Dying Light" />
            <img src={fallout} alt="Fallout 4" />
            <img src={untilDawn} alt="Until Dawn" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div>
        <h1 className="font-serif text-4xl">Promoções da Semana</h1>

        <PromotionCard />
      </div>

      <div>
        <h1 className="font-serif text-4xl">Halloween 2024</h1>

        <HalloweenCard />
      </div>

      <div>
        <h1 className="font-serif text-4xl">Especial de Natal</h1>

        <ChristmasCard />
      </div>
    </main>
  )
}
