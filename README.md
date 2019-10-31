### **CHZBRG**
#### *CHZBGR is a restaurant app that lets users input the names of burgers they'd like to eat.*

##### PROBLEM/SOLUTION
This app is pretty pointless. The backend is where it is impressive.

##### CHZBGR Overview
* server.js (Sets up our app to use express and to listen at a port.)
* package.json
* package-lock.json
* config
  * connection.js (Establishes a connection to mysql database.)
  * orm.js (Object Relational Mapping javascript)
  * keys.js (Username/password for mysql)
* controllers
  * burgers_controller.js (Routes our functionality)
* database
  * schema.sql (Database layout)
  * seed.sql (Data that goes into the database)
* models
  *burger.js (Passes our data to the ORM)
* public
  * assets
    * css
      * style.css (Main stylesheet.)
      * animate.css (Animation stylesheet.)
      * reset.css (Resets any style that the browser might have preloaded.)
    * img (All images used in project.)
    * js
      * app.js (Runs the click functionality of the app.)
* views
  * index.handlebars (Dynamically holds html for use in the main file.)
  * layouts
    * main.handlebars (The layout that our index.handlebars references.)

##### Instructions to Run the App
* Hosted on Heroku here: https://evil-ghoul-08418.herokuapp.com/

* OR clone the file from github. (https://github.com/emmastotz/chzbgr)
* Install all dependencies needed to run the program ("npm install").
* Run the applications using node in the command line ("node server.js") and open up browser with correct port to see the magic.

##### Technologies Used
* CSS3
* Animate
* Bootstrap 4
* JavaScript
* Node
* NPMs: Express, Handlebars, dotenv
* MySQL

This app was created entirely by Emma Stotz