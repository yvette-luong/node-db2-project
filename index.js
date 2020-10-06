const express = require('express')
const helmet = require('helmet') //provides security default
const server = express()

server.use(helmet()); 
server.use(express.json()); //middleware 

server.get('/', (req, res) => {
    res.status(200).json({ greeting : " Node DATABASE SCHEMA DESIGN project!"})
})

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`***---API running on port ${PORT} - SERVER IS RUNNING---***`))