import { Router } from 'express'

import { authenticated } from './userFunctions.js'
import { AreaModel } from '../models/AreaModel.js'

// Create a new instance of Router object:
const router = Router()

router.get('/', async (req, res) => {
        const areas = await AreaModel.find()
        res.send( areas )
    }
)



export default router