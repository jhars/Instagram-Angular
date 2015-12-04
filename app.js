var app = angular.module('instangularApp', ['ngResource']);

app.controller('InstaCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.insta = 'Search for any Hashtag and View Photos! ';

	$scope.getGrams = function () {
		var tag = $scope.tag.replace(/\s+/g, '');
		console.log('$scope.tag');
		var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=d8d0d6b44249490bbde6eee4d1968dac&callback=JSON_CALLBACK';
		$http.jsonp(url)
			.then(function (response) {
				console.log(response);
				$scope.tag = "";
				$scope.photos = response.data.data;
		})
	}
}]);
