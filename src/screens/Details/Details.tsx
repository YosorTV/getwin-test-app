import { FC, Fragment, useEffect } from "react";
import { useParams } from "react-router";
import { Typography, Divider, Paper } from "@mui/material";

import { getCurrentPokemon, clearState, PokemonDetails } from "store/entities";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import styles from "./styles.module.scss";
import { pokemonSelector } from "store/selectors";

export const Details: FC = () => {
  const dispatch = useAppDispatch();
  const { currentPokemon } = useAppSelector<PokemonDetails>(pokemonSelector);
  const { name } = useParams();

  useEffect((): any => {
    if (name) dispatch(getCurrentPokemon(name));
    return () => dispatch(clearState());
  }, [name]);

  const renderStatsJSX = currentPokemon?.stats?.map((el: any) => (
    <Fragment key={el?.stat?.name}>
      <Typography component="p" variant="body1">
        {el?.stat?.name}: <span>{el?.base_stat}%.</span>
      </Typography>
    </Fragment>
  ));

  const renderMovesJSX = currentPokemon?.moves?.map((el: any) => (
    <Fragment key={el?.move?.name}>
      <Typography
        component="p"
        variant="body1"
        className={styles["details-groups__group-moves-skill"]}
      >
        {el?.move?.name}
      </Typography>
    </Fragment>
  ));

  return (
    <section className={styles.details}>
      <Typography component="h3" variant="h6">
        Here you can find detailed information about:{" "}
        <span>{currentPokemon?.name} currentPokemon.</span>
      </Typography>
      <div className={styles["details-groups"]}>
        <Paper className={styles["details-groups__group"]}>
          <div className={styles["details-groups__group-header"]}>
            <img src={currentPokemon?.sprites?.front_default ?? ""} alt="image" />
            <Typography component="h6">{currentPokemon?.name}</Typography>
          </div>
          <Divider />
          <div className={styles["details-groups__group-basic"]}>
            <Typography component="p" variant="body1">
              Weight: <span>{currentPokemon?.weight}lbs.</span>
            </Typography>
            <Typography className="" component="p" variant="body1">
              Height: <span>{currentPokemon?.height}cm.</span>
            </Typography>
          </div>
          <Divider />
          <div className={styles["details-groups__group-stats"]}>{renderStatsJSX}</div>
          <Divider />
          <div className={styles["details-groups__group-moves"]}>
            <Typography className={styles["details-groups__group-moves-title"]}>
              Skills:{" "}
            </Typography>
            <div className={styles["details-groups__group-moves-container"]}>{renderMovesJSX}</div>
          </div>
        </Paper>
      </div>
    </section>
  );
};
