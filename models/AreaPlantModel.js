import mongoose from 'mongoose'

const areaPlantSchema = {
       plantId: Number,
       userImg: String,
       notes: String
}

const AreaPlantModel = mongoose.model('AreaPlant', areaPlantSchema)

export { areaPlantSchema, AreaPlantModel }