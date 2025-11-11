const express = require("express");
const colors = require('colors');
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const userRoute = require("./routes/routes");

dotenv.config();

const PORT = process.env.PORT || 6000;

const app = express();

// data storage
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// ejs init
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/photo");

// static folder 
app.use(express.static("public"));

// server start
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:9000`.bgGreen.red);

})