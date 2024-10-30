import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react"

export function Download() {
  return (
    <div className="h-screen pt-12 text-white">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-gradient text-center text-5xl font-bold exxl:text-6xl">
          A plataforma de vendas de jogos ideal <br /> para desenvolvedores e
          lojistas de games
        </h1>
        <p className="text-center text-xl font-light text-white exxl:text-2xl">
          Simplifique sua operação de vendas com as funcionalidades completas da
          Uni Games, <br /> a solução de comércio eletrônico especializada para
          jogos digitais.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-12 pt-28 exl:flex-col exl:gap-8 exl:space-x-0 exxl:space-x-8">
        <Button
          variant="windows"
          className="p-16 text-3xl font-semibold exl:w-[500px]"
        >
          <img
            className="w-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg"
          />
          Download para Windows
        </Button>
        <Button
          variant="apple"
          className="p-16 text-3xl font-semibold exl:w-[500px]"
        >
          <img
            className="w-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
          />
          Download para MacOS
        </Button>
        <Button
          variant="linux"
          className="p-16 text-3xl font-semibold exl:w-[500px]"
        >
          <img
            className="w-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          />
          Download para Linux
        </Button>
      </div>

      <div className="flex items-center justify-center pt-36">
        <div className="flex w-[1400px] items-center justify-around rounded-md bg-gray-500 py-16 exl:w-[950px]">
          <h2 className="text-3xl font-semibold">
            Veja todas as categorias de jogos disponíveis
          </h2>

          <div className="flex items-center gap-6">
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
    </div>
  )
}
