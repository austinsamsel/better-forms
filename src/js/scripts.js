(function ($, window, document, undefined) {

  // on the fly validation for age input
  $(".js-age").on("change keyup", function() {
    //TODO: break this out into fuctions later.
    if ($(this).val() < 1 && $(this).val().length != 0 || $(this).val() > 130 && $(this).val().length != 0 ){
      console.log('yo wtf');
      $(this).addClass('error');
    } else{
      $(this).removeClass('error');
    }
  });

  // init chosen for all select forms
  $("select").chosen();
  $('select').first().trigger('chosen:open');

  // let user hit 'enter' to check off checkbox.
  $('input:checkbox').keypress(function(e){
    if((e.keyCode ? e.keyCode : e.which) == 13){
      $(this).click();
    }
  });


})(jQuery, window, document);
