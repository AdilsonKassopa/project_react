import express from "express"
import { usersRouter } from "./modules/Users/routes"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/users",usersRouter)



app.listen(3001, () => console.log("the server is runing in port:3001 "))