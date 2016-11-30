var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {

    var from = 'randomUser';
    var text = 'random text';
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'testUser';
    var latitude = 53.457831502;
    var longitude = -2.288165514;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var locationMessage = generateLocationMessage(from, latitude,longitude);
    expect(locationMessage).toInclude({
      from,
      url
    });
    expect(locationMessage.createdAt).toBeA('number');
  });
});
