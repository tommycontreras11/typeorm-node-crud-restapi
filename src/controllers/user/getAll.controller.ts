import { Request, Response } from 'express'
import { getAllUserService } from '../../services/user/getAll.service'

export const getAllUserController = async(_req: Request, res: Response) => {
    getAllUserService({
        cache: true,
        relations: { userInfo: true }
    }).then(users => {
        const data = users.map(user => ({
            username: user.userName,
            fullName: `${user.firstName} ${user.lastName}`,
            address: user.userInfo.address,
            gender: user.userInfo.gender,
            age: (new Date().getFullYear() - new Date(user.userInfo.birthDate).getFullYear())
        }))

        res.json(data)
    }).catch(e => {
        res.status(500).json({ error: { message: e.message } })
    })
}