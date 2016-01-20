angular.module('aloha', [])
	.factory('greeter', function() {
		return {
			getGreeting: function(name) {
				return 'Hello ' + name;
			}
		};
	});