# Note-Taker-BckEnd


## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.
The App can be connected to via 

"... " UPDATE WITH HEROKU LOCATION!!!

* The following HTML routes exist:
- GET "/notes" - returns notes.html file
- GET "*" - returns index.html file
- GET "/api/notes" - returns note data via JSON ()
+ clicking the Save Icon with text inside the "Test Title" Note's Header and text area will POST the new note the db.json file, effectively saving that data. The data will then be visible form the "/notes" url page.
+ clicking the Delete Icon will DELETE the relevant note and update the db.json file. Deletion is based on an id which is generated each time a note is saved or deleted.




## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.





## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository

## current bugs

Notes not dissappearing after being deleted. Deletion works but page is not refreshed or redirected so user does not see it.

do not understand what they want with a "*" route. App goes to the homepage without a "/" route and "*" route just breaks it
... so I left "*" route commented out
what to google for the "*" route?
