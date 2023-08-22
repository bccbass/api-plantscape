
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
// IMPORT MODELS:
// import { UserModel } from 'path'
// Import Routes
import userRoutes from './controllers/userRoutes.js'
// import spaceRoutes from './controller/spaceRoutes.js'
// import areaRoutes from './controller/areaRoutes.js'

// Instantiate express instance
const app = express()
// Initial middleware setup:
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.ATLAS_DB_URL)
  .then(m => console.log(m.connection.readyState == 1 ? 'Mongoose connected!' : 'Mongoose failed to connect.'))
  .catch(err => console.log(err))

// Routes:
app.get('/', (req, res) => {
    res.json({ info: 'Plantscape Index' })
})

app.use('/users', userRoutes)
// app.use('/spaces', spaceRoutes)
// app.use('/areas', areaRoutes)





// Export Express instance:
export default app