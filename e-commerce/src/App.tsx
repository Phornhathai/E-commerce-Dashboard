import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Login from "./pages/login/Login";
import "./styles/global.scss"
import User from "./pages/user/User";
import Product from "./pages/product/Product";



function App() {

  const Layout = () => {
    return (
      // main have set css by global.scss
      <div className="main">
        <Navbar />
        {/* container have set to flex */}
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  //Feature Overview page of react Router
  const router = createBrowserRouter([
    //use plain objects
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
        },
      ]
    },
    {
      //can create own login layout
      path: "/login",
      element: <Login />,
    },
  ]);



  return (
    <RouterProvider router={router} />
  )
}

export default App
