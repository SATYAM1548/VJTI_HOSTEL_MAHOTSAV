if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express =require('express');
const path =require('path');
const mongoose =require('mongoose')
const ejsMate= require('ejs-mate');
const methodOverride =require('method-override')


const app=express();

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

app.all('*', (req, res, next) => {
    res.send("hello")
})

port= 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})