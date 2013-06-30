$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  console.log('update');
  var generateRandomNum = function (min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
  };

  $('form').on('submit', function(evnt) {
    evnt.preventDefault();
    var roll_value = generateRandomNum(1, 6);
    // debugger;

    //need to be in JS object form, key: value, for params hash
    var die_roll = { value: roll_value };

    var ajax_submit = $.post('/rolls', die_roll);

    ajax_submit.done(function( response ) {

      console.log('AJAX response: ' + response.roll.value);
      var value = response.roll.value; //ruby objects attr still holds
      var filename = value + '.png';
      
      htmlString = '<img src=/' + filename + ' title=' + value + ' alt="the roll">';
      $('#die').html(htmlString);

    });

  });

});
