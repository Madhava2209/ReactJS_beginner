import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/Header"
import { MainBody } from "./components/MainBody"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Error from "./components/Error"
import { Menu } from "./components/Menu"

const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))
const Error = lazy(() => import("./components/Error"))
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
                element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Suspense fallback={<h1>Loading....</h1>}><Contact/></Suspense>
            },
            {
                path: '/menu/:resId',
                element: <Menu/>
            }
        ],
        errorElement: <Suspense fallback={<h1>Loading....</h1>}><Error/></Suspense>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)