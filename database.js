import pg from 'pg';

// const conexao = new pg.Client('postgresql://mateus:7NMh9ixAi9SxzlZlN9Grdg@brainy-boar-3152.j77.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full');
const conexao = new pg.Client('postgresql://postgres:admin@localhost:5432/db_filmes');

try {
    await conexao.connect()
    console.log('Banco de Dados conectado!');
} catch (erro) {
    console.log('Erro ao conectar no banco de dados!')
    console.log(erro);
}

export default conexao;
