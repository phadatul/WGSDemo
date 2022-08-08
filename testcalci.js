//testing for calculator functionality
describe('calculator testing', function() {

    //individual unit test
    it('testign add', function() {

        var result = add(10, 2);
        expect(result).toEqual(12);
    });

    it('testign sub', function() {

        var result = sub(10, 2);
        expect(result).toEqual(8);
    });

    it('testign multiply', function() {

        var result = multiply(10, 2);
        expect(result).toEqual(20);
    });

    it('testign division', function() {

        var result = div(10, 2);
        expect(result).toEqual(5);
    });
});
//*Spec.js