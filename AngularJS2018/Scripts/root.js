root = angular.module('root', []);

root.controller("index", ["$scope", function ($scope) {
        $scope.message = "Hello World!";
        $scope.potato = "hot potato";
        $scope.favoriteWord;
        $scope.favoriteColor;
        $scope.favoriteShape;
        $scope.customersToContact;
    }]);

root.controller("index2", ["$scope", function ($scope) {
    $scope.message = "Hello World!2";
    $scope.potato = "hot potato2";
}]);