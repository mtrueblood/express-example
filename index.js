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
  privateToken: 'a6yDcOOh8puW4Y8YIa7Q7Qtt',
  cache: {
    type: 'memory'
  }
});

// 3. Define a wilcard route to get the story mathing the url path
app.get('/*', function(req, res) {
  var path = url.parse(req.url).pathname;
  path = path == '/' ? 'home' : path; // this will allow to visit "home" from / only but still allow the editor to access the home "page" on localhost:4300/home

  Storyblok
    .get(`stories/meganav`, { // load the global Story upfront so we can pass it in line 41
      version: req.query._storyblok ? 'draft': 'published'
    })
    .then((meganavResponse) => {
      let meganavData = meganavResponse.body.story.content;

      Storyblok
        .get(`stories/megafooter`, { // load the global Story upfront so we can pass it in line 41
          version: req.query._storyblok ? 'draft': 'published'
        })
        .then((megafooterResponse) => {
          let megafooterData = megafooterResponse.body.story.content;

          Storyblok
            .get(`stories/${path}`, { // dynamic variable also here!
              version: req.query._storyblok ? 'draft': 'published'
            })

            .then((response) => {
              res.render(response.body.story.content.component, { // changed to dynamic "base" component -> Since you've created 2 components "home" and "about" in your components overview: http://app.storyblok.com/#!/me/spaces/40936/components/ those are also "root" components and therefor can define another layout! :)
                story: response.body.story,
                meganav: meganavData, // pass the global content to Handlebars
                megafooter: megafooterData // pass the global content to Handlebars
              });
            })

            .catch((error) => {
              res.send(error);
            });

            })
      
        .catch((error) => {
          res.send(error);
        });
            
      })
  
    .catch((error) => {
      res.send(error);
    });
});

app.get('clear_cache', function(req, res) {
  Storyblok.flushCache();
  res.send('Cache flushed!');
});

app.use('/public', express.static('public'));

app.listen(4300, function() {
  console.log('Example app listening on port 4300!');
});

// Think through
// 1. A component that resides outside of the <body>, much like meta content in the <head>.
// 2. A component that has repeatable components inside, much like a gallery or a carousel.
// 3. A global component not on certain pages.