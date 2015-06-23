var bindClickEventToHideMessageButton = function () {
  $('.hide-message').on('click', function () {
    $('.message').text('');
  });
};
