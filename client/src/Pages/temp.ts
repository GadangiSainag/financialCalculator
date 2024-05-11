type Inputs = {
  monthlyInvestmentAmount: number;
  investmentPeriod: number;
  expectedAnnualReturns: number;
};

type Outputs = {
  expectedAmount: number;
  amountInvested: number;
  wealthGain: number;
};

const calculateWealthGain = ({
  monthlyInvestmentAmount,
  investmentPeriod,
  expectedAnnualReturns,
}: Inputs): Outputs => {
  const monthlyReturns = expectedAnnualReturns / 100 / 12;
  const numberOfPayments = investmentPeriod * 12;
  const futureValue = (monthlyInvestmentAmount * ((1 + monthlyReturns) ** numberOfPayments - 1)) / monthlyReturns;

  const expectedAmount = futureValue + monthlyInvestmentAmount * numberOfPayments;
  const amountInvested = monthlyInvestmentAmount * numberOfPayments;
  const wealthGain = expectedAmount - amountInvested;

  return { expectedAmount, amountInvested, wealthGain };
};
export default calculateWealthGain;
