import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
  async index(req: Request, res: Response) {

    return res.status(200).json({
      message: 'Usando o GET dentro da rota de projetos'
    });

  }

  async create(req: Request, res: Response) {

    const { 
      name, description, banner_url, thumbnail_url, preview_url,
      regular_price, extended_price, version, browser, compatibility,
      files, tags
    } = req.body

    return res.status(200).json({
      name,
      description,
      banner_url,
      thumbnail_url,
      preview_url,
      regular_price,
      extended_price,
      version,
      browser,
      compatibility,
      files,
      tags
    })

  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    return res.status(200).json({
      message: `Usando o GET com parametro ${id}`
    })

  }
}

export default ItemsController;