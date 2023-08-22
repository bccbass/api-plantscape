import UserModel from './models/user.js'

const userSeed = [
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
const users = await UserModel.insertMany(userSeed)
console.log("Inserted users")