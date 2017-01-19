'use strict';

angular.module('myApp.checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'Checkout'
  });
}])

.controller('Checkout', ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint) {
  $scope.bouquets = FlowersEndpoint.collections[0].skus;

  $scope.bouquetQuantity = 1;
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

  $scope.getSelectedBouquet = function(bouquetCost) {
    $scope.bouquetCost = bouquetCost;
  };

  $scope.calculateTotal = function() {
    if ($scope.deliveryDate && $scope.shippingCost && $scope.bouquetQuantity) {
      $scope.totalPrice = ($scope.bouquetCost * $scope.bouquetQuantity) + parseInt($scope.shippingCost);
      console.log('$scope.totalPrice ', $scope.totalPrice );
    }
  };

}]);
