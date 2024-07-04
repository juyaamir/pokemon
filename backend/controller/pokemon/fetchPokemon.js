import axios from "axios";

const fetchPokemon = async(req, res) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=1302`;
  try {
      const result = await axios.get(url);
      const newData = result.data.results;
      const urls = newData?.map((p) => (p.url));
      const promises = urls.map((url)=> axios.get(url));
      const responses = await Promise.all(promises);
      const finalData = responses.map((res) => res.data);

     const specificData = finalData.map((p) => ({
          id: p.id,
          name: p.name,
          height: p.height,
          weight: p.weight, 
          types: p.types.map(typeInfo => typeInfo.type.name),
          base: {
              "HP": p.stats.find(stat => stat.stat.name === "hp").base_stat,
              "Attack": p.stats.find(stat => stat.stat.name === "attack").base_stat,
              "Defense": p.stats.find(stat => stat.stat.name === "defense").base_stat,
              "Sp. Attack": p.stats.find(stat => stat.stat.name === "special-attack").base_stat,
              "Sp. Defense": p.stats.find(stat => stat.stat.name === "special-defense").base_stat,
              "Speed": p.stats.find(stat => stat.stat.name === "speed").base_stat
            },
          image: p.sprites.other.dream_world.front_default,
      }));
     return specificData;    
  } catch (error) {
    res.status(500).json({Message: `Error Fetching the data from pokemon API : ${error.message}`});
  }
}

export default fetchPokemon;