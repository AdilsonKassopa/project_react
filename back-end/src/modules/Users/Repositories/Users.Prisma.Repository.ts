import { User} from "@prisma/client";
import { prismaClient } from "../../../database/client";
import { createUsers, IUsersRepository, saveUsers } from "./IUsers.Repository";



class UsersPrismaRepository implements IUsersRepository{
    async deleteUser(id: string): Promise<any> {
        const user = await prismaClient.user.delete(
            {
                where:{
                    id
                }
            }
        )

        return user
    }
    async getUserEmail(Email: string): Promise<User | null> {
        const user = await prismaClient.user.findFirst({
            where:{
                Email,
            }
        }) 
        return user
    }
    async save({Name,Age,Email}: createUsers): Promise<saveUsers> {
        const user = await prismaClient.user.create({
            data:{
                Name,
                Age,
                Email
            }
        })
        const userResult = {
            name : user.Name,
            age: user.Age,
            email: user.Email,
            id: user.id
        }
        return userResult
    }
    async getUsers(): Promise<any  > {
        const user = await prismaClient.user.findMany()
        return user
    }

}

export {UsersPrismaRepository}