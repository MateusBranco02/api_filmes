import express from 'express';
import { listaFilmes, categoriaFilmes, cadastrarFilmes } from '../controller/filmes.js';

const router = express.Router();

router.get('/filmes', listaFilmes);
router.get('/filmes/:categoria', categoriaFilmes);

router.post('/filmes/cadastrar', cadastrarFilmes);

export default router;
