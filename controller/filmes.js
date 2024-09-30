import database from '../database.js';

const listaFilmes = async (req, res) => {
    const resultado = await database.query('SELECT * FROM db_filmes.public.filmes');
    res.status(200).send(resultado);
}

const categoriaFilmes = async (req, res) => {
    const categoria = req.params.categoria;
    const resultado = await database.query(`SELECT * FROM db_filmes.public.filmes WHERE categoria = '${categoria}'`);
    res.status(200).send(resultado);
}

const cadastrarFilmes = async (req, res) => {
    const novoFilme = req.body;
    const resultado = await database.query(`INSERT INTO db_filmes.public.filmes(id, titulo, categoria) VALUES ('id, titulo, categoria', ${novoFilme})`);
    res.status(201).send({ mensagem: 'Filme Cadastrado!', dados: resultado });

}

export { listaFilmes, categoriaFilmes, cadastrarFilmes };
