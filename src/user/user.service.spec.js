describe('userApi', function() {
	beforeEach(module('aloha.users'));

	var userApi;
	var $httpBackend;

	beforeEach(inject(function(_userApi_, _$httpBackend_) {
		userApi = _userApi_;
		$httpBackend = _$httpBackend_;
	}));

	it('should get users', function() {
		$httpBackend.expect('GET', '/users/42').respond(200);

		userApi.getUser(42);

		expect($httpBackend.flush).not.toThrow();
	});

	it('should return the fullname', function() {
		var user = {
			firstName: 'Armno',
			lastName: 'Prom'
		};

		expect(userApi.getFullName(user)).toEqual('Armno Prom');
	});
});
