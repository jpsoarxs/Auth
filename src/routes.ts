import express from 'express'

import ItemsController from './controllers/itemsController'

const routes = express.Router();

const itemController = new ItemsController();

routes.get('/items', itemController.index)
routes.get('/items/:id', itemController.show)
routes.post('/items', itemController.create)

export default routes;