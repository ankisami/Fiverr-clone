import { Outlet, createBrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "~/components";
import {
  HomePage,
  AddPage,
  GigPage,
  GigsPage,
  LoginPage,
  MessagesPage,
  MessagePage,
  MyGigsPage,
  OrdersPage,
  RegisterPage,
} from "~/pages";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/gigs", element: <GigsPage /> },
      { path: "/gig/:id", element: <GigPage /> },
      { path: "/add", element: <AddPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/my-gigs", element: <MyGigsPage /> },
      { path: "/orders", element: <OrdersPage /> },
      { path: "/messages", element: <MessagesPage /> },
      { path: "/message/:id", element: <MessagePage /> },
    ],
  },
]);
