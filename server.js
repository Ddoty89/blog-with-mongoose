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
	blogPost.findById(req.params.id)
})

app.post('/posts', function(req, res) {
	const requriedFields = ['title', 'content', 'author'];
	for(let i = 0; i < requriedFields; i++) {
		if (!(requiredFields in req.body)) {
    	const message = `Missing \`${field}\` in request body`
    	console.error(message);
    	return res.status(400).send(message);
    }
	}

	blogPost.create({
      "title": req.body.title,
      "content": req.body.content,
      "author": req.body.author
      }
	})
})

app.put('/posts/:id', function(req, res) {
	blogPost.findById(req.params.id)
})

app.delete('/posts/:id', function(req, res) {
	blogPosts.findByIdAndRemove(req.params.id)
})