const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 5152;
const path = require('path');
//public static

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);


app.use(express.static(staticPath));


// routing

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/weather', (req, res) => {
    res.render('weather.hbs');
});

app.get('*', (req, res) => {
    res.render('404errorpage.hbs',{
        errorMessage:"OPPS!!! ERROR OCCURED 🤧"
    });
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
