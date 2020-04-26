// read this https://expressjs.com/en/guide/routing.html
// look up app.use for express
//consider making a route file
//dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");
let app = express();
const PORT = process.env.PORT || 8080;

//does a thing to make stuff good
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// could put something here to app.use and pull in route files



/*    ~~~~~~~~~~~~~~~~HTML ROUTES~~~~~~~~~~~~~~~~~~ */
// home page  
//fix these with some sort of asterix instead of "/"
// app.get("*", function (req, res){
// res.sendFile(path.join(__dirname, "/public/index.html"));
// });
//anything not /"routegoeshere" will go to /*

// notes page...
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
  //check this
});


// should set up a path so that accidents bring it back to home...
// dont know how to do this with express yet


// write function to post to api/notes... adding info to db.json...
//need to create an id for each note...
//...perhaps create a span in the html file? no...
//notes will be saved in the db.json file...
//so each note will be an object with a name, text and id field saved as json...
// so convert to json...after creating object... hmm...

//someting comes from webpage...
//I need to be able to grab that something
//then I should save that something as an object
//-add an id
//-resave as json
//-write to db.json






/*    ~~~~~~~~~~~~~~~~ END HTML ROUTES~~~~~~~~~~~~~~~~~~ */
/*    ~~~~~~~~~~~~~~~~ API ROUTES~~~~~~~~~~~~~~~~~~~~~~~ */
// GETS INFO FOR API
app.get("/api/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"));
  //catch errors... needs implementation
  //...json file is array?
});
// SAVES NOTE
app.post("/api/notes", function (req, res) {
  // save title, text and id
  let oldNote = [];
  let newNote = {};

  fs.readFile("./db/db.json", "utf8", function(err, data){
    // console.log(data);
    // console.log(data[0]);
    oldNote = JSON.parse(data);
    newNote = req.body; //these are both objects now
    newNote.id = oldNote.length + 1;
    oldNote.push(newNote);
    // console.log(oldNote[0]);
    // console.log(newNote);
    updatedData = JSON.stringify(oldNote);
    fs.writeFile("./db/db.json", updatedData, function(err, data){
      // console.log(updatedData);
    });
  });

  
});

//app.???("/api/notes/:id")


/*
  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
  This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note,
  you'll need to read all notes from the `db.json` file, 
  remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

*/


//Questions
//use "/*" as path for returning index.html?
//ask about path module- why use it? it seemsto just be an extra word and comma?
//posts... any info about them is helpful

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

//need to create:
//edit
//delete
//1. click pencil should update note and change editable text to new text



//makes server listen - put at bottom
app.listen(PORT, function () {
  console.log("Server is a go on port " + PORT);
});