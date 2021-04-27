const { watch, series, parallel } = require('gulp');
const { php } = require('./tasks/php');
const { CONF } = require('./config');
const watchTask = () => {
  watch(
    [
      CONF.PHP.SOURCE,
    ],
    parallel(php),
  )
};

exports.default = series(
  parallel(php),
  watchTask,
);

exports.php = php;
exports.watch = watchTask;