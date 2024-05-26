interface InvestmentInputs {
  monthlyInvestmentAmount: number; // Monthly Investment Amount (Rs.)
  investmentPeriod: number; // Investment Period (in years)
  expectedAnnualReturns: number; // Expected Annual Returns (%)
}

        

interface InvestmentOutputs {
  expectedAmount: number; // Expected Amount
  amountInvested: number; // Amount Invested
  wealthGain: number; // Wealth Gain
}

function calculateInvestmentReturns(
  inputs: InvestmentInputs
): InvestmentOutputs {
  const {
    monthlyInvestmentAmount,
    investmentPeriod,
    expectedAnnualReturns,} = inputs;

  const totalMonths = investmentPeriod * 12;
  const annualReturnRate = expectedAnnualReturns / 100;
  const monthlyReturnRate = annualReturnRate / 12;

  // Calculate the future value of the investment using the formula for the future value of a series
  // FV = P * [(1 + r)^n - 1] / r, where P is the payment per period (monthly investment),
  // r is the interest rate per period, and n is the total number of payments.
  const expectedAmount =
    monthlyInvestmentAmount *
    ((Math.pow(1 + monthlyReturnRate, totalMonths) - 1) / monthlyReturnRate);

  // Calculate the total amount invested
  const amountInvested = monthlyInvestmentAmount * totalMonths;

  // Calculate the wealth gain
  const wealthGain = expectedAmount - amountInvested;

  return {
    expectedAmount,
    amountInvested,
    wealthGain,
  };
}

// Example usage:
const inputs: InvestmentInputs = {
  monthlyInvestmentAmount: 5000,
  investmentPeriod: 10,
  expectedAnnualReturns: 8,
};

const outputs: InvestmentOutputs = calculateInvestmentReturns(inputs);
console.log(outputs);
