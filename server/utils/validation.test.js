const expect = require('expect');

// import isRealString
// isRealString
  // should reject non-string values
  // sould reject string with only spaces
  // should allow non-space characters

  const {isRealString} = require ('./validation');

  describe('isRealString function', () => {
    it('should reject non-string values', () => {
      var bool = isRealString(65432);
      expect(bool).toBe(false);
    });

    it('should reject string with only spaces', () => {
      var bool = isRealString('         ');
      expect(bool).toBe(false);
    });

    it('should allow non-space characters', () => {
      var bool = isRealString('Word1 word2 45&é');
      expect(bool).toBe(true);
    })
  });
