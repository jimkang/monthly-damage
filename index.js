var loanCalc = require('loan-calc');

function monthlyDamage(opts) {
  var price;
  var downPayment;
  var interestRatePercent;
  var termInYears;
  var monthlyCondoFee;
  var yearlyTaxes;

  if (opts) {
    price = opts.price;
    downPayment = opts.downPayment;
    interestRatePercent = opts.interestRatePercent;
    termInYears = opts.termInYears;
    monthlyCondoFee = opts.monthlyCondoFee;
    yearlyTaxes = opts.yearlyTaxes;    
  }

  if (isNaN(price)) {
    throw new Error('No price given to monthlyDamage.');
  }
  if (isNaN(downPayment)) {
    downPayment = 0;
  }
  if (isNaN(interestRatePercent)) {
    interestRatePercent = 4.125;
  }
  if (isNaN(termInYears)) {
    termInYears = 30;
  }
  if (isNaN(monthlyCondoFee)) {
    monthlyCondoFee = 0;
  }
  if (isNaN(yearlyTaxes)) {
    yearlyTaxes = 0;
  }

  var result = {
    monthlyCost: 0,
    totalCostOfLoan: 0
  };

  var loanOpts = {
    amount: price - downPayment,
    rate: interestRatePercent,
    termMonths: termInYears * 12   
  };

  result.monthlyCost = 
    loanCalc.paymentCalc(loanOpts) + monthlyCondoFee + yearlyTaxes/12;
  result.monthlyCost = Math.round(result.monthlyCost * 100) / 100;
  result.totalCostOfLoan = loanCalc.totalInterest(loanOpts);

  return result;
}

module.exports = monthlyDamage;
