import { Router } from 'express'
import dotenv from 'dotenv'
dotenv.config()

// IMPORT NEEDED MODELS



// Create a new instance of Router object:
const router = Router()

router.get('/', async (req, res) => {
    const query = req.query.q
    if (query) {
    try {await fetch(`https://perenual.com/api/species-list?page=1&key=${process.env.PERENUAL_KEY}&q=${query}`)
        .then(data => data.json())
        .then(results => res.status(200).json(results.data))
    } catch (e) {res.status(500).json({error: e.message})}
    }    
})
export default router