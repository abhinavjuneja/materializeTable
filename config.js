angular.module('test').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login', {
          templateUrl: './partials/login.html'
        }).
        when('/inbox', {
          templateUrl: './partials/inbox.html'
        }).
        when('/records/:id', {
          templateUrl: './partials/details.html'
        }).
        otherwise('/login');
    }
  ]);