import { UserModel } from './models/UserModel.js'
import { SpaceModel } from './models/SpaceModel.js'
import { AreaModel } from './models/AreaModel.js'
import { PlantModel } from './models/PlantModel.js'
import { dbClose } from './db.js'

// Big question is what is in the 'plants' array? List of ids from the API or our own plant madel? 
// potential plant schema:
// const plantSchema = new mongoose.Schema({
//   APIreference: plant api Id,
//   notes: a way to keep notes for each plant in reference to their areas.
//   areas: [if standalone, plants could have array of areas in which theyre located. Otherwise we nest a plant object in a plants array in area]
// })


const usersSeed = [
  {
    name: {
      first: "Ben",
      last: "Campbell"
    },
    email: "ben@gmail.com",
    password: "ben123",
    spaces: [  {
        name: "Front Yard",
        isOutdoor: true,
        isIndoor: false,
        notes: "The front of my house is east facing. It receives strong sunlight in the morning.",
        imgUrl: "",
        areas: [  {
            name: "Verandah",
            notes: "",
            plants: ["AN ARRAY OF PLANTS FROM OUR OWN PLANT SCHEMA THAT HAS THE API ID REFERENCE AND OPTIONAL USER NOTES"]
          },
          {
            name: "Letterbox Garden",
            notes: ""
          },
          {
            name: "Balcony",
            notes: "",
            plants: []
          },
          {
            name: "Boundary Hedge",
            notes: "",
            plants: []
          },
          {
            name: "Vegetable Garden",
            notes: ""
          }]
      },
      {
        name: "Back Yard",
        isOutdoor: true,
        isIndoor: false,
        notes: "The rear of my house is west facing. It receives strong sunlight in the afternoon.",
        imgUrl: "",
        areas: [  {
            name: "Verandah",
            notes: "",
            plants: []
          },
          {
            name: "Letterbox Garden",
            notes: ""
          },
          {
            name: "Balcony",
            notes: "",
            plants: []
          },
          {
            name: "Boundary Hedge",
            notes: "",
            plants: []
          },
          {
            name: "Vegetable Garden",
            notes: ""
          }]
      },
      {
        name: "Indoors",
        isOutdoor: false,
        isIndoor: true,
        notes: "Keep an eye out for that pesky fiddle leaf!",
        imgUrl: "",
        areas: [  {
            name: "Verandah",
            notes: "",
            plants: []
          },
          {
            name: "Letterbox Garden",
            notes: ""
          },
          {
            name: "Balcony",
            notes: "",
            plants: []
          },
          {
            name: "Boundary Hedge",
            notes: "",
            plants: []
          },
          {
            name: "Vegetable Garden",
            notes: ""
          }]
      }],
    plants: ['An array of plant documents fetched from the Perenual API so they are local when the user starts interacting with their assets']
  },
  {
    name: {
      first: "Josh",
      last: "Davis"
    },
    email: "josh@gmail.com",
    password: "josh123",
    spaces: [],
    plants: []
  },
  {
    name: {
      first: "Kal",
      last: "Fung"
    },
    email: "kal@gmail.com",
    password: "kal123",
    spaces: [],
    plants: []
  }
]

await UserModel.deleteMany()
console.log("Deleted users")
const users = await UserModel.insertMany(usersSeed)
console.log("Inserted users")

const spacesSeed = [
  {
    name: "Front Yard",
    isOutdoor: true,
    isIndoor: false,
    notes: "The front of my house is east facing. It receives strong sunlight in the morning.",
    imgUrl: "",
    areas: []
  },
  {
    name: "Back Yard",
    isOutdoor: true,
    isIndoor: false,
    notes: "The rear of my house is west facing. It receives strong sunlight in the afternoon.",
    imgUrl: "",
    areas: []
  },
  {
    name: "Indoors",
    isOutdoor: false,
    isIndoor: true,
    notes: "Keep an eye out for that pesky fiddle leaf!",
    imgUrl: "",
    areas: []
  }
]

await SpaceModel.deleteMany()
console.log("Deleted spaces")
const spaces = await SpaceModel.insertMany(spacesSeed)
console.log("Inserted spaces")

const areasSeed = [
  {
    name: "Verandah",
    notes: "",
    plants: []
  },
  {
    name: "Letterbox Garden",
    notes: ""
  },
  {
    name: "Balcony",
    notes: "",
    plants: []
  },
  {
    name: "Boundary Hedge",
    notes: "",
    plants: []
  },
  {
    name: "Vegetable Garden",
    notes: ""
  }
]

await AreaModel.deleteMany()
console.log("Deleted areas")
const areas = await AreaModel.insertMany(areasSeed)
console.log("Inserted areas")

const plantsSeed = [
  {
    name: {
      common: "European Silver Fir",
      scientific: "Abies alba"
    },
    description: "Amazing garden plant that is sure to capture attention...",
    light: "Partial shade",
    care: "Medium"
  }
]

await PlantModel.deleteMany()
console.log("Deleted plants")
const plants = await PlantModel.insertMany(plantsSeed)
console.log("Inserted plants")

dbClose()