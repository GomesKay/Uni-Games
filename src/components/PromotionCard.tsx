import { useState } from "react"
import { promotion } from "../data/games"
import { Heart } from "@phosphor-icons/react"

export function PromotionCard() {
  const [hoverHeart, setHoverHeart] = useState<number | null>(null)

  return (
    <div className="flex gap-10 pt-8 xxl:gap-4 exl:gap-4 exxl:gap-6">
      {promotion.map((image, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-2"
          onMouseEnter={() => setHoverHeart(index)}
          onMouseLeave={() => setHoverHeart(null)}
        >
          <img
            src={image.imageURL}
            alt=""
            className="w-[250px] cursor-pointer xxl:w-[140px] exl:w-[180px] exxl:w-[250px]"
          />

          {hoverHeart === index && (
            <span className="absolute -right-5 -top-5 cursor-pointer">
              <Heart size={46} weight="fill" className="hover:fill-red-400" />
            </span>
          )}

          <div className="w-full max-w-[250px] font-medium xxl:w-[140px] exl:w-[180px] exxl:w-[250px]">
            <p className="text-lg xxl:text-base exxl:text-xl">{image.title}</p>

            <span className="flex gap-4 exxl:text-xl">
              <p className="text-green-400">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(image.price)}
              </p>
              <p className="text-gray-400 line-through">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(image.previousPrice)}
              </p>
            </span>

            <span className="flex gap-2 text-blue-100 exxl:text-xl">
              <p>Feedbacks</p>
              <p>({image.feedback})</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
