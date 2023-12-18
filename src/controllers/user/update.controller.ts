import { Request, Response } from 'express'
import { updateUserService } from '../../services/user/update.service'

export const updateUserController = async(req: Request, res: Response) => {
    updateUserService(req.body).then(result => {
        return res.json(result);
    }).catch(e => {
        res.status(500).json({ error: { message: e.message } })
    })
}