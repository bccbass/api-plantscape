import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(process.env.ATLAS_DB_URL)
  .then(m => console.log(m.connection.readyState == 1 ? 'Mongoose connected!' : 'Mongoose failed to connect.'))
  .catch(err => console.log(err))