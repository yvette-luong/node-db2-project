const express = require('express')
const helmet = require('helmet') //provides security default
const server = express()
const carRouter = require("./data/router")
const database = require("./data/knexconnection")

server.use(helmet()); 
server.use(express.json()); //middleware 
server.use("/cars", carRouter);

server.get('/', (req, res) => {
    res.status(200).json({ greeting : " Node DATABASE SCHEMA DESIGN project!"})
})
server.get("/cars/:id", (req, res ) => {
    res.status(200).json({greeting:" Testing for database schema"})
}) 

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`***---API running on port ${PORT} - SERVER IS RUNNING---***`))

