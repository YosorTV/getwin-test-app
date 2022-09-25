import { Box } from "@mui/material";
import { FC } from "react";
import { Logo } from "./Logo";

import styles from "./styles.module.scss";

type HeaderProps = {
  path: string;
};

export const Header: FC<HeaderProps> = ({ path }) => {
  return (
    <Box component="header" className={styles.header}>
      <Box className={styles["header-wrapper"]}>
        <Logo path={path} />
      </Box>
    </Box>
  );
};
