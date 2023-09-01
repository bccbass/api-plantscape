import mongoose from 'mongoose'

const areaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  notes: String,
  plants: [Number]
})


const AreaModel = mongoose.model('Area', areaSchema)

export { areaSchema, AreaModel }