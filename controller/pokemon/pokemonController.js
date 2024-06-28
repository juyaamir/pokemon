
import pokData from '../../data/pokemon.js';

export const getAllPokemon = (req, res) => {
    res.status(200).json(pokData);
}

export const getOnePokemon = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const pokemon = pokData.find(p => p.id === id);
    pokemon ? res.json(pokemon) : 
    res.status(404).json({ message: 'Pokemon Not Found...‼️' });
};

export const getOneInfo = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const {info} = req.params;
    const pokemon = pokData.find(p => p.id === id);
    if(pokemon){
        const reqInfo = pokemon[info];
        
        if(reqInfo) {
             return res.status(200).json(reqInfo)
        } else {
          return   res.status(404).json({Message: `Pokemon information Not Found...!`})
        }
    }
    return res.status(404).json({message: `Pokemon Not Found..!`});
}