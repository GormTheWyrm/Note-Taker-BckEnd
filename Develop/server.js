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
// app.get("/", function (req, res){
// res.sendFile(path.join(__dirname, "/public/index.html"));
// });
//anything not /"routegoeshere" will go to /* ...allegedly. But adding the code just reaks it
// "*" does not make sense. It already goes to the home page without even a "/" route

// notes page...
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});




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


  fs.readFile("./db/db.json", "utf8", function (err, data) {
    // console.log(data);
    // console.log(data[0]);
    let oldNote = JSON.parse(data);
    let newNote = req.body; //these are both objects now
    // newNote.id = oldNote.length + 1;
    oldNote.push(newNote);
    for (i = 1; i < oldNote.length; i++) {
      //not doing this in above for loop because afraid that splicing will mess up id numbering
      oldNote[i].id = i;  //purposefully excluding the first note in this array so user has somehting to write in
    }

    updatedData = JSON.stringify(oldNote);
    fs.writeFile("./db/db.json", updatedData, function (err, data) {
      console.log("New Note saved to db.json");
    });
  });

  //note not appearing on html until refreshes...
  //can I fix this from here? redirect to the notes page perhaps?

});

app.delete("/api/notes/:id", function (req, res) {
  // console.log("test");
  //test worked
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    let oldNote = JSON.parse(data);
    const targetId = parseInt(req.params.id);

    for (i = 1; i < oldNote.length; i++) {
      oldNote[i]
      if (oldNote[i].id === targetId) { //removes target note
        oldNote.splice(i, 1);
        break;
      }
    }
    for (i = 1; i < oldNote.length; i++) {
      //not doing this in above for loop because afraid that splicing will mess up id numbering
      oldNote[i].id = i;  //purposefully excluding the first note in this array so user has somehting to write in
    }
    //now write to file
    updatedData = JSON.stringify(oldNote);
    fs.writeFile("./db/db.json", updatedData, function (err, data) {
      console.log("Note from db.json"); //need to fix ids!
    });
    // console.log(oldNote[0]);
    // console.log(newNote);

  });

  //looks like first note has no id so should not be deleteable...good
});
/*  this is the broswer JS...
 return $.ajax({
    url: "api/notes/" + id,
    method: "DELETE"
  });
*/


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


//current bugs
//not not appearing on webpage until it refreshes. Can I fix that without touching index.js?
//do not understand what they want with a "*" route. App goes to the homepage without a "/" route and "*" route just breaks it
//... so I left "*"commented out