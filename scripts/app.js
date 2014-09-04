angular.module('ngMorrisExample', [
	'ui.router',
	'ngMorris'
]).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			controller: 'MainCtrl',
			templateUrl: 'views/main.html'
		})

});

angular.module('ngMorrisExample').controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $http){
	// http://www.cdc.gov/obesity/data/adult.html

	$http.get('data/obesity-rates-2012.json').then(function(response){
		var states = [];
		var years = [1990, 1995, 2000, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
		var yearKeys = ["yr1990", "yr1995", "yr2000", "yr2003", "yr2004", "yr2005", "yr2006", "yr2007", "yr2008", "yr2009", "yr2010", "yr2011", "yr2012"];

		var allStates = _.map(response.data, function(state){
			states.push(state.ab);

			var rates = {};
			_.forEach(yearKeys, function(yearKey){
				var year = parseInt(yearKey.substr(2));
				rates[year] = state[yearKey];
			})
			return { state: state.ab, rates: rates }
		});

		// create data for chart
		var lineData = _.map(years, function(year){
			var obj = {
				year: year
			};
			_.forEach(allStates, function(state){
				obj[state.state] = state.rates[year];
			});
			return obj;
		});

		// pass data to directive (draws line graph)
		$scope.lineChart = {
			data: lineData,
			xkey: 'year',
			ykeys: states,
			labels: states
		}
	})
}

// Schedule E
//===============

d3.csv('data/Form_460_-_Schedule_E_-_Payments_Made.csv', function(result){
	console.log(result)

	
 Morris.Area({
    element: 'hero-area',
    data: [
      {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
      {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
      {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
      {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
      {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
      {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
      {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
      {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
      {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
      {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
    ],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    pointSize: 2,
    hideHover: 'auto'
  });

})




























