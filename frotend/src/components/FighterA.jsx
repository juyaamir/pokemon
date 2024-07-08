import useFetch from './useFetch';


const FighterA = ({pokemonId, sendDataToParent}) => {
    const {data, error, loading} = useFetch(`http://localhost:9000/api/v1/pokemon/${pokemonId}`);
    sendDataToParent(data);
    if(error) return console.log(`Error in fetching data: ${error.message}`);
    if (loading) return <div className="text-center ">
    <span className="loading loading-spinner text-accent w-32 h-32"></span>
     </div>;

  return (
    <div className='rounded-lg h-auto p-1 border border-slate-300 w-64 mb-2'>
        <h1 className='text-center text-2xl Felipa'>Pokemon ID 
          <span className='text-red-500'><span className='bg-lime-300 px-2 rounded-3xl'>{pokemonId}</span></span></h1>
        <img src={data.image} alt="pokemon" className='mx-auto h-48' />
        <p className='text-center text-2xl Felipa'>{data.name}</p>
        <div className='flex flex-wrap justify-between'>
        <ul>
          <p className='text-3xl Sofia bg-lime-300 text-center'>Types</p>
            { 
            data.types.map((t) => (
            <li key={t}>{t}</li>
            ))
          }
          </ul>
          <ul>
            <p className='text-3xl Sofia bg-lime-300 text-center'>Base</p>
            {Object.entries(data.base).map(([key, value]) => (
              <li key={key}>
                {key}: <span className='text-red-400'>{value}</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default FighterA