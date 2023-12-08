import { Request, Response } from 'express'
import { getAllUserService } from '../../services/user/getAll.service'

export const getAllUserController = async(req: Request, res: Response) => {
    getAllUserService().then(result => {
        res.json({ message: result })
    }).catch(e => {
        res.status(500).json({ error: { message: e.message } })
    })
}