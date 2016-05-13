$(document).ready(function() {
  'use strict';
  
  $('[data-action="login"]').click(function(event) {
    event.preventDefault();

    $('[data-js="modal"]').modal({show: true});
  });
});