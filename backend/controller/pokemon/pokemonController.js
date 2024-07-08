import fetchPokemon from "./fetchPokemon.js";
import PokemonModel from "./model/pokemonModel.js";
//getAllPokemon
export const getAllPokemon = async (req, res) => {
const pokemon = await fetchPokemon();
res.status(200).json(pokemon);
};

//save a pokemon
export const createOnePokemon = async (req, res) => {
try {
const pokemon = new PokemonModel(req.body);
await pokemon.save();
res.status(201).json({ message: `pokemon Successfully saved!` });
} catch (error) {
res.status(500).json({ message: `Internal Server Error` });
}
};

//getOnePokemon
export const getOnePokemon = async (req, res) => {
const id = parseInt(req.params.id, 10);
try {
const pokemon = await fetchPokemon();
const result = pokemon.find(p => p.id === id);
result
? res.json(result)
: res.status(404).json({ message: "Pokemon Not Found...‼️" });
} catch (error) {
res.status(500).json({ message: "Internal Server Error" });
}
};
//getOneInfo
export const getOneInfo = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { info } = req.params;
    const pokemon = await fetchPokemon();
    const result = pokemon.find(p => p.id === id);
    if (result) {
        const reqInfo = result[info];
    if (reqInfo) {
        return res.status(200).json(reqInfo);
    } else {
        return res.status(404).json({ Message: `Pokemon information Not Found...!` });
    }}
    return res.status(404).json({ message: `Pokemon Not Found..!` });
};