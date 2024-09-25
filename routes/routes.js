import express from 'express';
import { listaFilmes, categoriaFilmes } from '../controller/filmes.js';

const router = express.Router();

router.get('/filmes', listaFilmes);
router.get('/filmes/:categoria', categoriaFilmes);

export default router;
