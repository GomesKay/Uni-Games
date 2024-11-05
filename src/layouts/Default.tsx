import { Link, NavLink, Outlet } from "react-router-dom"
import { ShoppingCart } from "@phosphor-icons/react"

export function Default() {
  return (
    <div className="h-full bg-zinc-900">
      <header className="flex items-center justify-around py-14 text-white">
        <Link
          to="/"
          className="font-serif text-4xl sm:hidden md:hidden lg:hidden xl:hidden xxl:text-3xl exl:text-3xl exxl:text-4xl"
        >
          Uni Games
        </Link>

        <nav className="flex gap-14 text-2xl sm:gap-4 sm:text-lg md:gap-4 md:text-lg lg:gap-6 lg:text-lg xl:gap-8 xl:text-lg xxl:gap-6 xxl:text-xl exl:gap-10 exl:text-xl exxl:text-3xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/suporte">Suporte</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>

        <div className="flex items-center gap-6 sm:hidden md:hidden lg:hidden xl:hidden xl:gap-2 xxl:gap-4">
          <button
            type="button"
            className="h-10 w-32 rounded-full bg-green-500 exxl:h-12 exxl:w-40 exxl:font-semibold"
          >
            Iniciar sessão
          </button>

          <ShoppingCart className="h-6 w-6 cursor-pointer exxl:h-8 exxl:w-8" />
        </div>
      </header>

      <Outlet />

      <footer className="mt-16 flex flex-col items-center gap-24 border-t py-16 text-white xxl:gap-16">
        <div className="flex justify-center gap-36 sm:gap-6 md:gap-6 lg:gap-10 xl:gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold sm:text-xl md:text-xl lg:text-xl xl:text-2xl exxl:text-4xl">
              Contato
            </h1>
            <span className="flex flex-col gap-1.5 sm:text-sm md:text-sm lg:text-sm xl:text-sm exxl:text-lg">
              <h3 className="cursor-pointer hover:underline">LinkedIn</h3>
              <h3 className="cursor-pointer hover:underline">Instagram</h3>
              <h3 className="cursor-pointer hover:underline">WhatsApp</h3>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold sm:text-xl md:text-xl lg:text-xl xl:text-2xl exxl:text-4xl">
              Suporte
            </h1>
            <span className="flex flex-col gap-1.5 sm:text-sm md:text-sm lg:text-sm xl:text-sm exxl:text-lg">
              <h3 className="cursor-pointer hover:underline">Fale Conosco</h3>
              <h3 className="cursor-pointer hover:underline">FAQ</h3>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold sm:text-xl md:text-xl lg:text-xl xl:text-2xl exxl:text-4xl">
              Sobre
            </h1>
            <span className="flex flex-col gap-1.5 sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              <h3 className="cursor-pointer hover:underline">
                Políticas de privacidade
              </h3>
              <h3 className="cursor-pointer hover:underline">
                Direitos autorais
              </h3>
              <h3 className="cursor-pointer hover:underline">Termos de Uso</h3>
            </span>
          </div>
        </div>

        <h1 className="sm:text-sm md:text-sm lg:text-sm xl:text-sm exxl:text-xl">
          © 2024 Uni Games. Todos os direitos reservados.
        </h1>
      </footer>
    </div>
  )
}
