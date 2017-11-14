const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.get('/posts', function(req, res) {

})

app.get('/posts/:id', function(req, res) {

})

app.post('/posts', function(req, res) {

})

app.put('/posts/:id', function(req, res) {

})

app.delete('/posts/:id', function(req, res) {
	
})