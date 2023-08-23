import mongoose from 'mongoose'

const areaPlantSchema = {
        plant: {
            type: mongoose.ObjectId,
            ref: 'Plant',
            unique: false
       },
       userImg: String,
       notes: String
}

const AreaPlantModel = mongoose.model('AreaPlant', areaPlantSchema)

export { areaPlantSchema, AreaPlantModel }