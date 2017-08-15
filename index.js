'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const url = require('url');
const app = express();
const StoryblokClient = require('storyblok-node-client');

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: 'views/components/'
}));

app.set('view engine', '.hbs');
app.set('views', 'views');

let Storyblok = new StoryblokClient({
  privateToken: 'a6yDcOOh8puW4Y8YIa7Q7Qtt'
});

app.get('/', function(req, res) {
  var path = url.parse(req.url).pathname;
  console.log(path);
  path = path == '/' ? 'home' : path;
  console.log(path);
  Storyblok
    .get('stories/home', {
      version: req.query._storyblok ? 'draft': 'published'
    })
    .then((response) => {
      res.render('../pages/home', {
        story: response.body.story
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get('/about', function(req, res) {
  var path = url.parse(req.url).pathname;
  console.log(path);
  path = path == '/' ? 'home' : path;
  console.log(path);
  Storyblok
    .get(`stories/${path}`, {
      version: req.query._storyblok ? 'draft': 'published'
    })
    .then((response) => {
      res.render('../pages/about', {
        story: response.body.story
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

app.use('/public', express.static('public'));

app.listen(4300, function() {
  console.log('Example app listening on port 4300!');
});