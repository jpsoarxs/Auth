import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: async () => {
    return {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'azcode',
      charset: 'utf8'
    };
  }
});

export default connection;

// Migrations = Histórico do banco de dados