import { FC, Fragment, useEffect } from "react";
import { useParams } from "react-router";
import { Typography, Divider, Paper } from "@mui/material";

import { getCurrentPokemon, clearState, PokemonDetails } from "store/entities";
import { currentPokemon } from "store/selectors";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import styles from "./styles.module.scss";

export const Details: FC = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector<PokemonDetails>(currentPokemon);
  const { name } = useParams();

  useEffect(() => {
    if (name) dispatch(getCurrentPokemon(name));
    return () => dispatch(clearState());
  }, [name]);

  const renderStatsJSX = pokemon?.stats?.map(el => (
    <Fragment key={el?.stat?.name}>
      <Typography component="p" variant="body1">
        {el?.stat?.name}: <span>{el?.base_stat}%.</span>
      </Typography>
    </Fragment>
  ));

  const renderMovesJSX = pokemon?.moves?.map(el => (
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
        Here you can find detailed information about: <span>{pokemon?.name} pokemon.</span>
      </Typography>
      <div className={styles["details-groups"]}>
        <Paper className={styles["details-groups__group"]}>
          <div className={styles["details-groups__group-header"]}>
            <img src={pokemon?.sprites?.front_default ?? ""} alt="image" />
            <Typography component="h6">{pokemon?.name}</Typography>
          </div>
          <Divider />
          <div className={styles["details-groups__group-basic"]}>
            <Typography component="p" variant="body1">
              Weight: <span>{pokemon?.weight}lbs.</span>
            </Typography>
            <Typography className="" component="p" variant="body1">
              Height: <span>{pokemon?.height}cm.</span>
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
