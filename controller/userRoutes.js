import { Router } from 'express'
import { authenticated } from './userFunctions.js'

// import { user } from ''

// Create a new instance of Router object:
const router = Router()

router.post('/register', async (req, res) => {
        try {
            // Check if user already exists in the database
            const existingUser = await User.findOne({ email: user.email })
            // Short circuit logic: If user already exists return error message
            existingUser && res.status(400).send({error: 'User already exists'})
            // If not hash the user password with 10 rounds of salt and set user object to hased pw
            const hash = await bcrypt.hash(user.password, 10)
            user = {
                name: req.body.name,
                email: req.body.email, 
                password : hash
            }
            // create new Mongoose user document
            const newUser = await UserModel.create(user)
            res.json(201, newUser)
            }
        catch (err) { res.status(500).send({err: err.message})}
    }
)

router.post('/login', async (req, res) => {
        // Attempt to locate user in the database
        const storedUser = await UserModel.find(email = req.body.email)
        // If not found return error message
        if (!storedUser) { 
                res.send({error: 'Invalid username or password'})
            } else {
                const isValidPassword = await bcrypt.compare(req.body.password, storedUser.password)
                if (isValidPassword) { 
                    // STORED USER ID MAY NEED TO BE OBJECT...
                    // Create new JWT token
                    const token = jwt.sign({id: storedUser.id}, process.env.JWT_SECRET, {expiresIn: '7 days'})
                    res.json({id: storedUser.id, token})
                    } else {
                        res.status(401).json({error: "Invalid username or password"})
                    }
            }
    }
)



    // SHOULD THIS ROUTE USE :ID OR ACCESS JWT TOKEN IN LOCALSTORAGE?
router.get('/:id', authenticated, async (req, res) => {
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


