import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
import { authenticated } from "./userFunctions.js";

// IMPORT NEEDED MODELS

// Create a new instance of Router object:
const router = Router();

const getPlantData = async (plantId) => {
  const apiURL = `https://perenual.com/api/species/details/${plantId}?key=${process.env.PERENUAL_KEY}`
  console.log('apiURL:', apiURL)
    const data = await fetch(apiURL)
    const results = await data.json()
    return results;
};

// POST ROUTE TO PLANTS TO FETCH LIST OF PLANT IDS FROM USER.PLANTS
router.post("/", authenticated, async (req, res) => {
  console.log('edit from 3:55')

  const plantIds = req.body
  console.log('plantIds:', plantIds, "length:", plantIds.length)
  try {
    if (plantIds.length) {
      const plantPromiseList = [];
      plantIds.map(async (plantId) => {
       plantPromiseList.push( getPlantData(plantId));
      });
      await Promise.all(plantPromiseList).then((plantList) =>{
        console.log('plantList:', plantList)
        res.status(200).json(plantList)
        }
      );
    } else res.status(200).json({ Error: "No queries supplied" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET ROUTE TO PLANTS TO HANDLE USER QUERIES FOR PLANTS
router.get("/", authenticated, async (req, res) => {
  const query = req.query.q;
  try {
    if (query) {
      await fetch(
        `https://perenual.com/api/species-list?page=1&key=${process.env.PERENUAL_KEY}&q=${query}`
      )
        .then((data) => data.json())
        .then((results) => res.status(200).json(results.data));
    } else res.status(200).json({ Error: "No queries supplied" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
export default router;
