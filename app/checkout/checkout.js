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
  $scope.totalPrice = 0.00

  $scope.shippingOptions = [
    {
      type: "Royal Mail (free)",
      price: "0.00"
    },
    {
      type:"DPD Courier (£5.00)",
      price: "5.00"
    },
    {
      type: "DPD Morning Courier (£6.00)",
      price: "6.00"
    }
  ];

  $scope.getSelectedBouquet = function(bouquetCost) {
    $scope.bouquetCost = bouquetCost;
  };

  $scope.checkDate  = function(deliveryDate) {
    $scope.selectedDate = new Date(deliveryDate);
    var month = $scope.selectedDate.getMonth();
    var day = $scope.selectedDate.getDate();
    var isChristmas = ((month === 0 && day < 3) || (month === 11 && day > 22));

    $scope.surcharge = isChristmas ? 3.50 : 0;

    console.log('$scope.surcharge', $scope.surcharge);
    $scope.calculateTotal();
  };

  $scope.calculateTotal = function() {
    console.log('$scope.bouquetQuantity', $scope.bouquetCost);
    if ($scope.deliveryDate && $scope.shippingCost && $scope.bouquetQuantity && $scope.bouquetCost) {
      $scope.totalPrice = ($scope.bouquetCost * $scope.bouquetQuantity) + parseInt($scope.shippingCost) + $scope.surcharge;
      console.log('$scope.totalPrice ', $scope.totalPrice );
    }
  };

}]);
