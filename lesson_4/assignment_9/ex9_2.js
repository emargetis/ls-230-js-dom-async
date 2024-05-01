$(() => {
  $('form').on('submit', (e) => {
    e.preventDefault();
    let textInput = $('#key').val();
    
    $(document).off('keypress').on('keypress', function(e) {
      if (e.key !== textInput) {
        return;
      }
      
      $('a').trigger('click');
    });
  
  });
  
  $('a').on('click', function(e) {
      $('#accordion').slideToggle();
  });
});