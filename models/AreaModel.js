import mongoose from 'mongoose'
import {plantSchema} from './PlantModel.js'

const areaSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  notes: String,
  plants: [plantSchema]
})

// plants: [{
//   type: Schema.Types.ObjectId,
//   ref: "Plant",
//   notes: String,
//   imgUrl: String
// }]

const AreaModel = mongoose.model('Area', areaSchema)

export { areaSchema, AreaModel }