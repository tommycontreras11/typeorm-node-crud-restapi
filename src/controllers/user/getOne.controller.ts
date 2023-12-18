import { Request, Response } from 'express'
import { getOneUserService } from '../../services/user/getOne.service'

export const getOneUserController = async(req: Request, res: Response) => {
    getOneUserService(req.params.uuid).then(result => {
        return res.json(result);
    }).catch(e => {
        res.status(500).json({ error: { message: e.message } })
    })
}