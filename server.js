const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const blogPost = require('./layout')

app.get('/posts', function(req, res) {
	blogPost.find()
})

app.get('/posts/:id', function(req, res) {
	blogPost.findById()
})

app.post('/posts', function(req, res) {
	blogPost.
})

app.put('/posts/:id', function(req, res) {

})

app.delete('/posts/:id', function(req, res) {
	
})