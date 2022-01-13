const getHour = () => {
  const date = new Date(),
    hour24  = date.getHours();
    const hourStr = hour24 < 12 ? 'am' : 'pm';
  return hourStr
}

exports.getHour = getHour
