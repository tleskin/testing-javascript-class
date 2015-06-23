var assert = chai.assert;

describe('test the secret message button', function () {
  before(function () {
    // same as declare instance variable in ruby
    this.message = 'This is a secret message.';
    bindClickEventToShowMessageButton();
  });

  // clean up before we run each test
  beforeEach(function () {
    $('.message').text('')
  });

  // Can use jQuery to find on page, instead of using Capybara
  // middle is what we are asserting
  // third argument is a message
  it('the DIV should start out empty', function () {
    assert.strictEqual($('.message').text(), '', 'Starts out empty.');
  });

  it('clicking on the button shows the secret message', function () {
    $('.show-message').click();
    assert.strictEqual($('.message').text(), this.message, 'It has a message now.');
  });

  // Make sure clearing out happens, probably never write this test
  it('Mocha should reset fixtures after each test', function () {
    assert.strictEqual('', $('.message').text(), 'The messages DIV should be empty again.');
    $('.show-message').click();
    assert.strictEqual($('.message').text(), this.message, 'It has a message again.');
  });
});


describe('test the hide message button', function () {
  before(function () {
    // same as declare instance variable in ruby
    this.message = 'This is a secret message.';
    bindClickEventToHideMessageButton();
  });

  // clean up before we run each test
  beforeEach(function () {
    $('.message').text('This is a secret message.')
  });

  it('shows the secret message when click then hides when click hide', function () {
    assert.strictEqual($('.message').text(), this.message, 'It has a message now.');
    $('.hide-message').click();
    assert.strictEqual($('.message').text(), '', 'It has no message now.');
  });

});
