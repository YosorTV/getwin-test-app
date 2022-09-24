import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Logo } from "./Logo";

import styles from "./styles.module.scss";

type HeaderProps = {
  path: string;
  title: string;
};

export const Header: FC<HeaderProps> = ({ path, title }) => {
  return (
    <Box component="header" className={styles.header}>
      <Box className={styles["header-wrapper"]}>
        <Typography component="h3">{title}</Typography>
        <Logo path={path} />
      </Box>
    </Box>
  );
};
