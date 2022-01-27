import express from 'express'
import mongoose from "mongoose"
import Cors from 'cors'
import User from './user_data_schema.js'

var app = express()
var port = process.env.PORT || 8080 

app.use(express.json())
app.use(Cors())


var Connection_url= 'mongodb://sparkar:pmIMkPkEWr1EFweO@cluster0-shard-00-00.zfs2f.mongodb.net:27017,cluster0-shard-00-01.zfs2f.mongodb.net:27017,cluster0-shard-00-02.zfs2f.mongodb.net:27017/UserDb?ssl=true&replicaSet=atlas-10gu1r-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(Connection_url, {
   
   useUnifiedTopology: true
})

app.get("/", function (req, res){
    res.send( "Welcome to Tutorial of REST API using MongoDB, ExpressJS and NodeJS");
})

app.get("/details", function (req, res) {
    
    UserDetails.find((err, data) => {
        if (err) {
            res.status(501).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })

})

app.post("/details", function (req, res) {
    const dbdata = req.body

    UserDetails.create(dbdata, (err, data) => {
        if (err) {
            res.status(501).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.listen(port)