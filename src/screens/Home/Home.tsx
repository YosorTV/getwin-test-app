import { useCallback, useEffect, useState } from "react";

import { getPokemons, clearState } from "store/entities";
import { allPokemons } from "store/selectors";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";
import { PokemonsList } from "components";

import styles from "./styles.module.scss";

export const Home = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(allPokemons);

  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    dispatch(getPokemons(page));
    return () => dispatch(clearState());
  }, [page, dispatch]);

  const handleNext = useCallback(() => {
    setPage(page => page + 21);
  }, [page]);

  const handlePrev = useCallback(() => {
    if (page === 0) setPage(0);
    else setPage(page => page - 21);
  }, [page]);

  return (
    <section>
      <PokemonsList className={styles.list} pokemons={pokemons} />
      <div className={styles["btn-wrapper"]}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
  );
};
