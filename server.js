const express = require('express');
const moment = require('moment');
const axios = require('axios');
const helmet = require('helmet');
const morgan = require('morgan');
const { port, hostname } = require('./src/settings/site');

let customSettings = {};
try {
  customSettings = require('./custom.settings.json');
  console.log('Custom settings file found.');
} catch (error) {
  console.log('No custom settings provided.');
}

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(express.static('public'));

function mapFacebookPosts (posts, { facebookId }) {
  return posts.map(post => {
    const { id } = post;
    const message = post.message || '';
    const title = moment(post.created_time).format('MMMM DD, YYYY');
    const image = (post.attachments && post.attachments.data[0] && post.attachments.data[0].media.image.src) || null;
    const link = `https://www.facebook.com/${facebookId}/posts/` + id.split('_').reverse()[0];

    return { id, title, message, image, link };
  });
}

app.get('/api/facebook/:facebookId/posts', (req, res) => {
  const token = customSettings.facebookToken;
  const fields = 'message,created_time,attachments{media}';
  const limit = 50;

  axios
    .get(`https://graph.facebook.com/v3.2/${req.params.facebookId}/posts?fields=${fields}&limit=${limit}&access_token=${token}`)
    .then(xhr => {
      const results = mapFacebookPosts(xhr.data.data, req.params);
      res.json(results);
    })
    .catch(response => {
      res.json({ data: [], error: true });
    });
});

app.listen(port, hostname, error => {
  if (error) throw error;
  console.log(`Server environment "${process.env.NODE_ENV}".`);
  console.log(`Server listening at ${hostname}:${port}.`);
});
