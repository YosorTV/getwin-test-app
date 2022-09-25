import Select from "react-select";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

import {
  getPokemons,
  clearState,
  PokemonState,
  getFilteredPokemon,
  getPokemonByName,
} from "store/entities";
import { pokemonSelector } from "store/selectors";

import useDebounce from "hooks";
import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import { PokemonsList, PokemonsListSkeleton } from "components";

import styles from "./styles.module.scss";

export const Home = () => {
  const dispatch = useAppDispatch();

  const { pokemons, loading, error } = useAppSelector<PokemonState>(pokemonSelector);

  const [value, setValue] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const debouncedValue = useDebounce<string>(value, 1000);

  const perPage: number = 41;
  const filterList = [
    { label: "Normal", value: "normal" },
    { label: "Rock", value: "rock" },
    { label: "Bug", value: "bug" },
    { label: "Ghost", value: "ghost" },
    { label: "Steel", value: "steel" },
    { label: "Poison", value: "poison" },
    { label: "Fire", value: "fire" },
    { label: "Water", value: "water" },
    { label: "Flying", value: "flying" },
    { label: "Ground", value: "ground" },
  ];

  const customStyles = {
    option: (provided: any, state: { isSelected: boolean }) => ({
      ...provided,
      borderBottom: "1px solid #6a6a6a",
      color: state.isSelected ? "#fff" : "#000",
      zIndex: 100000,
      padding: 10,
    }),
    control: () => ({
      width: 200,
      display: "flex",
      borderRadius: "2px",
      background: "#fff",
      padding: "0.5rem",
    }),
    singleValue: (provided: any, state: { isDisabled: boolean }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  useEffect((): any => {
    dispatch(getPokemons(page));
    return () => dispatch(clearState());
  }, [page]);

  useEffect(() => {
    if (value !== "") dispatch(getPokemonByName(debouncedValue));
    return () => setValue("");
  }, [debouncedValue]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);
  const handleChange = ({ value }: any) => dispatch(getFilteredPokemon(value));

  const handleNext = useCallback(() => {
    setPage(page => page + perPage);
  }, [page, perPage]);

  const handlePrev = useCallback(() => {
    if (page === 0) setPage(0);
    else setPage(page => page - perPage);
  }, [page, perPage]);

  return (
    <section className={styles.home}>
      <div className={styles["home-wrapper"]}>
        <Typography variant="h4" component="h2" className={styles.title}>
          List of pokemons
        </Typography>
        <div className={styles["home-actions"]}>
          <Select options={filterList} onChange={handleChange} styles={customStyles} />
          <TextField
            type="search"
            label="Search"
            variant="outlined"
            value={value}
            className={styles.search}
            onChange={handleSearch}
          />
        </div>
      </div>
      {loading ? (
        <PokemonsListSkeleton className={styles.list} />
      ) : (
        <>
          <PokemonsList className={styles.list} pokemons={pokemons} />
          {error && (
            <div className={styles["list-error"]}>
              <p>{error}!</p>
              <span>Make sure you typed correct name</span>
            </div>
          )}
        </>
      )}
      <div className={styles["btn-wrapper"]}>
        <Button onClick={handlePrev} disabled={page === 0}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={page === 1148}>
          Next
        </Button>
      </div>
    </section>
  );
};
