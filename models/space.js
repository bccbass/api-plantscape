import mongoose from 'mongoose'
// Remember imports

const spaceSchema = new Schema({
  name: { type: String, required: true, unique: true },
  isOutdoor: Boolean,
  isIndoor: Boolean,
  notes: String,
  areas: [areaSchema]
})

// Is it okay if we leave image uploads as a stretch feature?

const SpaceModel = mongoose.model('Space', spaceSchema)

export default SpaceModel