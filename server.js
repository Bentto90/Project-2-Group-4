const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/api');
const compression = require('compression');
const hbs = exphbs.create({ });
const movieDetail = require('./controllers/movieDetail.js');
const searchController = require('./controllers/search.js');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const Review = require("./models/Review");

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

app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use('/', movieDetail);
app.use('/', searchController)
app.use(routes);
  
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('http://localhost:' + PORT));
});

function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
  };


  app.get("/reviews", (req, res)=>{
    Review.findAll() //need to get all reviews


    res.render("reviews",{
        allreviews: [
            {
                id: 1,
                name: "somethign"
            }
        ]
    })
  })

  app.post("/api/reviews", async (req, res)=>{
    //req.body.rating
    //req.body.content
    console.log(req.body)
    try{
        const result = await Review.create({
            rating: parseInt(req.body.rating), //parseInt converts str to number
            content: req.body.content
            
        })

        console.log("result", result)

        /* res.json({
            data: result
        }) */
        res.redirect("/reviews.handlebars")
    } catch (e){
        console.log("error", e)
    }
  })
