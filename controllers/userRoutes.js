import { Router } from 'express'
import bcrypt from 'bcrypt'
import { authenticated } from './userFunctions.js'
import { UserModel } from '../models/UserModel.js'
import jwt from 'jsonwebtoken'

// Create a new instance of Router object:
const router = Router()

router.get("/", async (req, res) => res.send(await UserModel.find().populate()))

router.post('/register', async (req, res) => {
        try {
            // Check if user already exists in the database
            const existingUser = await UserModel.findOne({ email: req.body.email })
            // Short circuit logic: If user already exists return error message
            if (existingUser) { res.status(400).send({error: 'User already exists'})}
            // If not hash the user password with 10 rounds of salt and set user object to hased pw
            else {const hash = await bcrypt.hash(req.body.password, 10)
            const user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email, 
                password : hash}
            
            // create new Mongoose user document
            const newUser = await UserModel.create(user)
             res.status(201).json(newUser)}
            }
        catch (err) { res.status(500).send({err: err.message})}
    }
)

router.post('/login', async (req, res) => {
        // Attempt to locate user in the database
        const storedUser = await UserModel.findOne({email: req.body.email})
        // If not found return error message
        if (!storedUser) { 
                res.send({error: 'Invalid username or password'})
            } else {
                // console.log("req body:", req.body.password, "stored user:", storedUser)
                const isValidPassword = await bcrypt.compare(req.body.password, storedUser.password)
                if (isValidPassword) { 
                    // STORED USER ID MAY NEED TO BE OBJECT...
                    // Create new JWT token
                    const token = jwt.sign({id: storedUser._id}, process.env.JWT_SECRET, {expiresIn: '7 days'})
                    const id = storedUser._id
                     res.status(200).json({id, token})
                    } else {
                        res.status(401).json({error: "Invalid username or password"})
                    }
            }
    }
)


// READ SINGLE USER
router.get('/:id', authenticated, async (req, res) => {
    try {
        const id = req.params.id
        const storedUser = await UserModel.findById(id)
        storedUser ? res.status(200).json(storedUser) : res.status(404).send({error: 'User not found'})
        }
    catch (err) { res.status(500).send({err: err})}
    }
)

// UPDATE USER ROUTE
router.put('/:id', authenticated, async (req, res) => {
    try {
        const id = req.params.id
        const updatedUserInfo = req.body
        if (updatedUserInfo) {
            const updatedUser = await UserModel.findByIdAndUpdate(id, updatedUserInfo, {new: true})
            return res.status(200).json(updatedUser)
        }
        else {res.json({error: "No update data provided"})}
    } catch (err) { res.send({error: err.message})}
}
)
// ADD ROUTE FOR PASSWORD RESET/UPDATE

router.delete("/:id", async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      if (user) {
        res.sendStatus(200)
      } else {
        res.status(404).send({ error: "User not found" })
      }
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  })

export default router