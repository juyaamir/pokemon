import fetchPokemon from './fetchPokemon.js';

export const getAllPokemon = async (req, res) => {
    const pokemon = await fetchPokemon();
    res.status(200).json(pokemon);
} 

export const getOnePokemon = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const pokemon = await fetchPokemon();
    const result = pokemon.find(p => p.id === id);
    result ? res.json(result) : 
    res.status(404).json({ message: 'Pokemon Not Found...‼️' });
};

export const getOneInfo = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const {info} = req.params;
    const pokemon = await fetchPokemon();
    const result = pokemon.find(p => p.id === id);
    if(result){
        const reqInfo = result[info];
        if(reqInfo) {
             return res.status(200).json(reqInfo)
        } else {
          return   res.status(404).json({Message: `Pokemon information Not Found...!`})
        }
    }
    return res.status(404).json({message: `Pokemon Not Found..!`});
}