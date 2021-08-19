const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3090;
const { renders } = require('./routes/web');
const { apis } = require('./routes/apis');
const { database } = require('./confg/database');
const router = express.Router();
// console.log(database(`topic`));
//mysql
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(`/image`, express.static(`./uploads`));
// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//render
renders(app);

//api
apis(app);

// Start Server
app.listen(port, () => {
  const dir = './uploads';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  console.log(`Listening on port ${port}`);
});
