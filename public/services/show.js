angular.module('MyApp')
  .factory('Show', ['$resource', function($resource) {
    return $resource('/api/shows/:_id');
  }]);

 // this has the following methods
 // { 'get':    {method:'GET'},
 //  'save':   {method:'POST'},
 //  'query':  {method:'GET', isArray:true},
 //  'remove': {method:'DELETE'},
 //  'delete': {method:'DELETE'} };