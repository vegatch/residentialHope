import express from "express"
import cors from "cors"
import AppRoute from '../routes/app-routes.js'

const app = express();
app.use(cors())
app.use(express.json())
app.use(AppRoute)

app.listen(5858, ()=>{
    console.log('Server is running')
})
