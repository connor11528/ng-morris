'use strict';

angular.module('ngMorris', [])
.directive('barChart', function(){
	return {
		restrict: 'A',
		scope: {
			x: '@barX',
			y: '@barY',
			barData: '='
		},
		link: function(scope, elem, attrs){
			scope.$watch('barData', function(){

				if (scope.barData ){
					new Morris.Bar({
						element: elem,
						data: scope.barData,
						xkey: scope.x,
						ykeys: JSON.parse(scope.y),
						labels: ['Number of violations'],
						xLabelMargin: 2
					})
				}
			})
		}
	}
})
.directive('donutChart', function(){
	return {
		restrict: 'A',
		scope: {
			donutData: '='
		},
		link: function(scope, elem, attrs){
			scope.$watch('donutData', function(){
				if (scope.donutData){
					new Morris.Donut({
						element: elem,
						data: scope.donutData
					})
				}
			})
		}
	}
})
.directive('lineChart', function(){
	
	return {
		restrict: 'A',
		scope: {
			lineData: '=',
			lineXkey: '=',
			lineYkeys: '=',
			lineLabels: '=',
			parseTime: '=?'	// optional: http://stackoverflow.com/questions/18784520/angular-directive-with-default-options
		},
		link: function (scope, elem, attrs){
			scope.$watch('lineData', function(){

				if(scope.lineData){					
					new Morris.Line({
						parseTime: scope.parseTime || false,
						element: elem,
						data: scope.lineData,
						xkey: scope.lineXkey,
						ykeys: scope.lineYkeys,
						labels: scope.lineLabels
					})
				}
			})
		}
	}
})
