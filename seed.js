import {UserModel} from './models/UserModel.js'
import {SpaceModel} from './models/SpaceModel.js'
import {AreaModel} from './models/AreaModel.js'

const usersSeed = [
  {
    name: {
      first: "Ben",
      last: "Campbell"
    },
    email: "ben@gmail.com",
    password: "ben123"
  },
  {
    name: {
      first: "Josh",
      last: "Davis"
    },
    email: "josh@gmail.com",
    password: "josh123"
  },
  {
    name: {
      first: "Kal",
      last: "Fung"
    },
    email: "kal@gmail.com",
    password: "kal123"
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
    imgUrl: ""
  },
  {
    name: "Back Yard",
    isOutdoor: true,
    isIndoor: false,
    notes: "The rear of my house is west facing. It receives strong sunlight in the afternoon.",
    imgUrl: ""
  },
  {
    name: "Indoors",
    isOutdoor: false,
    isIndoor: true,
    notes: "Keep an eye out for that pesky fiddle leaf!",
    imgUrl: ""
  }
]

await SpaceModel.deleteMany()
console.log("Deleted spaces")
const spaces = await SpaceModel.insertMany(spacesSeed)
console.log("Inserted spaces")

const areasSeed = [
  {
    name: "Verandah",
    notes: ""
  },
  {
    name: "Letterbox Garden",
    notes: ""
  },
  {
    name: "Balcony",
    notes: ""
  },
  {
    name: "Boundary Hedge",
    notes: ""
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