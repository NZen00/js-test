$(document).ready(function(){
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        
        var formData = $(this).serialize();
        
        $.ajax({
          type: 'POST',
          url: 'submit_registration.php', // Replace with your backend endpoint
          data: formData,
          success: function(response) {
            $('#message').html('<div class="alert alert-success">' + response + '</div>');
            $('#registrationForm')[0].reset();
          },
          error: function(xhr, status, error) {
            $('#message').html('<div class="alert alert-danger">' + xhr.responseText + '</div>');
          }
        });
      });
});