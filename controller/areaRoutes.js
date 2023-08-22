import { Router } from 'express'
import bcrypt from 'bcrypt'
// import { user } from ''

// Create a new instance of Router object:
const router = Router()

router.post('/register', async (req, res) => {
        try {const newUser = req.body
        // SOME LOGIC TO SALT/HASH STORE PASSWORD 
        const newEntry = await UserModel.create(newUser)
        res.json(201, newEntry)}
        catch (err) { res.status(500).send({err: err.message})}
    }

)

router.post('/login', async (req, res) => {
        try {
        const user = req.body
        // SOME LOGIC TO SALT/HASH STORE PASSWORD 
        const storedUser = await UserModel.find(email = req.body.email)
        if (storedUser) {
        // SOME LOGIC TO COMPARE PASSORD 

        // RETURN WEBTOKEN? STORE WEBTOKEN IN DB/LOCALSTORAGE?
        }
        else {res.status(400).send({error: 'No user associated with that email address'})}
        res.json(201, )}
        catch (err) { res.status(500).send({err: err.message})}
    }
)

// SHOULD THIS ROUTE USE :ID OR ACCESS JWT TOKEN IN LOCALSTORAGE?
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const storedUser = await UserModel.findById(id)
        storedUser ? res.status(200).json(storedUser) : res.status(404).send({error: 'User not found'})
        }
    catch (err) { res.status(500).send({err: err})}
    }
)
// ADD ROUTE FOR PASSWORD RESET/UPDATE
// ADD ROUTE TO UPDATE USER INFO?  
// ADD ROUTE TO DELETE USER?   


