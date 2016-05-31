// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var newBook = {description: "Book recommendation."}

db.Books.create(newBook, function(err, book){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new book listing.", book._id)
  process.exit(); // we're all done! Exit the program.
})
