import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 5001

app.listen(port, () => console.log('listening on port ' + port ))