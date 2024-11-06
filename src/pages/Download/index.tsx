import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react"

export function Download() {
  return (
    <main className="h-screen pt-12 text-white">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-gradient text-center text-5xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl exxl:text-6xl">
          A plataforma de vendas de jogos ideal <br /> para desenvolvedores e
          lojistas de games
        </h1>
        <p className="text-center text-xl font-light text-white sm:text-base md:text-base lg:text-base xl:text-lg xxl:text-lg exxl:text-2xl">
          Simplifique sua operação de vendas com as funcionalidades completas da
          Uni Games, <br /> a solução de comércio eletrônico especializada para
          jogos digitais.
        </p>
      </div>

      <div className="flex items-center justify-center gap-12 pt-28 sm:flex-col md:flex-col lg:flex-col xl:flex-col xl:gap-8 xxl:flex-col xxl:gap-8 exl:flex-col exl:gap-8">
        <Button
          variant="windows"
          className="p-16 text-3xl font-semibold sm:w-[250px] sm:text-lg md:w-[300px] md:text-xl lg:w-[350px] lg:text-xl xl:w-[400px] xl:text-xl xxl:w-[500px] exl:w-[500px]"
        >
          <img
            className="w-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg"
          />
          Download para Windows
        </Button>
        <Button
          variant="apple"
          className="p-16 text-3xl font-semibold sm:w-[250px] sm:text-lg md:w-[300px] md:text-xl lg:w-[350px] lg:text-xl xl:w-[400px] xl:text-xl xxl:w-[500px] exl:w-[500px]"
        >
          <img
            className="w-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
          />
          Download para MacOS
        </Button>
        <Button
          variant="linux"
          className="p-16 text-3xl font-semibold sm:w-[250px] sm:text-lg md:w-[300px] md:text-xl lg:w-[350px] lg:text-xl xl:w-[400px] xl:text-xl xxl:w-[500px] exl:w-[500px]"
        >
          <img
            className="w-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          />
          Download para Linux
        </Button>
      </div>

      <div className="flex items-center justify-center pt-36 sm:hidden md:hidden lg:hidden xl:hidden">
        <div className="flex w-[1400px] items-center justify-around rounded-md bg-gray-500 py-16 xl:w-[400px] xxl:w-[750px] exl:w-[950px]">
          <h2 className="text-3xl font-semibold xl:text-xl xxl:pl-10">
            Veja todas as categorias de jogos disponíveis
          </h2>

          <div className="flex items-center gap-6 xxl:pr-10">
            <ArrowRight size={28} />

            <Button
              variant="secondary"
              className="px-8 py-6 text-lg font-normal"
            >
              Categorias de jogos
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-28">
        <Button
          variant="secondary"
          className="px-14 py-10 text-xl font-normal xxl:hidden exl:hidden exxl:hidden"
        >
          Categorias de jogos
        </Button>
      </div>
    </main>
  )
}
