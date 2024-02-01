const express = require('express');
const app = express();
const morgan = require('morgan')



//middleware & static files 
app.use(express.static('public'))
app.use(morgan('dev'))



//Middleware

app.use((req, res, next) => {
    console.log('In the second middleware');
    next();
});

// Routes
app.get('/', (req, res) => {
    const arrayOfEvents = [
        {
          eventName: "Music Festival",
          location: "City Park",
          date: "2022-07-15"
        },
        {
          eventName: "Art Exhibition",
          location: "Art Gallery",
          date: "2022-08-20"
        },
        {
          eventName: "Food Fair",
          location: "Town Square",
          date: "2022-09-10"
        }
      ];
    res.send(books);
});

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
});

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});