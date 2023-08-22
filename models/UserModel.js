import mongoose from 'mongoose'
import {spaceSchema} from './SpaceModel.js'
import {areaSchema} from './AreaModel.js'
import {plantSchema} from './PlantModel.js'

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  spaces: [spaceSchema],
  plants: [plantSchema]
})

const UserModel = mongoose.model('User', userSchema)

export {UserModel}