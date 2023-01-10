$(document).ready(function (){

    $('#button').click(function () {
        if ($('#Name').val()) { 
          $('body').append(`<h1>This is ${$('#Name').val()}!</h1>`);
        }
      });
    });
    $(document).ready(function (){
    $('#button').click(function () {
        if ($('#Coll').val()) { 
          $('body').append(`<h1>This is ${$('#Coll').val()}!</h1>`);
        }
      });
    });