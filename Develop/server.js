// read this https://expressjs.com/en/guide/routing.html

//dependencies
const express = require("express");
const path = require("path");
let app = express();
const PORT = 8080;

//does a thing to make stuff good
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//makes server listen
app.listen(PORT, function(){
console.log("Server is a go on port " + PORT);
});

// home page
app.get("/", function (req, res){
res.sendFile(__dirname + "/public/index.html");

});
// notes page...
app.get("/notes", function(req, res){
res.sendFile(__dirname + "/public/notes.html");
//check this
});
// should set up a path so that accidents bring it back to home...
app.get("/api/notes", function(req, res){
    res.sendFile(__dirname + "/db/db.json");
    });
// write function to post to api/notes... adding info to db.json...

/*
* The following HTML routes should be created:
  * GET `/notes` - Should return the `notes.html` file.
  * GET `*` - Should return the `index.html` file
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