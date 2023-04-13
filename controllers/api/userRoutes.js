const router = require('express').Router();
const { User } = require('../../models');

// router.get("/", (req, res) => {
//   // Access our User model and run .findAll() method
//   // .findAll() queries all users from user table, equiv to SELECT*FROM users;
//   // returns an array of data
//   User.findAll({
//     attributes: { exclude: ["password"] },
//   })
//     .then((dbUserData) => res.json(dbUserData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// CREATES a User
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions loggedIn variable as true 
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(userData)
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

//LOGIN
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ 
          where: { 
            email: req.body.email,
          },
        });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again!' });
                return;
        }
        
        const validPassword = await userData.checkPassword(req.body.password);

          if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }
    
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
          
            res
            .status(200)
            .json({ user: userData, message: 'You are now logged in!' });
          });
    
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
  // Destroy session after user logs out 
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
    
module.exports = router;
    
