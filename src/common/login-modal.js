'use strict'

$(document).ready(function() {
  $('[data-action="login"]').click(function(event) {
    event.preventDefault();

    $('[data-js="modal"]').modal({show: true});
  });
});