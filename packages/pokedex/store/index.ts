import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import {createWrapper } from 'next-redux-wrapper';

export interface State {
  tick: string;
}

const initialState = {
  pokemons: [],
  selectedPokemon: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return { ...state, pokemons: action.payload, loading: action.loading };
    case "SELECT_POKEMON":
      return { ...state, selectedPokemon: action.payload };
    default:
      return state;
  }

};
const makeStore = (context: Context) => createStore(reducer);
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});