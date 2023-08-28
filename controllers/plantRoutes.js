import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();

// IMPORT NEEDED MODELS

// Create a new instance of Router object:
const router = Router();

router.get("/", async (req, res) => {
  const query = req.query.q;
  const plantIds = req.body;
  try {
    if (query) {
      await fetch(
        `https://perenual.com/api/species-list?page=1&key=${process.env.PERENUAL_KEY}&q=${query}`
      )
        .then((data) => data.json())
        .then((results) => res.status(200).json(results.data));
    } else if (plantIds.length) {
      plantIds.map(async (plantId) => {
        await fetch(
          `https://perenual.com/api/species/details/${plantId}?key=${process.env.PERENUAL_KEY}`
        )
          .then((data) => data.json())
          .then((results) => {
            console.log(results);
            res.status(200).json(results.data);
          })
      });
    } else (res.status(200).json({Error: "No queries supplied"}))
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
export default router;
