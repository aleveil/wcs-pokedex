import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  useEffect(() => alert("Hello Pokemon Trainer ! :)"), []);

  const [pokemonIndex, setPokemonIndex] = useState(0);

  function handlePrevious() {
    if (pokemonIndex > 0)
      setPokemonIndex((prev) => prev - 1);
    else
      setPokemonIndex(pokemonList.length - 1);
  }
  
  function handleNext() {
    if (pokemonIndex < pokemonList.length - 1)
      setPokemonIndex((prev) => prev + 1);
    else
      setPokemonIndex(0);  }

  return (
    <div className="App">
     <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
     <button onClick={handlePrevious}>Prev</button>
     <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App
