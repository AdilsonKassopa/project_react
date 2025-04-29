import { Request, response, Response } from "express";
import { UserService } from "./users.services";
import { UsersPrismaRepository } from "./Repositories/Users.Prisma.Repository";

const userPrismaRepository = new UsersPrismaRepository
const userService = new UserService(userPrismaRepository)

class UsersController{

  async create(request:Request,response:Response){
    try{
        const body = request.body
        

        const userResult = await userService.execute(body)

        response.status(200).json(userResult)

    }catch(err:any){
      response.status(400).json({
        message: err.message
      })
        
    }
  }
  async find(request:Request,response:Response){
    try{
      const findUser = await userService.getUsers()
      console.log(findUser);
      
      response.status(200).json(findUser) 

    }catch(err: any){
      response.status(400).json({
        message: err.message
      })
    }
  }
  async delete(request:Request,response:Response){
    try{
        const {id} = request.params
        const users = await userService.userDelete(id)

        response.status(200).json(users)
    }catch(err:any){
      response.status(400).json({
        message: err.message
      })
    }
  }
}

export {UsersController}