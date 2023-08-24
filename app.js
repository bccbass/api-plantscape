
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
import userRoutes from './controllers/userRoutes.js'
import plantRoutes from './controllers/plantRoutes.js'

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
app.use('/plants', plantRoutes)






// Export Express instance:
export default app