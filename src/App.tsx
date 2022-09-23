import { useAppDispatch } from "hooks/typedHooks";
import { useEffect } from "react";
import { getPokemons } from "store/entities/pokemons/actions";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
