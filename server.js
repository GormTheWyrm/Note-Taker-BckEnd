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
// could put something here to app.use and pull in route files... If I restructure my folders






/*    ~~~~~~~~~~~~~~~~ API ROUTES~~~~~~~~~~~~~~~~~~~~~~~ */
// GETS INFO FOR API
app.get("/api/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"));
  //catch errors... needs implementation
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
  }); //end readfile


  res.redirect("/notes");


}); //end post function

app.delete("/api/notes/:id", function (req, res) {
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
    }); //end writefile
  }); //end readfile

  /*
  BUG
 req.method = "GET";
 res.redirect("/notes");
 https://stackoverflow.com/questions/24750169/expressjs-res-redirect-after-delete-request
 https://expressjs.com/en/4x/api.html#res.redirect
 looks like redirect is not yet implemented for delete method...
 maybe the next() function will help somehow?

 */
}); //end delete


/*    ~~~~~~~~~~~~~~~~HTML ROUTES~~~~~~~~~~~~~~~~~~ */

// notes page...
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("*", function (req, res){
res.sendFile(path.join(__dirname, "./public/index.html"));
});




//makes server listen - put at bottom
app.listen(PORT, function () {
  console.log("Server is a go on port " + PORT);
});


//current bugs
/*
Notes not dissappearing after being deleted. Deletion works but page is not refreshed or redirected so user does not see it.

do not understand what they want with a "*" route. App goes to the homepage without a "/" route and "*" route just breaks it
... so I left "*" route commented out
what to google for the "*" route?
https://expressjs.com/en/guide/routing.html

needs some errorhandling/catching

check my delete function. I am not sure if I am using :id right... or at all
*/