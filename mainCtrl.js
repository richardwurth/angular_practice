angular.module('mainApp').controller('mainController', function($scope, $timeout, mainService){
  /* Below are the ng-show view values */
  $scope.showLeft = true;
  $scope.showTopLeft = true;
  $scope.showBotLeft = true;
  $scope.showRight = true;
  $scope.showTopRight = true;
  $scope.showBotRight = true;
  $scope.showMain = true;
  $scope.showTopLeftNew = false;

  /* Above are the ng-show view values */
  $scope.showTopLeftResultNew = () => {
    if ($scope.showTopLeft === true) {
      $timeout(function(){
        $scope.showTopLeftNew = !$scope.showTopLeftNew;
      },500);
      $scope.showTopLeft = !$scope.showTopLeft;
    } else {
      $scope.showTopLeftNew = !$scope.showTopLeftNew;
    }
  }

  $scope.showMainResult = () => {
    $scope.showMain = !$scope.showMain;
  }

  $scope.showLeftResult = () => {
    $scope.showLeft = !$scope.showLeft;
  }

  $scope.showTopLeftResult = () => {
    if ($scope.showTopLeft === false && $scope.showTopLeftNew === true) {
      $timeout(function(){
        $scope.showTopLeft = true;
      },500);
      $scope.showTopLeftNew = false;
    } else {
      $scope.showTopLeft = !$scope.showTopLeft;
    }
  }

  $scope.showBotLeftResult = () => {
    $scope.showBotLeft = !$scope.showBotLeft;
  }

  $scope.showRightResult = () => {
    $scope.showRight = !$scope.showRight;
  }

  $scope.showTopRightResult = () => {
    $scope.showTopRight = !$scope.showTopRight;
  }

  $scope.showBotRightResult = () => {
    $scope.showBotRight = !$scope.showBotRight;
  }

  $scope.showMainResult = () => {
    $scope.showMain = !$scope.showMain;
  }

});
