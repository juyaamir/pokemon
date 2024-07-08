import axios from "axios";
const FighterAForm = ({dataFromFighterA}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transformedData = {
      Name: dataFromFighterA.name, 
      Height: dataFromFighterA.height,
      Weight: dataFromFighterA.weight,
      "Hit Points": dataFromFighterA.base.HP,
      Attack: dataFromFighterA.base.Attack,
     // "Special Attack": dataFromFighterA.base["Special Attack"],
      Speed: dataFromFighterA.base.Speed,
    };
    console.log(transformedData);
    try {
      const response = await axios.post('http://localhost:9000/api/v1/pokemon/', transformedData);
      console.log('Data saved successfully', response.data);
    } catch (error) {
      console.error('Error in saving the data', error);
    }
  }
  
  return (
  <div>
      
    <form onSubmit={handleSubmit} className=" rounded-lg border border-gray-200 w-52 text-center text-2xl">
      <div className="px-2">
      <div className="">
        <label htmlFor="name" className="Sofia" >Name </label>
        <input type="text" value={dataFromFighterA.name} disabled name='name' className="bg-yellow-300 text-red-500 text-center w-48" />
      </div>
      <div className="">
        <label htmlFor="height" className="Sofia" >Height </label>
        <input type="number" name="height" value={dataFromFighterA.height} disabled id='height' className="bg-yellow-300 text-red-500 text-center w-48"  />
      </div>
      <div>
        <label htmlFor="weight" className="Sofia" >Weight </label>
        <input type="number" name="weight" id="weight" value={dataFromFighterA.weight} disabled className="bg-yellow-300 text-red-500 text-center w-48"  />
      </div>
      <div>
        <label htmlFor="hp" className="Sofia" >Hit Points </label>
        <input type="number" name='hp' value={dataFromFighterA.base.HP} id='hp' disabled  className="bg-yellow-300 text-red-500 text-center w-48" />
      </div>
      <div>
        <label htmlFor="attack" className="Sofia" >Attack </label>
        <input type="number" name='attack' id="attack" value={dataFromFighterA.base.Attack} disabled className="bg-yellow-300 text-red-500 text-center w-48"  />
      </div>
      <div>
        <label htmlFor="speed" className="Sofia" >Speed </label>
        <input type="number" name="speed" id="speed" value={dataFromFighterA.base.Speed} disabled className="bg-yellow-300 text-red-500 text-center w-48"  />
      </div>
      </div>
     
      <button type="submit" className="bg-lime-400 px-6 hover:bg-orange-500 hover:text-lime-400 rounded-md my-2 text-orange-500"><i className="fa-regular fa-floppy-disk  text-2xl"></i></button>
    </form>
  </div>
  )
  }
  
  export default FighterAForm