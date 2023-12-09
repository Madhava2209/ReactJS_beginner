import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/Header"
import { MainBody } from "./components/MainBody"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import { Error } from "./components/Error"
import { Menu } from "./components/Menu"



const AppLayout = () => (
    <div>
        <Header/>
        <Outlet/>
    </div>
)
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <MainBody />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/menu/:resId',
                element: <Menu/>
            }
        ],
        errorElement: <Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)