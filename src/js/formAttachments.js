(function ($, window, document, undefined) {

  // init chosen for all select forms
  //TODO: chosen is hard to clone,
  // need to "save" "copy" of raw select form before initialized
  // then clone that saved copy and initialize chosen on that.
  //$("select").chosen();
  //$('select').first().trigger('chosen:open');

  $.fn.clearForm = function(){
    return $(this).find('input').val('').prop( "checked", false ).removeClass('js-age error').end()
  };

  // add a family member
  //TODO: would probably need an ID attr attached.
  $('.js-add-member').click(function(e){
   e.preventDefault();
   $('.member-section:first')
     .clone()
     .clearForm()
     .insertAfter('.member-section:last')
     .reset();
  });

  // delete a family memeber
  $('body').delegate('.js-delete-member', 'click', function(){
   if($('.member-section').length != 1){
     $(this).parents('.member-section').fadeOut().remove();
   }
  });

})(jQuery, window, document);
