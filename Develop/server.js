// read this https://expressjs.com/en/guide/routing.html

//dependencies
const fs = require("fs");
const express = require("express");
const path = require("path"); 
let app = express();
const PORT = process.env.PORT || 8080;

//does a thing to make stuff good
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
//use this if css not working...

//makes server listen
app.listen(PORT, function(){
console.log("Server is a go on port " + PORT);
});


//  ***************************
// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {
  // Capture the url the request is made to
  let path = req.url;
  // Depending on the URL, display a different HTML file.
  switch (path) {
  case "/":
    return displayHome(res);
  case "/notes":
    return displaynotes(res);
  default:
    return display404(path, res);
  }
}
//this is wrong, ask about how to make this catch various
//should I be making each app.get into a function? 
//also ask about switch
// ************

// home page
function displayHome(res){}
app.get("/", function (req, res){
res.sendFile(path.join(__dirname, "/public/index.html"));

});
// notes page...
app.get("/notes", function(req, res){
res.sendFile(path.join(__dirname, "/public/notes.html"));
//check this
});
// should set up a path so that accidents bring it back to home...
app.get("/api/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/db/db.json"));
    });
// write function to post to api/notes... adding info to db.json...
    //need to create an id for each note...
    //...perhaps create a span in the html file? no...
    //notes will be saved in the db.json file...
    //so each note will be an object with a name, text and id field saved as json...
    // so convert to json...after creating object... hmm...

//Questions
//use "/*" as path for returning index.html?
//ask about path module- why use it? it seemsto just be an extra word and comma?

    /*

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.
* The following API routes should be created:
  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  *POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, 
  and then return the new note to the client.
  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
  This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, 
  you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the 
  notes to the `db.json` file.


*/