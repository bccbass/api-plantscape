import mongoose from 'mongoose'

const plantSchema = new mongoose.Schema({
  // name: {
  //   common: { type: String, required: true },
  //   scientific: String
  // },
  // description: String,
  // light: {
  //   type: String,
  //   enum: ['Shade', 'Partial shade', 'Full sun']
  // },
  // care: String
  APIRef: String,
  notes: String
})

const PlantModel = mongoose.model('Plant', plantSchema)

export { plantSchema, PlantModel }