angular.module('aloha.users', [])
	.factory('userApi', function($http) {
		return {
			getUser: getUser,
			getFullName: getFullName
		};

		function getUser(id) {
			return $http.get('/users/' + id);
		}

		function getFullName(user) {
			return user.firstName + ' ' + user.lastName;
		}
	});