import mongoose from 'mongoose'

const plantSchema = new mongoose.Schema({
  apiId: Number,
  species_id: Number,
  commonName: String,
  scientificName: String,
  care: Array,
  imgUrl: String
})

const PlantModel = mongoose.model('Plant', plantSchema)

export { plantSchema, PlantModel }