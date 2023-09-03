import mongoose from 'mongoose'
import {areaSchema} from './AreaModel.js'

const spaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  notes: String,
  areas: [areaSchema],
  imgUrl: String
})

const SpaceModel = mongoose.model('Space', spaceSchema)

export { spaceSchema, SpaceModel }