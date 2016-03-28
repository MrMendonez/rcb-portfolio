angular.module('RoutingApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html'
      })

      .state('home.list', {
        url: '/list',
        templateUrl: '../views/partial-home-list.html',
        controller: function($scope) {
          $scope.leastFaveTopics = ['html', 'css', 'javascript']
        }
      })

      .state('home.paragraph', {
        url: '/paragraph',
        template: 'This is a paragraph'
      })

      .state('about', {
        url: '/about',
        views: {
          '': {
            templateUrl: '../views/partial-about.html'
          },
          'columnOne@about': {
            template: 'I am a column'
          },
          'columnTwo@about': {
            templateUrl: 'table-data.html',
            controller: 'FunnyNameController'
          }
        }
      })

    $locationProvider.html5Mode(true);
  }]);