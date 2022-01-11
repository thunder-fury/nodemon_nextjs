const moment = require('moment');

const dateFormat = (date) => {
  return moment(date).format('YYYY-MM-DD')
}

exports.dateFormat = dateFormat
