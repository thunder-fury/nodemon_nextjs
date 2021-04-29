const renders = (app) => {
  // Load View Engine
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Hello',
    });
  });
  //Add Route
  app.get('/articles/add', (req, res) => {
    res.render('add_article', {
      title: 'Articles',
    });
  });
};

exports.renders = renders;
