export interface Pokemon {
  [x: string]: any;
  name?: string | null;
  url?: string | null;
}

interface PokemonAbility {
  ability: Pokemon;
  is_hidden: boolean;
  slot: number;
}

interface PokemonGames {
  game_index: number;
  version: Pokemon;
}

interface PokemonVersionDetails {
  rarity: number;
  version: Pokemon;
}

interface PokemonHeldItem {
  item: Pokemon;
  version_details: PokemonVersionDetails[];
}

interface PokemonMoves {
  move: Pokemon;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: Pokemon;
    version_group: Pokemon;
  };
}

interface PokemonStats {
  id: number | null | undefined;
  name: string;
  base_stat: number;
  effort: number;
  stat: Pokemon;
}

interface PokemonTypes {
  slot: number;
  type: Pokemon;
}

interface PokemonSprites {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
}

export interface PokemonDetails extends Pokemon {
  id?: number;
  height?: number;
  weight?: number;
  base_experience?: number;
  order?: number;
  is_default?: boolean;
  past_types?: any[];
  species?: Pokemon;
  location_area_encounters?: string;
  forms?: Pokemon[];
  abilities?: PokemonAbility[];
  game_indices?: PokemonGames[];
  held_items?: PokemonHeldItem[];
  moves?: PokemonMoves[];
  stats?: PokemonStats[];
  types?: PokemonTypes[];
  sprites?: PokemonSprites;
  pokemon?: any[];
}

export type PokemonResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

export type PokemonState = {
  pokemons: Pokemon[];
  currentPokemon: PokemonDetails;
  loading: boolean;
  error: string | any;
};

export enum pokemonActions {
  getPokemons = "pokemons/getAllPokemons",
  getCurrentPokemon = "pokemons/getCurrentPokemon",
  getFilteredPokemon = "pokemons/getFilteredPokemon",
  getPokemonByName = "pokemons/getPokemonByName",
}
