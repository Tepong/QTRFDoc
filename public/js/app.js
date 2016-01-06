var app = angular.module("qtrf", ['ui.router']);
// var myApp = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider','$locationProvider', 
    function ($stateProvider,$urlRouterProvider,$locationProvider) {
    $stateProvider
        .state('home', {
            url:'/home',
            template:'<h1>Test</h1>'
            // templateUrl: './partials/partial-home.jade'
        })
    $urlRouterProvider.otherwise('/home');
    $locationProvider
    .html5Mode(true)
    .hashPrefix('!');
}]);