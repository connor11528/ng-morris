angular.module('ngMorrisExample', [
	'ui.router',
	'ngMorris'
]);

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


angular.module('ngMorrisExample').controller('MainCtrl', MainCtrl);