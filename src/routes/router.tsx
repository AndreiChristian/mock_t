import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import HomeRoute from "./Home";
import FaqRoute from "./Faq";
import SigninRoute from "./auth/Signin";
import LoginRoute from "./auth/Login";
import ProducRoot from "./products/Root";
import ProductScreen from "./products/ProductScreen";
import OverviewScreen from "./products/OverviewScreen";
import CategoryScreen from "./products/CategoriesScren";
import CartScreen from "./checkout/CartScreen";
import CheckoutScreen from "./checkout/CheckoutScreen";
import MeniulZileiScreen from "./products/MeniulZileiScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        Component: HomeRoute
      },
      {
        path: "/faq",
        Component: FaqRoute
      },
      {
        path: "/auth/signin",
        Component: SigninRoute
      },
      {
        path: "/auth/login",
        Component: LoginRoute
      },
      {
        path: "/cart",
        Component: CartScreen
      },
      {
        path: "/checkout",
        Component: CheckoutScreen
      },
      {
        path: "/produse",
        Component: ProducRoot,
        children: [
          {
            path: "",
            Component: OverviewScreen
          },
          {
            path: "meniul-zilei",
            Component: MeniulZileiScreen
          },
          {
            path: "categorie/:id",
            Component: CategoryScreen
          }, {
            path: 'produs/:id',
            Component: ProductScreen
          }
        ]
      }
    ]
  }
])
