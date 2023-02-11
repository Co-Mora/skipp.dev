import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store, withRedux } from "../store";
import PokemonGrid from '@workspace/components/pokeGridData'

const Index = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setLoading(false);
      dispatch({ type: "SET_POKEMONS", payload: data.results, loading, });
    };
    fetchPokemons();
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
       <PokemonGrid />
      )}
    </div>
  );
};

export default Index;
