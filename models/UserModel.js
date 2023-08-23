import mongoose from 'mongoose'
import {spaceSchema} from './SpaceModel.js'
import {plantSchema} from './PlantModel.js'

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  spaces: [spaceSchema],
  plants: [mongoose.ObjectId]
})

const UserModel = mongoose.model('User', userSchema)

export {UserModel}