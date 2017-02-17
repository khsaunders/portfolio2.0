console.log("connected");

var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'assets/views/home.html'
        })

    .when('/pearl', {
        templateUrl: 'assets/views/pearl.html'
    })

    .when('/do_it', {
        templateUrl: 'assets/views/do_it.html'
    })

    .when('/widgets', {
            templateUrl: 'assets/views/widgets.html'
        })
        .otherwise({
            redirectTo: 'home'
        });
});
