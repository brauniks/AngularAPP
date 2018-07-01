angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeController'
			});
	})

	.controller('homeController', function($scope, Agenda, dragulaService) {
		$scope.agenda = Agenda;	
		dragulaService.options($scope, 'fourth-one', {
			revertOnSpill: true
		  });	
	});