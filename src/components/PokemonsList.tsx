import { Paper, Typography } from "@mui/material";
import { FC, useMemo, memo } from "react";
import { NavLink } from "react-router-dom";
import { Pokemon } from "store/entities/pokemons/types";

type ListProps = {
  pokemons?: Pokemon[];
  className?: string;
};

export const PokemonsList: FC<ListProps> = memo(({ pokemons = [], className }) => {
  const pokemonsList = useMemo(() => {
    return (
      <>
        {pokemons?.map(item => (
          <li key={item?.name}>
            <Typography component={NavLink} variant="body1" to={`details/${item?.name}`}>
              {item?.name}
            </Typography>
          </li>
        ))}
      </>
    );
  }, [pokemons]);

  return (
    <Paper component="ul" variant="outlined" square className={className}>
      {pokemonsList}
    </Paper>
  );
});
