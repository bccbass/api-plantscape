import mongoose from 'mongoose'
import {spaceSchema} from './SpaceModel.js'

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  spaces: [spaceSchema],
  plants: [Number]
})

const UserModel = mongoose.model('User', userSchema)

export {UserModel}