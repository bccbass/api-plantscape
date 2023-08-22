import mongoose from 'mongoose'
import spaceSchema from './space.js'
import areaSchema from './area.js'
import plantSchema from './plant.js'

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  spaces: [spaceSchema [areaSchema]],
  plants: [plantSchema]
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel