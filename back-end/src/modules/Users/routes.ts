import { Router } from "express";
import { UsersController } from "./users.controller";
const usersRouter = Router()
const usersController = new UsersController()
usersRouter.post("/", usersController.create)
usersRouter.get("/", usersController.find)
usersRouter.delete("/:id", usersController.delete)

export {usersRouter}