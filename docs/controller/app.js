var myApp = angular.module('myApp',['ngRoute', 'ngResource', 'ngMaterial', 'ngAria']);

myApp.config(['$routeProvider','$httpProvider', function($routeProvider) {

  $routeProvider.
    when('/', {
      templateUrl: 'pages/cars.html',
      controller: 'CarsCtrl'
      // controllerAs: 'car'
    })
    // otherwise({
    //   redirectTo: '/'
    // });
}]);