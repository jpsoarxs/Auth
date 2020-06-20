import express from 'express'
import { Request, Response } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import ItemsController from './controllers/ItemsController'
import CartController from './controllers/CartController'

const routes = express.Router();

const itemController = new ItemsController();
const cartController = new CartController();

routes.use(morgan('dev'))
routes.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())

// Item routes
routes.get('/items', itemController.index)
routes.get('/items/:id', itemController.show)
routes.post('/items', itemController.create)

// Cart routes
routes.get('/carts', cartController.index)
routes.get('/carts/:id', cartController.show)
routes.post('/carts', cartController.create)

routes.use((req:Request, res:Response, next) => {

  const erro = new Error('Route not found')
  erro.status = 404
  next(erro)

})

interface ErrorObject {
  status: number,
  message: string
}

routes.use((error:ErrorObject, req:Request, res:Response, next) => {
  res.status(error.status || 500)
  return res.send({
    error: {
      message: error.message
    }
  })
})


export default routes;