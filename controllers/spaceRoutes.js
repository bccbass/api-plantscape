import { Router } from 'express'
import { authenticated } from './userFunctions.js'
import { SpaceModel } from '../models/SpaceModel.js'

// Create a new instance of Router object:
const router = Router()

router.get('/', async (req, res) => {
        const spaces = await SpaceModel.find()
        res.send( spaces )
    }
)

export default router