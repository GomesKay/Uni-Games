import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Download } from "./pages/Download"
import { Suporte } from "./pages/Suporte"
import { Sobre } from "./pages/Sobre"
import { Default } from "./layouts/Default"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/download",
        element: <Download />,
      },
      {
        path: "/suporte",
        element: <Suporte />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
