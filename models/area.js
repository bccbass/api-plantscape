import mongoose from 'mongoose'
// Remember imports

const areaSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  notes: String,
  plants: [{
    type: Schema.Types.ObjectId,
    ref: "Plant",
    notes: String
  }]
})

const AreaModel = mongoose.model('Area', areaSchema)

export default AreaModel