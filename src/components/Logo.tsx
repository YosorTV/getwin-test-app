import { FC } from "react";

type LogoProps = {
  path: string;
};

export const Logo: FC<LogoProps> = ({ path }) => {
  return <img src={path} alt={`logo-${path}`} />;
};
