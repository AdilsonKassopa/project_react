import { User } from "@prisma/client"

export type createUsers = {
    Name: string,
    Age: number,
    Email: string
}

export type saveUsers = {
    name: string,
    age: number,
    email: string,
    id:string
}


export interface IUsersRepository{
    save(data:createUsers): Promise<saveUsers >
    getUsers():Promise<User | null>
    getUserEmail(Email:String): Promise<User | null>
    deleteUser(id:string): Promise<saveUsers | null>
}

