import axios from "axios";

const FighterBForm = ({dataFromFighterB}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transformedData = {
      Name: dataFromFighterB.name, 
      Height: dataFromFighterB.height,
      Weight: dataFromFighterB.weight,
      "Hit Points": dataFromFighterB.base.HP,
      Attack: dataFromFighterB.base.Attack,
      Speed: dataFromFighterB.base.Speed,
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
        
      <form onSubmit={handleSubmit} className=" border border-gray-200 w-52 text-center text-2xl rounded-lg">
        <div className="px-2">
        <div className="">
          <label htmlFor="name" className="Sofia" >Name </label>
          <input type="text" value={dataFromFighterB.name} disabled name='name' className="bg-yellow-300 text-red-500 text-center w-48" />
        </div>
        <div className="">
          <label htmlFor="height" className="Sofia" >Height </label>
          <input type="number" name="height" value={dataFromFighterB.height} disabled id='height' className="bg-yellow-300 text-red-500 text-center w-48"  />
        </div>
        <div>
          <label htmlFor="weight" className="Sofia" >Weight </label>
          <input type="number" name="weight" id="weight" value={dataFromFighterB.weight} disabled className="bg-yellow-300 text-red-500 text-center w-48"  />
        </div>
        <div>
          <label htmlFor="hp" className="Sofia" >Hit Points </label>
          <input type="number" name='hp' value={dataFromFighterB.base.HP} id='hp' disabled  className="bg-yellow-300 text-red-500 text-center w-48" />
        </div>
        <div>
          <label htmlFor="attack" className="Sofia" >Attack </label>
          <input type="number" name='attack' id="attack" value={dataFromFighterB.base.Attack} disabled className="bg-yellow-300 text-red-500 text-center w-48"  />
        </div>
        <div>
          <label htmlFor="speed" className="Sofia" >Speed </label>
          <input type="number" name="speed" id="speed" value={dataFromFighterB.base.Speed} disabled className="bg-yellow-300 text-red-500 text-center w-48"  />
        </div>
        </div>
       
        <button type="submit" className="bg-lime-400 px-6 hover:bg-orange-500 hover:text-lime-400 rounded-md my-2 text-orange-500"><i className="fa-regular fa-floppy-disk  text-2xl"></i></button>
      </form>
    </div>
    )
    }
    
    export default FighterBForm