
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44')
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 11507,
      years: 5,
      rate: 12.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('258.88')
  });
  
  it("should handle terribly high interest rates", function() {
    const values = {
      amount: 1000,
      years: 40,
      rate: 99
    };
    expect(calculateMonthlyPayment(values)).toEqual('82.50');
  });
  