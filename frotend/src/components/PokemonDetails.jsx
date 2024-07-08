import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const PokemonDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const {data, error, loading} = useFetch(`http://localhost:9000/api/v1/pokemon/${id}`);
  
  if(error) return console.log(`Error in fetching data: ${error.message}`);
  if (loading) return <div className="flex justify-center items-center h-screen ">
  <span className="loading loading-spinner text-accent w-32 h-32"></span>
   </div>;

  return (
    <div className='relative'>
      <button onClick={() => navigate(-1)} className='bg-lime-400 text-white py-1 px-3 rounded-md
      absolute top-1/2 ml-4'><i className="fa-solid fa-backward"></i></button>
      
        <img src={data.image} alt="pokemon" className='mx-auto mb-3 h-72' />
        <div className='flex flex-wrap justify-center gap-10'>
        <div className=''>
          <p className='text-3xl Sofia bg-lime-400 text-center'>Info</p>
          <p>Name: {data.name}</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
          
          <ul>
          <p className='text-3xl Sofia bg-lime-400 text-center'>Types</p>
             { 
            data.types.map((t) => (
            <li key={t}>{t}</li>
            ))
          }
          </ul>
          <ul>
            <p className='text-3xl Sofia bg-lime-400 text-center'>Base</p>
            {Object.entries(data.base).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div> 
    </div>
  )
}

export default PokemonDetails