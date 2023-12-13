# react-rent-a-ride

For this project wanted to challenge myself by creating a car rental application. One of the for this project was showing how to work with a one to many relationship. I am showing this association by having a reservation for a vehicle, but the vehicle can have many reservations. 
This file has a separate repo with information corresponding to the Backend: https://github.com/Ambarpg80/Phase3-Project-Rent-A-Ride. For my own ease of use I have both repos in one folder and suggest you do the same. 

# START UP INSTRUCTIONS AND COMMANDS
    * To install all necessary gems run command: `bundle install`
    * To run migrations use the command: `rake db:migrate`
    * To seed the database run the command: `rake db:seed`
    * To run backend run command:  `rake server`. The server will run port 3000 or localhost:3000
    * To run the frontend, cd in to the react-rent-a-ride file and run command `npm start`. The command will run react app on localhost:3001 if 3000 is not available.

# PROJECT INFORMATION AND REQUIREMENTS
For our project we were allowed to fork and clone a repo which had a basic setup. This repo included the following folders & files:
  1. .github folder
  2. app folder with folders for controllers and models
  3. config folder
  4. db folder with a seeds.rb file
  5. spec folder
  6. .canvas file
  7. .gitignore file
  8. .rspec file
  9. config.ru file
  10. CONTRIBUTING.md file
  11. Gemfile 
  12. Gemfile.lock file
  13. LICENSE.md
  14. Rakefile
  15. README.md file

# Steps taken to start the project. 

see separate repo for any additional information on this projects Backend: https://github.com/Ambarpg80/Phase3-Project-Rent-A-Ride

 * Set up the backend database: 
 
  - Add files in the models folders for Vehicles and Reservations. 
  - Add the respective Vehicle and Reservation class to in each file with inheirtance from ActiveRecord::Base library so that I can have access to ActiveRecord methods.
  - Perform a bundle installation of the gems in the Gemfile
  - Create the a migration file for the vehicles table and the reservations table.
  - Migrate the tables.
  - Use the rake console command to go into pry and create one reservation and one vehicle to make sure I could see information manifest onto the tables. 
  - Create a basic seed of one reservation and one vehicle. Once the basic seed was successful, I expanded the amount of items being created.
  - Added the Faker gem to the Gemfile to generate information for rental vehicles. 
  - add GET route to application-controller file. 
  - Go to localhohst:9292/vehicles to make sure I could see JSON info generated
  - Add POST, PATCH & DELETE routes and test functionality using Postman.

* Set up the Frontend: 

  - Create a react app with the command: npx create-react-app <project-name>
  - Create github repo and initialize git
  - Create components folders and add component files for Vehicle   
    List, Vehicles, Reservation List and Reservations.
  - Create a GET fetch request to ensure I could see data response returned. 
  - Added Navigation Bar Component and installed react-router-dom v5.
  - Created routes on App.js and added links to NavBar.js
  - Create a layout of information flow of components.  
  - Build Components for Vehicle List, Vehicles, Reservation List and Reservation. 
  - Create second GET fetch request for Reservations.
  - Add basic CSS to display information
  - Work on CRUD application functionality:
    - Create reservation submission form to create a reservation.
    - Create Edit Form to update a reservation.
    - Create functionality to delete a reservation
    - Add extra functionality to update vehicles added or deleted so that vehicles are reflected as reserved in the vehicles table. 