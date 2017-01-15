(function() {
  'use strict';

  angular
    .module('public')
    .controller('PublicController', PublicController);

  /** @ngInject */
  function PublicController($q, $log) {
  	var vm = this;
  	vm.loading = false;
  }	
})();

