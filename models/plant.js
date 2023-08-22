import mongoose from 'mongoose'
// Remember imports

const plantSchema = new Schema({
  name: {
    common: { type: String, required: true },
    scientific: String
  },
  description: String,
  light: {
    type: String,
    enum: ['Shade', 'Partial shade', 'Full sun']
  },
  care: String
})

const PlantModel = mongoose.model('Plant', plantSchema)

export default PlantModel