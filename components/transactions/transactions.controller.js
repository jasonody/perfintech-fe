(function () {
  'use strict';

  angular
    .module('app')
    .controller('TransactionsController', TransactionsController);

  TransactionsController.$inject = [];

  function TransactionsController() {

    var vm = this;

    vm.trans = [
        {
            date: "now",
            description: "test desc",
            category: "test cat",
            amount: "100"
        }
    ];
  }

}());