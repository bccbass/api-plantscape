import mongoose from 'mongoose'
import { UserModel } from '../models/UserModel.js'
import { userData } from './userData.js'
import { dbClose } from '../db.js'

await UserModel.deleteMany()
console.log("Deleted users")
const users = await UserModel.insertMany(userData)
// const users = await UserModel.create(userData[0])
console.log("Inserted users")

dbClose()