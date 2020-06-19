import express from 'express'
import cors from 'cors'
import routes from './routes'
import path from 'path'

const app = express();

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação no back-end
// DELETE: Remover uma informação no back-end

// Request Param: Parâmetro que vem na própia rota que identificam um recurso
// Query Param: Parâmetros que vem na própia rota, geralmente opicionais

app.use(cors())
app.use(express.json())
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);