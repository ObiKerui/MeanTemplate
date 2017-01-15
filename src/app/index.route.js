(function() {
  'use strict';

  angular
    .module('mainRoute')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    .when('/', 'welcome');
    
    // this is required rather than the line above to prevent an
    // infinite digest loop
    $urlRouterProvider.otherwise(function($injector, $location) {
      var $state = $injector.get("$state");
      $state.go('public.welcome');
    });

    $stateProvider
      .state('public', {
        abstract: true,
        url: '/',
        templateUrl: 'app/public/public-main.html',
        controller: 'PublicController',
        controllerAs: 'public'
      })
      .state('public.welcome', {
        url: 'welcome',
        templateUrl: 'app/public/welcome.html'
      });
  }

})();
