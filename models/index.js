var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/GA/Week4/personal-api");

// module.exports.Campsite = require("./campsite.js.example");
