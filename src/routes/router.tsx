import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import HomeRoute from "./Home";
import FaqRoute from "./Faq";
import SigninRoute from "./auth/Signin";
import LoginRoute from "./auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
    ]
  }
])
