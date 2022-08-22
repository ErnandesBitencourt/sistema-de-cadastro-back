import express from  "express"
import { UserController } from "./UserController";

export const userRouter = express.Router()
const userController = new UserController()

userRouter.post('/createUser', userController.createUser)
userRouter.put('/edit', userController.editUser)
userRouter.get('/allUsers',userController.allUser)
userRouter.delete('/deleteUser/:id',userController.deleteUsers)