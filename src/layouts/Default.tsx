import { Link, NavLink, Outlet } from "react-router-dom"

export function Default() {
  return (
    <div className="h-screen bg-zinc-900">
      <header className="flex items-center justify-around py-14 text-white">
        <Link to="/" className="font-serif text-4xl">
          Uni Games
        </Link>

        <nav className="flex gap-14 text-2xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/suporte">Suporte</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>

        <button type="button" className="h-10 w-32 rounded-full bg-green-500">
          Iniciar sessão
        </button>
      </header>

      <Outlet />
    </div>
  )
}
