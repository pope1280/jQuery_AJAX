$(document).ready(function(){
  $("#get_color").on("click", function(event) {
    event.preventDefault();
    $.ajax({
      type: "post",
      url:  "/color"
    }).done(function(response) {
      var cell  = response.cell;
      var color = response.color;
      var box_to_color = $("#color_me").find("li:nth-child("+cell+")");
      box_to_color.css("background-color", color);
    });
  });
});
