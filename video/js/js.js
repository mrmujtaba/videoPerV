
$(document).ready(function() {
  var $scope = $(".scope"),
      scopeWHalf = $scope.width() / 2;
  $(document).on("mousemove", function(e) {
    $scope.css({"left": e.pageX - scopeWHalf, "top": e.pageY - scopeWHalf});
  });
});
