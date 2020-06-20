import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
  async index(req: Request, res: Response) {

    return res.status(200).json({
      message: 'Usando o GET dentro da rota de projetos'
    });

  }

  async create(req: Request, res: Response) {

    interface Item {
      name: String, 
      description: String, 
      banner_url: String, 
      thumbnail_url: String, 
      preview_url: String,
      regular_price: Number, 
      extended_price: Number, 
      version: String, 
      browser: Number[], 
      compatibility: Number[],
      files: Number[], 
      tags: String[]
    }

    const item = <Item>req.body

    return res.status(200).json(item)

  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    return res.status(200).json({
      message: `Usando o GET com parametro ${id}`
    })

  }
}

export default ItemsController;