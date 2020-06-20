import express from 'express'
import morgan from 'morgan'

import ItemsController from './controllers/itemsController'
import CartController from './controllers/cartController'

const routes = express.Router();

const itemController = new ItemsController();
const cartController = new CartController();

routes.use(morgan('dev'))

// Item routes
routes.get('/items', itemController.index)
routes.get('/items/:id', itemController.show)
routes.post('/items', itemController.create)

// Cart routes
routes.get('/carts', cartController.index)
routes.get('/carts/:id', cartController.show)
routes.post('/carts', cartController.create)

export default routes;