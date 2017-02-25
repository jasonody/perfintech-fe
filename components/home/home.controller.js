(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$http', 'authService'];

  function HomeController($http, authService) {
    //var apiBaseUrl = 'http://localhost:1337/';
    var apiBaseUrl = 'http://perfintechapi.azurewebsites.net/';
    var vm = this;
    vm.authService = authService;

    vm.getUnsecured = function () {
      $http.get(apiBaseUrl)
        .then(function (result) {
          vm.message = result.data;
        }, function (error) {
          vm.message = error.statusText;
        });
    }

    vm.getSecured = function () {
      $http.get(apiBaseUrl + 'secure')
        .then(function (result) {
          vm.message = result.data;
        }, function (error) {
          vm.message = error.statusText;
        });
    }
  }

}());
