import { PlantModel } from '../models/PlantModel.js'
import { dbClose } from '../db.js'
import { plantSeeds } from './plantData.js'


await PlantModel.deleteMany()
console.log("Deleted plants")

const addPlant = async(plant) => {
    const parsedPlant = {
        apiId: plant.id,
        species_id: plant.species_id,
        commonName: plant.common_name,
        scientificName: plant.scientific_name[0],
        care: plant.section
    }
    const plantEntry = await PlantModel.create(parsedPlant)
}

const addAllSeeds = async (plantSeeds) => {
    for (const plant of plantSeeds){
    await  addPlant(plant)
    }
}
await addAllSeeds(plantSeeds ) 
console.log("Inserted plants")

export { addPlant}

dbClose()