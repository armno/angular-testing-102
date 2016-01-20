describe('getGreeting', function() {
	var greeter;

	beforeEach(module('aloha'));

	beforeEach(inject(function(_greeter_) {
		greeter = _greeter_;
	}));

	it('say hello to me', function() {
		expect(greeter.getGreeting('Armno')).toEqual('Hello Armno');
	});
});