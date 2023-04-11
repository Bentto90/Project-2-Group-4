const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const compression = require('compression');
const fetch = require('node-fetch');
const API_KEY = 'ecc5cf85b814d6c344fc7df8d9448690';
const hbs = exphbs.create({ });

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exhbs.create({ helpers });

// Set up sessions with cookies
// defining a session object using the session() method
const sess = {
    // secret is a string that is used to sign the session ID cookie
    secret: 'Super secret secret',
    // cookie is an object that contains the cookie settings
    cookie: {},
    // resave: false means that the session will not be resaved if nothing has changed
    resave: false,
    // A boolean that determines whether or not to save an unmodified session to the store
    saveUninitialized: true,
    // a custom session store implemenation that uses Sequelize ORM to persist session data to a database.
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

app.use(routes);

// GET /horror movies 
app.get('/horror-movies', async (req, res) => {
    const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&with_genre=27`
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results.map((movie) => {
      return {
        title: movie.title,
        release_date: movie.release_date,
        detail: movie.overview,
        image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        watch_provider: `https://api.themoviedb.org/3/watch/providers/regions?api_key=${API_KEY}&language=en-US`
      }
        
    });
    
    res.render('horror-movies', { movies });
})
  

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('http://localhost:' + PORT));
});