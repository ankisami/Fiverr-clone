import { Outlet, createBrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "~/components";
import {
  Home,
  Add,
  Gig,
  Gigs,
  Login,
  Messages,
  Message,
  MyGigs,
  Orders,
  Register,
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
      { path: "/", element: <Home /> },
      { path: "/gigs", element: <Gigs /> },
      { path: "/gig/:id", element: <Gig /> },
      { path: "/add", element: <Add /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/my-gigs", element: <MyGigs /> },
      { path: "/orders", element: <Orders /> },
      { path: "/messages", element: <Messages /> },
      { path: "/message/:id", element: <Message /> },
    ],
  },
]);
