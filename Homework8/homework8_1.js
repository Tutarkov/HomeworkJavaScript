$(document).ready(function (){

$('#button').click(function () {
    if ($('#Name').val()) { 
      $('body').append(`<h1>Hello ${$('#Name').val()}!</h1>`);
    }
  });
});