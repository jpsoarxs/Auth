import path from 'path'

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'azcode',
    user:     'postgres',
    password: 'admin'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true
};

