describe('testing calculator', function() {
    it('addition of two numbers', function() {
        var actual = add(10, 2);
        var expected = 12;
        expect(actual).toEqual(expected);
    });

    it('substraction of two numbers', function() {
        var actual = sub(10, 2);
        var expected = 8;
        expect(actual).toEqual(expected);
    });

    it('multiplicatiom of two numbers', function() {
        var actual = multiply(10, 2);
        var expected = 20;
        expect(actual).toEqual(expected);
    });

    it('division of two numbers', function() {
        var actual = divide(10, 2);
        var expected = 5;
        expect(actual).toEqual(expected);
    });

    it('division of two numbers when denominator is 0', function() {
        var actual = divide(10, 0);
        var expected = "infinity";
        expect(actual).toEqual(expected);
    });

    it('division of two numbers when a is 0', function() {
        var actual = divide(0, 2);
        var expected = "infinity";
        expect(actual).toEqual(expected);
    });

    it("login", function() {

    });


});


function divide(a, b) {
    if (b == 0) {
        return "infinity";
    } else if (a == 0) {
        return "0";
    }
    return a / b;
}