angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/panel', {
				templateUrl: 'panel/panel.html',
				controller: 'panelController'
			});
	})

	.controller('panelController', function($scope, Agenda) {
		$scope.agenda = Agenda;			
	});