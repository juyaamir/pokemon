import { Router } from "express";
import { getAllPokemon, getOnePokemon, getOneInfo, createOnePokemon } from "../../controller/pokemon/pokemonController.js";

const router = Router();

router.route('/').get(getAllPokemon).post(createOnePokemon);
router.route('/:id').get(getOnePokemon);
router.route('/:id/:info').get(getOneInfo)
export default router;
