# Note-Taker-BckEnd
This application was a homework assignment for the 2020 Richmond University Web Development Bootcamp. Trilogy Education Services wrote a front end application that allows a user to write notes on a page. My job was to write the backend so that the user could save and delete notes.

## Dependencies and Installation

To open the app on your local machine:
This application is dependent on the node express module.
To install, clone the repository at
https://github.com/GormTheWyrm/Note-Taker-BckEnd
Open the repository root folder in node terminal and run  
"node server.js"  
This will start the server. Next open a web browser and navigate to http://localhost:8080/ and click on "get started".

Alternatively, open the deployed app at https://note-taker-backend.herokuapp.com/
Click the "get started".  


From there users can write a note. Once the user types something in both the title and note body the note can be saved by clicking the save icon in the top right corner of the page. Notes need to have a title and text in the body in order to be saved. If either field lacks text the save icon will not appear.  
Saved notes appear along the left side of the screen and can be deleted by clicking the red trash can icon.  

Added notes should appear automatically once saved. However, the page needs to be manually refreshed for deleted notes to visibly refresh. 


## current bugs

Hitting the delete button multiple times will cause the notes below the targeted note to be deleted.  
*This is a current known bug.*  
