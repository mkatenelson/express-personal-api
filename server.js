// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./book');
var db = require('./controller');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */
 app.get('/api', function api_index(req, res) {
   // TODO: Document all your api endpoints below
   res.json({
     welcome_to_kates_api: true, // changed;)
     message: "Kate's API",
     documentation_url: "https://github.com/mkatenelson/express-personal-api/blob/master/README.md", // changed
     base_url: "https://immense-escarpment-38307.herokuapp.com", // changed
     endpoints: [
       {method: "GET", path: "/api", description: "Describes all available endpoints"},
       {method: "GET", path: "/api/profile", description: "About Kate"}, // changed
       {method: "POST", path: "/api/reading", description: "working reading list"} // changed
     ]
   })
 });

app.get('/api/profile', function profile(req, res) {
  res.json({
    name: "Kate Nelson"
    github_link: "https://github.com/mkatenelson/"
    github_profile_image: "https://avatars2.githubusercontent.com/u/18627187?v=3&s=400"
    current_city: "San Francisco"
    Previous Employment: [{
      company: "Cisco",
      title:"Executive Communication Manager",
      city:"RTP, NC"
    },
    {
      company: "The Channel Company",
      title:"Digital Marketing Coordinator",
      city:"Raleigh, NC"
    }];
  })
});

app.get('/api/reading', function profile(req, res) {
  res.json({
    message: "Future reading list.",
    Reading List: [{
      title: "The Master and Margarita",
      author:"Mikhail Bulgakov"
    },
    {
      title: "Ready Player One",
      author:"Ernest Cline"
    },
  })
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running ont //localhost:3000/');
});

});
