(function ($, window, document, undefined) {


  // let user hit 'enter' to check off checkbox.
  $('input:checkbox').keypress(function(e){
    if((e.keyCode ? e.keyCode : e.which) == 13){
      $(this).click();
    }
  });
  $('body').on('keypress', function(event) {
    if( event.which === 83 && event.shiftKey ) {
      $('.js-submit').click();
      console.log('submitted!');
      console.log('shift + ' + String.fromCharCode(event.which).toLowerCase());
    }
    if( event.which === 65 && event.shiftKey ) {
      $('.js-add-member').click();
      console.log('added new member!');
      console.log('shift + ' + String.fromCharCode(event.which).toLowerCase());
    }
  });


})(jQuery, window, document);
