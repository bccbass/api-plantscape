import mongoose from 'mongoose'
// Remember imports

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  spaces: [spaceSchema [areaSchema]],
  plants: [plantSchema]
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel