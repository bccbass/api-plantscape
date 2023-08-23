import { PlantModel } from "../models/PlantModel.js"


const plants = await PlantModel.find()

const plantObjIds = plants.map(el => el._id)



const fiveRandomPlants = (plants) => {
return Array.from(new Array(5), (el) => {
  const randInt = Math.floor(Math.random() * plants.length)
  return {
    plant: plants[randInt],
    userImg: 'Placeholder',
    notes: 'Write notes here...'
  }
} )
}

// console.log(fiveRandomPlants(plants))




const userData = [
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
              plants: fiveRandomPlants(plants)
          }
        ]
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
              plants: fiveRandomPlants(plants)
            },
            {
              name: "Letterbox Garden",
              notes: "",
              plants: fiveRandomPlants(plants)
            },
            {
              name: "Balcony",
              notes: "",
              plants: fiveRandomPlants(plants)
            },
            {
              name: "Boundary Hedge",
              notes: "",
              plants: fiveRandomPlants(plants)
            },
            {
              name: "Vegetable Garden",
              notes: "",
              plants: fiveRandomPlants(plants)
            }
          ]
        }
      ],
    
       plants: plantObjIds
    
  },
    {
      name: {
        first: "Kal",
        last: "Fung"
      },
      email: "kal@gmail.com",
      password: "kal123",
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
            plants: fiveRandomPlants(plants)
        }
      ]
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
            plants: fiveRandomPlants(plants)
          },
          {
            name: "Letterbox Garden",
            notes: "",
            plants: fiveRandomPlants(plants)
          },
          {
            name: "Balcony",
            notes: "",
            plants: fiveRandomPlants(plants)
          },
          {
            name: "Boundary Hedge",
            notes: "",
            plants: fiveRandomPlants(plants)
          },
          {
            name: "Vegetable Garden",
            notes: "",
            plants: fiveRandomPlants(plants)
          }
        ]
      }
    ],
  
     plants: plantObjIds
  
    
  },
    {
      name: {
        first: "Josh",
        last: "Davis"
      },
      email: "josh@gmail.com",
      password: "josh123",
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
            plants: fiveRandomPlants(plants)
        }
      ]
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
            plants: fiveRandomPlants(plants)
          },
          {
            name: "Letterbox Garden",
            notes: "",
            plants: fiveRandomPlants(plants)
          },
          {
            name: "Balcony",
            notes: "",
            plants: fiveRandomPlants(plants)
          },
          {
            name: "Boundary Hedge",
            notes: "",
            plants: fiveRandomPlants(plants)
          },
          {
            name: "Vegetable Garden",
            notes: "",
            plants: fiveRandomPlants(plants)
          }
        ]
      }
    ],
  
     plants: plantObjIds
  
    
  }
   
  ]

  export { userData}