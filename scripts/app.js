'use strict';

angular.module('ngMorrisExample', [
	'ngMorris'
])

angular.module('ngMorrisExample')
.controller('MainCtrl', function($scope){
	$scope.barData = [{
			y : '2006',
			a : 100,
			b : 90
		}, {
			y : '2007',
			a : 75,
			b : 65
		}, {
			y : '2008',
			a : 50,
			b : 40
	}];
});