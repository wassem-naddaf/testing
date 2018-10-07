$( document ).ready(function() {

    $( "#button" ).click(function(e) {
        e.preventDefault();
        var email = $('#inputEmail4').val();
        var password = $('#inputPassword4').val();
        var address = $('#inputAddress').val();
        var city = $('#inputCity').val();
        var state = $('#inputState').val();
        console.log(email + '\n' + password + '\n' + address);
          });
  
  });