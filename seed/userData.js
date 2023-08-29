import bcrypt from 'bcrypt'


const plants = Array.from(new Array(3), (el) => {
  const randInt = Math.floor(Math.random() * 500)
    return el = randInt
  }
)





const fiveRandomPlants = (plants) => {
  return Array.from(new Array(2), (el) => {
    const randInt = Math.floor(Math.random() * plants.length)
    return {
      plantId: plants[randInt],
      userImg: 'Placeholder',
      notes: 'Write notes here...'
    }
  } )
  }




const userData = [
    {
      firstName: "Ben",
      lastName: "Campbell",
      email: "b@b.com",
      password: await bcrypt.hash('b', 10),
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
    
       plants: plants
    
  },
    {
      firstName: "Kal",
      lastName: "Fung",
      email: "kal@gmail.com",
      password: await bcrypt.hash('kal123', 10),
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
  
     plants: plants
  
    
  },
    {
      firstName: "Josh",
      lastName: "Davis",
      email: "josh@gmail.com",
      password: await bcrypt.hash('josh123', 10),
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
  
     plants: plants
  
    
  }
   
  ]

  export { userData}