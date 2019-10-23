const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');

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


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('hello '+req.params.name);
})

app.get('/api/movies',(req,res)=>{
    const myMovies = [
        {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ]
        
    res.status(200).json({
        movies:myMovies,
        message:"operation completed"
})  
})

app.post('/api/movies',(req,res)=>{
    console.log('Movie recieved');
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
})

app.get('/test',(req,res)=>{
    res.sendFile(path.join(__dirname +'/index.html'));
})


app.get('/name',(req,res)=>{

    res.send('Get was Successful '+req.query.firstname+' '+req.query.lastname);
})

app.post('/name',(req,res)=>{
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    res.send('Post was Successful '+req.body.firstname+' '+req.body.lastname);
})

app.get('/whatever',(req,res)=> { 
    res.send('welcome to whatever');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))