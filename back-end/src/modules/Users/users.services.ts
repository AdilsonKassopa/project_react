import { createUsers, IUsersRepository } from "./Repositories/IUsers.Repository";


class UserService{
    constructor(private usersRepository:IUsersRepository){}
    async execute(data:createUsers){
            const userEmail = await this.usersRepository.getUserEmail(data.Email)

            if(userEmail)
                throw new Error("Usuario ja existe")

            const user = this.usersRepository.save(data)

            return user
    }
    async getUsers(){
        
            const user = await this.usersRepository.getUsers()

            if(!user)
                throw new Error("Não existe Usuarios Cadastrados")

            return user
        
    }
    async userDelete(id:string){
        const users = await this.usersRepository.deleteUser(id)
        if(!users)
            throw new Error("User not was deleted!")
        return users
    }
}

export {UserService}