import { useState } from "react";
import useFetch from "./useFetch";
import FighterA from "./FighterA";
import FighterB from "./FighterB";
import FighterAForm from "./fighterAForm";
import FighterBForm from "./fighterBForm";
import { Link } from "react-router-dom";
const Pokemon = () => {
  const { data, error, loading } = useFetch(`http://localhost:9000/api/v1/pokemon/`);
  const [fighterAId, setFighterAId] = useState(null);
  const [fighterBId, setFighterBId] = useState(null);
  const [winner, setWinner] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [dataFromFighterA, setDataFromFighterA] = useState('');
  const [dataFromFighterB, setDataFromFighterB] = useState('');

  if (error) return console.log(`Error in fetching data: ${error.message}`);
 if (loading) return <div className="flex justify-center items-center h-screen ">
<span className="loading loading-spinner text-accent w-32 h-32"></span>
 </div>;
  const selectRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 100) + 1; 
    setFighterBId(randomId);
  };

  const handleDataFromFighterA = (data) => {
    setDataFromFighterA(data);
  }

  const handleDataFromFighterB = (data) => {
    setDataFromFighterB(data);
    setShowButton(true);
  }

  return (
    <div>
      <div className="flex justify-center"><p className="text-3xl p-1 animation rounded-md"> 
        <i className="fa-sharp fa-thin fa-swords"></i><i className="fa-solid fa-khanda">
        </i> Battlefield <i className="fa-solid fa-khanda"></i></p>
        </div>
      <div className="flex flex-wrap justify-around text-lg ">
        <div>
          <p className="p-1 mb-2">Select a pokemon to fight <i className="fa-solid fa-person-rifle text-red-400"></i></p>
          {fighterAId && <FighterA sendDataToParent = {handleDataFromFighterA} pokemonId={fighterAId} />}
        </div>
        <div className="text-center">
            {
          winner &&
          <div> 
            <p className="text-emerald-400 font-bold p-1">The winner Details:</p>
            {
            (dataFromFighterA.base.HP > dataFromFighterB.base.HP ||
            (dataFromFighterA.base.HP === dataFromFighterB.base.HP && dataFromFighterA.base.Speed > dataFromFighterB.base.Speed) || 
            (dataFromFighterA.base.HP === dataFromFighterB.base.HP && dataFromFighterA.base.Speed === dataFromFighterB.base.Speed && dataFromFighterA.base.Attack > dataFromFighterB.base.Attack))?
            <FighterAForm dataFromFighterA={dataFromFighterA} />:
            <FighterBForm dataFromFighterB={dataFromFighterB} />
            }
            </div>
          }
          { showButton &&
            <button className="hover:border-none hover:text-red-500 border border-gray-500 rounded-2xl px-4 py-1
            bg-yellow-300 my-4" 
            onClick={() => {
            setWinner(true);
            }}>
            <i className="fa-solid fa-gun text-2xl"></i> Battle!
          </button>
          }

        </div>
        <div>
          <button className="p-1 border rounded-xl my-2 bg-gray-100 hover:bg-gray-200" onClick={selectRandomPokemon}>
            Choose a pokemon randomly <i className="fa-solid fa-person-military-rifle text-red-500"></i>
          </button>
          {fighterBId && <FighterB pokemonId={fighterBId} sendDataToParent = {handleDataFromFighterB} />}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-between mx-8 relative">
        {data?.map((pokemon) => (
          <div key={pokemon.id} className="border border-slate-200 hover:bg-slate-200 hover:cursor-default h-64 w-44
          hover:shadow-lg relative hover:border-none rounded-lg container">
            <button
              onClick={() => setFighterAId(pokemon.id)}
              className="absolute mt-24 text-white py-1 bg-orange-500 ml-2 px-4 select-me rounded-lg select-me invisible">
              Select me to fight
            </button>
            <img src={pokemon.image} alt="pokemon" className="w-full h-40 mb-2" />
            <div className="px-2">
            <p className="Sofia text-xl text-center">{pokemon.name}</p>
            <p className="text-center bg-orange-500  text-white hover:bg-orange-400
            my-1">
            <Link to={`/${pokemon.id}/${pokemon.info}`} className="">Quick View</Link></p>
            <p className="text-center bg-orange-500  text-white hover:bg-orange-400">
            <Link to={`/${pokemon.id}`} >More Details</Link>
            </p> 
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;