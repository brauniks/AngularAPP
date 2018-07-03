angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/panel', {
				templateUrl: 'panel/panel.html',
				controller: 'panelController'
			});
	})

	.controller('panelController', function($scope, Agenda, $http) {
		$scope.agenda = Agenda;		

		$http.get("http://212.237.57.41:7080/issues.json")
		.then(function(response) {
			$scope.content = response.data.issues;
		}, function(response) {
			$scope.content = "Something went wrong";
		});
	});