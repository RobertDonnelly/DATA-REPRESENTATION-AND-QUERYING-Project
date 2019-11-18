const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongoDB= 'mongodb+srv://admin:admin@lab8-0kmcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title:String,
    artist:String,
    year:String,
    genre:String,
    cover:String,
    publisher:String
})

const AlbumModel = mongoose.model('album', albumSchema);

app.get('/api/albums',(req,res)=>{

    AlbumModel.find((error,data)=>{
        res.json({albums:data});
    })
})

app.post('/api/albums',(req,res)=>{
    console.log('Movie recieved');
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.artist);
    console.log(req.body.year);
    console.log(req.body.genre);
    console.log(req.body.cover);
    console.log(req.body.publisher);

    AlbumModel.create({
        title:req.body.title,
        artist:req.body.artist,
        year:req.body.year,
        genre:req.body.genre,
        cover:req.body.cover,
        publisher:req.body.publisher
    });

    
})

app.put('/api/albums/:id',(req,res)=>{
    console.log("edit: "+req.params.id);

    AlbumModel.findByIdAndUpdate(req.params.id, 
        req.body, 
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})

app.delete('/api/albums/:id',(req,res)=>{
    console.log(req.params.id);
    AlbumModel.deleteOne({_id:req.params.id},(error,data)=>{
        if(error)
            res.json(error);
        res.json(data);
    })
})

app.get('/api/albums/:id',(req,res)=>{
    console.log(req.params.id);
    AlbumModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))