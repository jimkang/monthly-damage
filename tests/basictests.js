var test = require('tape');
var monthlyDamage = require('../index');

var testCases = [
  {
    opts: {
      price: 400000,
      downPayment: 80000,
      // interestRatePercent: 4.125,
      // termInYears: 30,
      monthlyCondoFee: 250,
      yearlyTaxes: 4000
    },
    result: {
      monthlyCost: 2134.21,
      totalCostOfLoan: 238316.49
    }
  },
  {
    opts: {
      price: 1000000,
      downPayment: 100000,
      interestRatePercent: 3.85,
      termInYears: 15,
      yearlyTaxes: 5400
    },
    result: {
      monthlyCost: 7039.74,
      totalCostOfLoan: 286153.63
    }
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Calculate damage', function basicTest(t) {
    t.deepEqual(
      monthlyDamage(testCase.opts), testCase.result, 'Result is correct.'
    );
    t.end();
  });
}
