const express = require("express")
const database = require('./knexconnection')

const router = express.Router(); 


// makes a GET request to /api/posts
router.get("/", (req, res) => {
    database.find(req.query)
    .then(posts => {
        res.status(200).json(database);
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            error: "Information could not be retrieved",
        });
    });
}); 

// makes a GET request to /api/posts/:id: 

router.get("/cards/:id", (req, res) => {
    database.findById(req.params.id)
        .then(db => {
            if (db) {
                res.status(200).json(db);
            } else {
                res.status(404).json({ message: "The car with the specified ID does not exist."})
            }        
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json({ error:"The card information could not be retrieved",

            })
        })
})

//makes a POST request to /api/cars:
router.post("/", (req, res) => {
    if(req.body.VIN && req.body.model) {
        database.insert(req.body)
        .then(db => {
            res.status(201).json(db);
    }) 
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                error: "There was an error while saving information to the database",
            });
        });
    } else {
        res.status(400).json({
            errorMessage: "Please provide information want to save."
        })
    }
}); 

module.exports = router;