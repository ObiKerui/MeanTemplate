(function() {
  'use strict';

  angular.module('config', [])
  angular.module('constants', [])
  angular.module('mainRoute', [
  	'ui.router'
  ])
  angular.module('run', [])
  angular.module('public', [])
  angular.module('meanTemplate', [
  	'config',
  	'constants',
  	'mainRoute',
  	'run',
  	'public',
    'ngAnimate',
  	'ngSanitize',
    'ui.bootstrap'
  ]);

})();