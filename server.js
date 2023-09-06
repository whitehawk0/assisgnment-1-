/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Jatin Student ID: 141358218 Date: 07/Sep/2023
*
* Online (Cyclic) URL: https://weak-tan-goose-garb.cyclic.app
*
********************************************************************************/

var express = require("express")
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Jatin - 141358218");
});

app.listen(HTTP_PORT);
