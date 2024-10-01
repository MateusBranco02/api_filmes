import express from 'express';
import { listaFilmes, categoriaFilmes, cadastrarFilmes, atualizarDados, deletar } from '../controller/filmes.js';

const router = express.Router();

router.get('/filmes', listaFilmes);
router.get('/filmes/:categoria', categoriaFilmes);

router.post('/filmes/cadastrar', cadastrarFilmes);

router.put('/filmes/atualizar/:idFilme', atualizarDados);

router.delete('/filmes/deletar/:idFilme', deletar);

export default router;
