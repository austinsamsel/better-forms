(function ($, window, document, undefined) {

  $(".js-age").on("change keyup", function() {
    if ($(this).val() < 1 || $(this).val() > 130 ){
      console.log('yo wtf');
      $(this).addClass('error');
    } else{
      $(this).removeClass('error');
    }
  });

})(jQuery, window, document);
