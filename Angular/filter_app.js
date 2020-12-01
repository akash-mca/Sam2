angular.module("app", []).controller("controller", ($scope) => {
	var users = [
		{
			name: "Cat",
			username: "cat_user",
			date: new Date("January 27, 1998"),
			posts: 26,
		},
		{
			name: "Lol Aerith",
			username: "sephiroth",
			date: new Date("September 21, 2001"),
			posts: 27,
		},
		{
			name: "Funny Man",
			username: "sheogorath",
			date: new Date("July 1, 2000"),
			posts: 60,
		},
		{
			name: "Mac is wack",
			username: "wackintosh",
			date: new Date("May 2, 1980"),
			posts: 15,
		},
	];
	$scope.users = users;
});
