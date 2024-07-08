import mongoose from "mongoose";

const pokemonSchema = mongoose.Schema({
    Name: String,
    Height: Number,
    Weight: Number,
    "Hit Points": Number,
    Attack: Number,
    Speed: Number
},
{
    timestamps: true
});

const PokemonModel = mongoose.model('pokemon', pokemonSchema);
export default PokemonModel