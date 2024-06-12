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

      $('.pagination .page-link').click(function(e) {
        e.preventDefault();
        
        $.ajax({
            type: 'GET',
            url: 'example_endpoint.php', // Replace with your backend GET endpoint
            success: function(response) {
              // Handle successful response
              $('#message').html('<div class="alert alert-success">' + response + '</div>');
            },
            error: function(xhr, status, error) {
              // Handle error
              $('#message').html('<div class="alert alert-danger">' + xhr.responseText + '</div>');
            }
          });
      });

      

      $(document).ready(function() {
        // Event handling for button click
        $('#myButton').click(function() {
          alert('Button clicked!');
        });
      
        // Event handling for input change
        $('#myInput').change(function() {
          alert('Input value changed!');
        });
      
        // Event handling for form submission
        $('#myForm').submit(function(e) {
          e.preventDefault();
          alert('Form submitted!');
        });
      
        // Event handling for mouse enter
        $('#myElement').mouseenter(function() {
          alert('Mouse entered the element!');
        });
      
        // Event handling for key press
        $(document).keypress(function(e) {
          alert('Key pressed: ' + e.key);
        });
      });
      
});