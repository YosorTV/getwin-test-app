import { Skeleton } from "@mui/material";
import { FC } from "react";

type PokemonsListSkeletonProps = {
  className?: string;
};

export const PokemonsListSkeleton: FC<PokemonsListSkeletonProps> = ({ className }) => {
  return (
    <div className={className}>
      {[...new Array(60)].map((_, index) => (
        <Skeleton key={index} animation="wave" />
      ))}
    </div>
  );
};
