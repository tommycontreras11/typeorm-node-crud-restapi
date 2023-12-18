import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUserController,
  getOneUserController,
  updateUserController,
} from "../../../controllers/user";

const router = Router();

router.get("/", getAllUserController);
router.get("/:uuid", getOneUserController);
router.post("/", createUserController);
router.patch("/:uuid", updateUserController);
router.delete("/:uuid", deleteUserController);

export default router;
