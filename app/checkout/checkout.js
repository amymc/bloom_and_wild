'use strict';

angular.module('myApp.checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'Checkout'
  });
}])

.controller('Checkout', ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint) {
  $scope.checkoutCopy = "This is the partial for checkout, your implementation goes here";
  $scope.bouquets = FlowersEndpoint.collections[0].skus;

  $scope.deliveriesNum = 1;
  $scope.currentDate = new Date().toString();

  $scope.shippingOptions = [
    {
      type: 'Royal Mail (free)',
      price: 0.00
    },
    {
      type:'DPD Courier (£5.00)',
      price: 5.00
    },
    {
      type: 'DPD Morning Courier - (£6.00)',
      price: 6.00
    }
  ];

  console.log('flowers', $scope.bouquets);
}]);
