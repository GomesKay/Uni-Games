import {
  Devices,
  GameController,
  HardDrives,
  Joystick,
  ListMagnifyingGlass,
  Star,
} from "@phosphor-icons/react"

export function Sobre() {
  return (
    <main className="flex h-full justify-center pt-14 text-white">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-2">
          <h1 className="gradient-blue font-serif text-6xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl">
            Bem-vindo à Uni Games
          </h1>

          <p className="text-xl font-semibold sm:text-sm md:text-sm lg:text-sm xl:text-base">
            Uma plataforma dedicada à venda de jogos digitais
          </p>
        </div>
        <div className="flex w-[800px] flex-wrap justify-center gap-4 sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[350px] xxl:w-[600px]">
          <div className="flex w-[250px] flex-col items-center gap-4 rounded-md bg-[#667EEA] px-6 py-8 text-center">
            <HardDrives size={42} />

            <p>
              Técnicas de segurança para proteger os dados dos usuários e
              garantir a integridade do sistema.
            </p>
          </div>

          <div className="flex w-[250px] flex-col items-center gap-4 rounded-md bg-[#667EEA] px-6 py-8 text-center">
            <GameController size={42} />

            <p>
              Plataforma de jogos online que proporciona aos usuários uma
              experiência interativa, acessível e envolvente.
            </p>
          </div>

          <div className="flex w-[250px] flex-col items-center gap-4 rounded-md bg-[#667EEA] px-6 py-8 text-center">
            <Joystick size={42} />

            <p>
              Ampla seleção de jogos para PC, consoles e dispositivos móveis,
              permitindo que os usuários explorem diferentes títulos por meio de
              filtros avançados.
            </p>
          </div>

          <div className="flex w-[250px] flex-col items-center gap-4 rounded-md bg-[#667EEA] px-6 py-8 text-center">
            <Star size={42} />

            <p>
              Cada jogo contará com uma página detalhada, incluindo descrição,
              requisitos técnicos, avaliações e capturas de tela.
            </p>
          </div>

          <div className="flex w-[250px] flex-col items-center gap-4 rounded-md bg-[#667EEA] px-6 py-8 text-center">
            <Devices size={42} />

            <p>
              Acessível em dispositivos móveis, tablets e desktops,
              proporcionando uma experiência fluida em qualquer ambiente.
            </p>
          </div>

          <div className="flex w-[250px] flex-col items-center gap-4 rounded-md bg-[#667EEA] px-6 py-8 text-center">
            <ListMagnifyingGlass size={42} />

            <p>
              Explore ativamente a biblioteca de jogos do site, utilizando
              filtros e recomendações personalizadas para descobrir novos
              títulos e aproveitar as promoções oferecidas.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
