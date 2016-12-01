var moment = require('moment');

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  };
};

//https://www.google.com/maps?q=48.882408399999996,2.348829

var generateLocationMessage = (from,latitude,longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  };
};


module.exports = {generateMessage, generateLocationMessage};
