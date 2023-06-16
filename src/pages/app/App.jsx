import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";
import Home from "../home/Home";
import "./App.css";

import {BrowserRouter, useRoutes} from "react-router-dom";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/account",
      element: <MyAccount />,
    },
    {
      path: "/myOrder",
      element: <MyOrder />,
    },
    {
      path: "/myOrders",
      element: <MyOrders />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
