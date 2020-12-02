angular.module("app", []).controller("controller", ($scope) => {
	$scope.products = [
		{
			id: 1,
			name: "mobile",
			quantity: 20,
			price: 20000,
		},
		{
			id: 2,
			name: "computer",
			quantity: 34,
			price: 60000,
		},
		{
			id: 3,
			name: "laptop",
			quantity: 15,
			price: 50000,
		},
		{
			id: 4,
			name: "console",
			quantity: 10,
			price: 48000,
		},
	];

	$scope.add = () => {
		$scope.products.push({
			id: $scope.id,
			name: $scope.name,
			price: $scope.price,
			quantity: $scope.quantity,
		});
	};

	$scope.save = function () {
		var index = getindex($scope.id);
		$scope.products[index].name = $scope.name;
		$scope.products[index].quantity = $scope.quantity;
		$scope.products[index].price = $scope.price;
	};

	$scope.edit = (index) => {
		var product = $scope.products[index];
		$scope.id = product.id;
		$scope.name = product.name;
		$scope.quantity = product.quantity;
		$scope.price = product.price;
	};

	$scope.delete = (index) => {
		var result = confirm("you sure?");
		if (result == true) {
			$scope.products.splice(index, 1);
		}
	};

	const getindex = (id) => {
		for (let i = 0; i < $scope.products.length; i++) if ($scope.products[i].id == id) return i;
		return -1;
	};
});
