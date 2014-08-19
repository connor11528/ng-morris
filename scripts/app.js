'use strict';

var app = angular.module('ngMorrisExample', [
	'ngMorris',
	'ui.slider'
])

app.controller('MainCtrl', function($scope){
	$scope.demoVals = { sliderExample3: 14 };
})