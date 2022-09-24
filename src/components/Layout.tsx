import { Container } from "@mui/material";
import { Outlet } from "react-router";
import { Header } from "./Header";

import logo from "assets/logo.png";

export const Layout = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Header title="Welcome to" path={logo} />
      <Outlet />
    </Container>
  );
};
