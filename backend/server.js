import express from 'express'
import dotenv from 'dotenv'
// if you are bringing file change the extension to js

dotenv.config()

const app = express()


app.get('/', (req, res) => {
    res.send('API is running...')
})


const PORT = process.env.PORT || 5000


app.listen(
    PORT, console.log
    (`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
) 