$(document).ready(function(){
  $("#get_color").on("click", function(event) {
    event.preventDefault();
    $.ajax({
      type: "post",
      url:  "/color"
    }).done(function(response) {
      $("#color_me").find("li:nth-child("+response.cell+")").css("background-color", response.color);
    });
  });
});
