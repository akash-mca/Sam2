angular.module("app", []).controller("controller", function ($scope) {
	$scope.users = [
		{
			name: "Cat",
			username: "cat_user",
		},
		{
			name: "Lol Aerith",
			username: "sephiroth",
		},
		{
			name: "Funny Man",
			username: "sheogorath",
		},
		{
			name: "Mac is wack",
			username: "wackintosh",
		},
	];
});
