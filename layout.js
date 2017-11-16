const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
      "title": {type: String},
      "content": {type: String},
      "author": {type: String},
      "created": {type: String}
  })

const blogPost = mongoose.model{'blogPost', blogPostSchema}

module.export = {blogPost};