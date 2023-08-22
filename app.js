
import express from 'express'
import cors from 'cors'
// IMPORT MODELS:
// import { UserModel } from 'path'
// Import Routes
// import userRoutes from './controller/userRoutes.js'
// import spaceRoutes from './controller/spaceRoutes.js'
// import areaRoutes from './controller/areaRoutes.js'

// Instantiate express instance
const app = express()

// Initial middleware setup:
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes:
app.get('/', (req, res) => {
    res.json({ info: 'Plantscape Index' })
})

// app.use('/users', userRoutes)
// app.use('/spaces', spaceRoutes)
// app.use('/areas', areaRoutes)





// Export Express instance:
export default app