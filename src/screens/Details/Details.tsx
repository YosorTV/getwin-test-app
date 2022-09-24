import { ChangeEvent, FC, useEffect, useState } from "react";
import { useParams } from "react-router";

import { getCurrentPokemon, clearState } from "store/entities";
import { currentPokemon } from "store/selectors";

import useDebounce from "hooks";
import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import { TextField } from "@mui/material";

import styles from "./styles.modules.scss";

export const Details: FC = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(currentPokemon);

  const { name } = useParams();

  const [value, setValue] = useState<string>(name ?? "");
  const debouncedValue = useDebounce<string>(value, 500);

  const clearEffect = () => {
    setValue("");
    dispatch(clearState());
  };

  useEffect(() => {
    if (name && value !== "") dispatch(getCurrentPokemon(debouncedValue));
    return () => clearEffect();
  }, [name, debouncedValue]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

  return (
    <section>
      <TextField
        type="search"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={handleSearch}
      />
      <div>Details</div>
    </section>
  );
};
