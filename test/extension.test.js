var assert = require('assert');

function getPartialNameFromLine(line_text){
  var line_text = line_text.split(" ").filter(function(i){ return i != "" }).join(" ")
  var after_partial = line_text.split(/partial\(|partial\ /)[1]
  var first_argument = after_partial.split(/\ |\,/)[0]
  var partial_name = first_argument.replace(/\"|\'|\)|\:/g, "")
  return underscorePartialName(partial_name)
}

function underscorePartialName(partial_name){
  return partial_name.split("/").map(function(item, index, array){
    return index == array.length - 1 ? "_" + item : item
  }).join("/")
}

describe('getPartialNameFromLine', function() {
  it('with <%= partial "blocks/header" %>', function() {
    assert.equal(
      getPartialNameFromLine('<%= partial "blocks/header" %>'),
      "blocks/_header"
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
        "_title"
      )
    })
  })
})