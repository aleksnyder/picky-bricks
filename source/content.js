$(document).ready(function () {

  var $body = $("body"),        
      $replaceString = $body.html().replace(/Legos/g,"LEGOs");

  $("body").html($replaceString);

});