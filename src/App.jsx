import "./App.css"
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Home from "./pages/Home"
import Users from "./pages/Users";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Product from "./pages/Product";

const App = () => {
    const Layout = () => {
        return (
            <div className="bg-gray-800 text-white">
                <Navbar />
                <div className="flex">
                    <div className="max-w-max lg:w-[250px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] border-2 border-gray-700">
                        <Menu />
                    </div>
                    <div className="w-full pt-[5px] pb-[5px] pl-[10px] pr-[10px]">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/users",
                    element: <Users />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/users/:id",
                    element: <User />
                },
                {
                    path: "/products/:id",
                    element: <Product />
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
