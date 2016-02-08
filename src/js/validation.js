(function ($, window, document, undefined) {

  $.fn.tooYoung = function(){
    return $(this).val() < 0 && $(this).val().length != 0
  }
  $.fn.tooOld = function(){
    return $(this).val() > 130 && $(this).val().length != 0
  }

  // on the fly validation for age input
  $(".js-age").on("change keyup", function() {
    if ( $(this).tooYoung() || $(this).tooOld() ){
      console.log('yo wtf');
      $(this).addClass('error');
    } else{
      $(this).removeClass('error');
    }
  });

})(jQuery, window, document);
