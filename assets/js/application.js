var dokifyApp = angular.module('dokifyApp', ['dndLists']);

dokifyApp.controller('notificationsListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('notifications.json').success(function(data) {
      $scope.notifications = data;
    });
    $scope.isVisible = false;
    $scope.toggleVisibility = function () {
      $scope.isVisible = $scope.isVisible ? false : true;
    }
  }
]);
