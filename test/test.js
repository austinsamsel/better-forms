var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe("basic stuff", function(){
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });
  it('should have a title', function(){
    assert.equal($(".panel-title").html(), "Family Health History")
  });
});

describe("form validations for age", function(){
  it('shows error if older than 130', function(){
    $('.js-age').val('131').keyup();
    assert.equal($('.js-age').hasClass('error'), true);
  })
  //TODO: test if age is less than 0
  //TODO: test if age is between 0 and 130
});

describe('validation helper functions test', function(){
  it('returns a true/false', function(){
    expect($.fn.tooOld()).to.be.a('boolean');
  });
  //etc.
})
