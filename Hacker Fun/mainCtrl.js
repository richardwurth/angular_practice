angular.module('central').controller('mainCtrl', function($scope) {
  $scope.result = "Please enter your credentials";
  $scope.test = function () {
    $scope.result = Math.floor(Math.random()*100);
    if ($scope.result <= 0) {
      alert("Access Granted");
      $('button').fadeOut();
      $('h1').fadeOut();
      $('body').css('background-image','url(https://i.ytimg.com/vi/y8vVxxygyYw/maxresdefault.jpg)');
    } else {
      $scope.result = "Access Denied";
    }
  }

});
