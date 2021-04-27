// Initialize modules
const { src, dest } = require('gulp');
//File path variables
const { CONF } = require('../config');

//php task
const php = (cb) => {
  return src(CONF.PHP.SOURCE + '**').pipe(dest(CONF.PHP.OUTPUT));
  cb();
};
exports.php = php;