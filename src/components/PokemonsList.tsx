import { FC, useMemo, memo } from "react";
import { Pokemon } from "store/entities/pokemons/types";

type ListProps = {
  children?: React.ReactNode;
  pokemons: Pokemon[];
};

export const PokemonsList: FC<ListProps> = memo(({ pokemons }) => {
  const pokemonsList = useMemo(() => {
    return (
      <>
        {pokemons?.map(item => (
          <li key={item?.name}>
            <a>{item?.name}</a>
          </li>
        ))}
      </>
    );
  }, [pokemons]);

  return <ul>{pokemonsList}</ul>;
});
