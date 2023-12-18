import { Request, Response } from 'express'
import { createUserService } from '../../services/user/create.service'

export const createUserController = async(req: Request, res: Response) => {
    createUserService(req.body).then(result => {
        return res.json(result);
    }).catch(e => {
        res.status(500).json({ error: { message: e.message } })
    })
}