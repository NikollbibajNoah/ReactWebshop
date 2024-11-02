import Home from "./pages/Home"
import NewProducts from "./pages/NewProducts"
import SalesPage from "./pages/Sales"

const config = [
    {title: "Home", path: "/", element: <Home />},
    {title: "Sales", path: "/sales", element: <SalesPage />},
    {title: "New Products", path: "/newproducts", element: <NewProducts />},
]

export {config}