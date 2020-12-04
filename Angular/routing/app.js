angular
	.module("app", ["ngRoute"])
	.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "pages/home.html",
			})
			.when("/main", {
				templateUrl: "pages/main.html",
				controller: "mainCtrl",
			})
			/*.when("/main/:first/:last", {
				templateUrl: "pages/main.html",
				controller: "mainCtrl",
			})*/
			.when("/about", {
				templateUrl: "pages/about.html",
			});
	})
	.controller("controller", function () {})
	.controller("mainCtrl", function ($scope, $routeParams) {
		$scope.message = "This thing is working";
		/*if ($routeParams.first && $routeParams.last) {
			$scope.names = [
				{
					first: $routeParams.first,
					last: $routeParams.last,
				},
			];
		}*/
	});
