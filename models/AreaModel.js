import mongoose from 'mongoose'
import { areaPlantSchema } from './AreaPlantModel.js'

const areaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  notes: String,
  plants: [areaPlantSchema]
})


const AreaModel = mongoose.model('Area', areaSchema)

export { areaSchema, AreaModel }