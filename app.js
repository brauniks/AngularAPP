var app = angular.module('agendaEditor', ['ngRoute', angularDragula(angular)]);


app.config(function($routeProvider) {
	$routeProvider
	.when("/home", {
        templateUrl : "/home/home.html"
    })
    .when("/panel", {
		templateUrl : "/panel/panel.html"
    });
	// $routeProvider
	// 	.otherwise({
	// 		redirectTo: '/home',
	// 		controller: 'homeController'
	// 	});
});

