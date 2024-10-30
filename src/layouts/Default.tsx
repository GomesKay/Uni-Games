import { Link, NavLink, Outlet } from "react-router-dom"
import { ShoppingCart } from "@phosphor-icons/react"

export function Default() {
  return (
    <div className="h-full bg-zinc-900">
      <header className="flex items-center justify-around py-14 text-white">
        <Link to="/" className="exxl:text-4xl exl:text-3xl font-serif text-4xl">
          Uni Games
        </Link>

        <nav className="exxl:text-3xl exl:text-xl exl:gap-10 flex gap-14 text-2xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/suporte">Suporte</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>

        <div className="flex items-center gap-6">
          <button
            type="button"
            className="exxl:w-40 exxl:font-semibold exxl:h-12 h-10 w-32 rounded-full bg-green-500"
          >
            Iniciar sessão
          </button>

          <ShoppingCart className="exxl:w-8 exxl:h-8 h-6 w-6 cursor-pointer" />
        </div>
      </header>

      <Outlet />

      <footer className="mt-16 flex flex-col items-center gap-24 border-t py-16 text-white">
        <div className="flex justify-center gap-36">
          <div className="flex flex-col gap-4">
            <h1 className="exxl:text-4xl text-4xl font-semibold">Contato</h1>
            <span className="flex flex-col gap-1.5">
              <h3 className="cursor-pointer hover:underline">LinkedIn</h3>
              <h3 className="cursor-pointer hover:underline">Instagram</h3>
              <h3 className="cursor-pointer hover:underline">WhatsApp</h3>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="exxl:text-4xl text-4xl font-semibold">Suporte</h1>
            <span className="flex flex-col gap-1.5">
              <h3 className="cursor-pointer hover:underline">Fale Conosco</h3>
              <h3 className="cursor-pointer hover:underline">FAQ</h3>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="exxl:text-4xl text-4xl font-semibold">Sobre</h1>
            <span className="exxl:text-lg flex flex-col gap-1.5">
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

        <h1 className="exxl:text-xl">
          © 2024 Uni Games. Todos os direitos reservados.
        </h1>
      </footer>
    </div>
  )
}
