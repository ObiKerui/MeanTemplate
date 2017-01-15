(function() {
  'use strict';

  angular
    .module('config')
    .config(config);

  /** @ngInject */
  function config($httpProvider, $logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
