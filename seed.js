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
            // "AN ARRAY OF PLANTS FROM OUR OWN PLANT SCHEMA THAT HAS THE API ID REFERENCE AND OPTIONAL USER NOTES"
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
    allPlants: []
  },
  {
    name: {
      first: "Josh",
      last: "Davis"
    },
    email: "josh@gmail.com",
    password: "josh123",
    spaces: [{
      name: "Front Yard",
      isOutdoor: true,
      isIndoor: false,
      notes: "The front of my house is east facing. It receives strong sunlight in the morning.",
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
    allPlants: []
  },
  {
    name: {
      first: "Kal",
      last: "Fung"
    },
    email: "kal@gmail.com",
    password: "kal123",
    spaces: [{
      name: "Front Yard",
      isOutdoor: true,
      isIndoor: false,
      notes: "The front of my house is east facing. It receives strong sunlight in the morning.",
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
          notes: "",
          plants: []
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
          notes: "",
          plants: []
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
          notes: "",
          plants: []
        }]
    }],
    allPlants: []
  }
]

await UserModel.deleteMany()
console.log("Deleted users")
const users = await UserModel.insertMany(usersSeed)
console.log("Inserted users")





dbClose()