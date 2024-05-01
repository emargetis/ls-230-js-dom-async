$(function() {
  
  
  $('form').on('submit', (e) => {
    e.preventDefault();
    let char = $('#key').val();
    
    $(document).off('keypress').on('keypress', (e) => {
      if (e.key !== char) {
        return;
      }
      
      $('a').trigger('click');
    })
  })
  
  $('a').on('click', (e) => {
    e.preventDefault();
    $('#accordion').slideToggle();
  })
});