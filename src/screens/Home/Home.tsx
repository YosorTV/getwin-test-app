import { useEffect } from "react";
import { getPokemons } from "store/entities/pokemons/actions";
import { allPokemons } from "store/selectors/pokemon";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";
import { PokemonsList } from "components";

import styles from "./styles.modules.scss";

export const Home = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(allPokemons);

  useEffect(() => {
    dispatch(getPokemons(0));
  }, [dispatch]);

  return (
    <section>
      <header>Logo</header>
      <PokemonsList pokemons={pokemons} />
    </section>
  );
};
