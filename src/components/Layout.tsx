import { Outlet } from "react-router";
import { Header } from "./Header";

import logo from "assets/logo.png";

export const Layout = () => {
  return (
    <>
      <Header path={logo} />
      <Outlet />
    </>
  );
};
