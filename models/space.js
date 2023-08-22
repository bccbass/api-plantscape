import mongoose from 'mongoose'
import areaSchema from './area.js'

const spaceSchema = new Schema({
  name: { type: String, required: true, unique: true },
  isOutdoor: Boolean,
  isIndoor: Boolean,
  notes: String,
  areas: [areaSchema],
  imgUrl: String
})

// Is it okay if we leave image uploads as a stretch feature?

const SpaceModel = mongoose.model('Space', spaceSchema)

export { spaceSchema, SpaceModel }