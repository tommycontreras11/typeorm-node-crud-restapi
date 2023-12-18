import { Request, Response } from 'express'
import { deleteUserService } from '../../services/user/delete.service'

export const deleteUserController = async(req: Request, res: Response) => {
    deleteUserService(req.params.uuid).then(result => {
        return res.json(result);
    }).catch(e => {
        res.status(500).json({ error: { message: e.message } })
    })
}