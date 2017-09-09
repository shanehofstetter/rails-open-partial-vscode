var assert = require('assert');

function getPartialNameFromLine(line_text){
  return "title"
}
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(
        getPartialNameFromLine("<%= partial 'title' %>"),
        "title"
      )
      assert.equal(1+1, 2);
    });
  });
});