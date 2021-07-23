const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3090;
const { renders } = require('./routes/web');
const { apis } = require('./routes/apis');
const { database } = require('./confg/database');

// console.log(database(`topic`));
//mysql
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//render
renders(app);

//api
apis(app);

// Start Server
app.listen(port, () => console.log(`Listening on port ${port}`));