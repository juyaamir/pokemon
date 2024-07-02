import useFetch from "./useFetch";
import { Link } from "react-router-dom";


const Pokemon = () => {

  const {data, error, loading} = useFetch(`https://pokemon-72b3.onrender.com/api/v1/pokemon/`);
  if(error) return console.log('Error in fetching the data');
  if(loading) return console.log('Loading ..............');
  return (
    <div>
      <ul className="flex flex-wrap gap-6 justify-between mx-10" >
              {
      data?.map((pokemon) => (
       
        <li key={pokemon.id} className="border border-slate-200 p-4 w-49 hover:bg-slate-100 hover:cursor-default ">
          {Object.entries(pokemon.name).map(([key, value]) => (
            <p key={key}><span className="font-medium capitalize">{`${key}`}</span> : <span>{`${value}`}</span></p>
          ))}
          <p className="text-center bg-orange-500 py-1 text-white hover:bg-orange-400">
            <Link to={'/:id'} className="">More Details</Link></p>
        </li>
      ))
      }
      </ul>

    </div>
  )
}

export default Pokemon