import database from '../database.js';

const listaFilmes = async (req, res) => {
    const resultado = await database.query('SELECT * FROM db_filmes.public.filmes');
    res.status(200).send(resultado.rows);
}

const categoriaFilmes = async (req, res) => {
    const categoria = req.params.categoria;

    const resultado = await database.query(`SELECT * FROM db_filmes.public.filmes WHERE categoria = '${categoria}'`);
    res.status(200).send(resultado.rows);
}

const cadastrarFilmes = async (req, res) => {
    const { titulo, categoria } = req.body;

    const resultado = await database.query(`INSERT INTO filmes(titulo, categoria) VALUES ('${titulo}', '${categoria}')`);
    console.log({ titulo, categoria });
    res.status(201).send({ mensagem: 'Filme Cadastrado!' });
}

const atualizarDados = async (req, res) => {
    const idFilme = req.params.idFilme;
    const { titulo, categoria } = req.body;

    const resultado = await database.query(`UPDATE filmes SET categoria = '${categoria}' WHERE id = ${idFilme} `);
    res.status(200).send({ mensagem: 'Filme atualizado!' });
};

const deletar = async (req, res) => {
    const idFilme = req.params.idFilme;
    console.log(idFilme)

    const resultado = await database.query(`DELETE FROM filmes WHERE id = '${idFilme}' `);
    res.status(200).send({ mensagem: 'Filme deletado!' });
}

export { listaFilmes, categoriaFilmes, cadastrarFilmes, atualizarDados, deletar };
