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
			lineXkey: '@',
			lineYkeys: '@',
			lineLabels: '@',
	        lineColors: '@'
		},
		link: function (scope, elem, attrs){
			var colors,
				morris;
			if (scope.lineColors === void 0 || scope.lineColors === '') {
				colors = null;
			} else {
				colors = JSON.parse(scope.lineColors);
			}
			scope.$watch('lineData', function(){
				if(scope.lineData){					
					if(!morris) {
						morris = new Morris.Line({
							element: elem,
							data: scope.lineData,
							xkey: scope.lineXkey,
							ykeys: JSON.parse(scope.lineYkeys),
							labels: JSON.parse(scope.lineLabels),
							lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
						});
					} else {
						morris.setData(scope.lineData);
					}
				}
			});
		}
	}
});