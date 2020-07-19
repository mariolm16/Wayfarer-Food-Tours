# Set up of Backend App

## Step 1 `git clone`

Clone the [repo](https://git.generalassemb.ly/cfg-seir-1/Project-Wayfarer), `cd` into directory `wayfarer-backend`. 

## Step 2 `npm install`

Run `npm install` to install all the dependencies.

Libraries Installed Checklist:

- `npm install express --save`
- `npm install body-parser --save`
- `npm install bcryptjs --save`
- `npm install jsonwebtoken --save`
- `npm install dotenv --save`
- `npm install cors --save`
- `npm install sequelize --save`
- `npm install pg --save`

## Step 3 `config.json`

Make sure to update `config/config.json` database credentials with your database `username` and `password`.

## Step 4 `CREATE DATABASE`

Open postgres in the cmd prompt and create a database.

`CREATE DATABASE wayfarer_dev;`

## Step 5 `sequelize db:migrate`

Models already created:

- `sequelize model:generate --name User --attributes username:string,password:string,name:string,img:string,currentCity:integer`
- `sequelize model:generate --name City --attributes name:string,img:string,state:string,country:string`
- `sequelize model:generate --name Post --attributes title:string,body:string,img:string,userId:integer,cityId:integer`

Run migrations `sequelize db:migrate` to create tables in the DB.

## Step 6 `sequelize db:seed:all`

Lets seed the cities data into the "Cities" table by running `sequelize db:seed:all`

## Step 7 `nodemon`

Once everything is done run `node server.js` OR `nodemon` to start the app. By default the backend app will run on port `3001`.

To test if the app is running successfully run the API [http://localhost:3001/city/all](http://localhost:3001/city/all) from a browser or Postman. It should return a list of all the cities in the table.

## Step 8 `http://localhost:3001`

Test all the APIs in Postman by importing the collection of APIs and test all the APIs one by one.

To import the collection:

- Open app **Postman**.
- Click on `Import` given on top left corner of the screen.
- Upload or drop file `Wayfarer.postman_collection.json` given [here](./)
- Click on Import to import the collection

If the server is running start with `signup` API and use the returned token to test others.



