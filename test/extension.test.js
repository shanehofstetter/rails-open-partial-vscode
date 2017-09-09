var assert = require('assert');

function getPartialNameFromLine(line_text){
  var line_text = line_text.split(" ").filter(function(i){ return i != "" }).join(" ")
  var after_partial = line_text.split(/partial\(|partial\ /)[1]
  var first_argument = after_partial.split(/\ |\,/)[0]
  var partial_name = first_argument.replace(/\"|\'|\)|\:/g, "")
  return partial_name
}

describe('getPartialNameFromLine', function() {
  it('with <%= partial "blocks/header" %>', function() {
    assert.equal(
      getPartialNameFromLine('<%= partial "blocks/header" %>'),
      "blocks/header"
    )
  });

  [
    '<%= partial "title" %>',
    '<%= partial("title") %>',
    '<%= partial :"title" %>',
    '<%= partial(:"title") %>',
    '<%= partial  "title" %>'
  ].forEach(function(example){
    it('with ' + example, function() {
      assert.equal(
        getPartialNameFromLine(example),
        "title"
      )
    })
  })
})