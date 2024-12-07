import { Header } from "./components/header.jsx";
import { Body } from "./components/body.jsx";
import { Footer } from "../src/components/footer.jsx";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
// import { About } from "./components/about.jsx";
// import { Contact } from "./components/contact.jsx";
import { Error } from "./components/error.jsx";
import { RestaurantsMenu } from "./components/restaurantsMenu.jsx";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import Cart from "./components/cart.jsx";
import "./index.css"
import "./shimmer.css"

const About = lazy(() => import("./components/about.jsx"))
const Contact = lazy(() => import("./components/contact.jsx"))

let Index = () => {
    return (
        <div>
            <Provider store={appStore}>
                <Header />
                <Outlet />
                <Footer />
            </Provider>
        </div>
    )
}
let router = createHashRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<div>loading...</div>}><About /></Suspense>
                // element:<About/>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<div>loading...</div>}><Contact /></Suspense>
                // element:<Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantsMenu />
            }
        ]
    },

])

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
