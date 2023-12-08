import { Router } from 'express'
import { getAllUserController } from '../../../controllers/user'

const router = Router()

router.get("/", getAllUserController)

export default router