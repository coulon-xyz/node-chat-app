var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

//https://www.google.com/maps?q=48.882408399999996,2.348829

var generateLocationMessage = (from,latitude,longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};


module.exports = {generateMessage, generateLocationMessage};
