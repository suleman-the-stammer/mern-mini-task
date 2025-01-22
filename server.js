import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectdb from './config/db.js'

const app = express();

dotenv.config()

// DB 
connectdb();


//middleWare
app.use(cors())
app.use(express.json())
const port = process.env.PORT;

import router from './routes/userRoutes.js'
import blogrouter from './routes/blogRoutes.js'

//routes
app.use('/api/v1/user', router)
app.use('/api/v1/blog', blogrouter)


app.listen(port, () => {
    console.log(`Server is Listen in ${process.env.Dev_Mode} on port ${port}`)
})