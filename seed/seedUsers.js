import { UserModel } from '../models/UserModel.js'
import { userData } from './userData.js'
import { dbClose } from '../db.js'

// Big question is what is in the 'plants' array? List of ids from the API or our own plant madel? 
// potential plant schema:
// const plantSchema = new mongoose.Schema({
//   APIreference: plant api Id,
//   notes: a way to keep notes for each plant in reference to their areas.
//   areas: [if standalone, plants could have array of areas in which theyre located. Otherwise we nest a plant object in a plants array in area]
// })




await UserModel.deleteMany()
console.log("Deleted users")
const users = await UserModel.insertMany(userData)
console.log("Inserted users")





dbClose()