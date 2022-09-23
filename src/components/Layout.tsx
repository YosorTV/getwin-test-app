import { Container } from "@mui/material";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <Container maxWidth="xl">
      <Outlet />
    </Container>
  );
};
