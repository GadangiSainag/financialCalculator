import { TextOutputComponent, inputObj } from "./types";

export const calculateOutputs = (
  inputs: inputObj[],
  formulas: TextOutputComponent["output"][]
): TextOutputComponent["output"][] => {
  // Step 1: Convert inputs into an object for easy access
  const inputValues = inputs.reduce((acc, input) => {
    acc[input.id] = input.value;
    return acc;
  }, {} as { [key: string]: number });

  // Step 2: Iterate through each formula in the formulas array
  return formulas.map((output) => {
    const { formulaName, parameters } = output.formula;
    const values: number[] = parameters.map((param) => inputValues[param]);
    console.log(values);
    let calculatedValue = 0;
    // Step 3: Select and execute the appropriate formula
    switch (formulaName) {
      case "EXPECTED_SIP":
        calculatedValue = calculateExpectedAmountSIP(
          ...(values as [number, number, number])
        );
        break;
      case "INVESTED_SIP":
        calculatedValue = calculateInvestedSIP(...(values as [number, number]));
        break;
      case "WEALTH_GAIN_SIP":
        calculatedValue = calculateWelthgainSIP(
          ...(values as [number, number, number])
        );
        break;
      case "LOAN":
        calculatedValue = calculateLoan(
          ...(values as [number, number, number])
        );
        break;
      case "LOAN_TOTAL_PAYMENT":
        calculatedValue = calculateLoanTotalPayment(
          ...(values as [number, number, number])
        );
        break;
      case "MONTHLY_EMI":
        calculatedValue = calculateMonthlyEMI(
          ...(values as [number, number, number])
        );
        // Add more cases for other formulas here
        break;
      case "PRINCIPAL_AMOUNT":
        calculatedValue = calculatePrincipalAmount(...(values as [number]));
        break;
      case "TOTAL_INTEREST":
        calculatedValue = calculateTotalInterest(
          ...(values as [number, number, number])
        );
        break;
      case "TOTAL_AMOUNT":
        calculatedValue = calculateTotalAmount(
          ...(values as [number, number, number])
        );
        break;
      default:
        throw new Error(`Unknown formula: ${formulaName}`);
    }

    // Step 4: Return the output with the calculated value
    return {
      // id : output.id,
      ...output,
      value: calculatedValue,
    };
  });
};

// Example formula functions
const calculateExpectedAmountSIP = (
  monthlyInvestment: number,
  annualReturns: number,
  investmentPeriod: number
): number => {
  const monthlyRate = annualReturns / 12 / 100;
  const months = investmentPeriod * 12;

  const expectedAmount =
    monthlyInvestment *
    (((1 + monthlyRate) ** months - 1) / monthlyRate) *
    (1 + monthlyRate);

  return expectedAmount;
};
const calculateInvestedSIP = (
  monthlyInvestment: number,
  investmentPeriod: number
): number => {
  const months = investmentPeriod * 12;

  const amountInvested = monthlyInvestment * months;

  return amountInvested;
};
const calculateWelthgainSIP = (
  monthlyInvestment: number,
  annualReturns: number,
  investmentPeriod: number
): number => {
  const monthlyRate = annualReturns / 12 / 100;
  const months = investmentPeriod * 12;

  const expectedAmount =
    monthlyInvestment *
    (((1 + monthlyRate) ** months - 1) / monthlyRate) *
    (1 + monthlyRate);
  const amountInvested = monthlyInvestment * months;
  const wealthGain = expectedAmount - amountInvested;

  return wealthGain;
};

const calculateLoan = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
) => {
  const monthlyRate = annualInterestRate / 12 / 100;
  const numberOfMonths = loanTenureYears * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate) / (1 - (1 + monthlyRate) ** -numberOfMonths);
  return monthlyPayment;
};

const calculateLoanTotalPayment = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
) => {
  const monthlyPayment = calculateLoan(
    loanAmount,
    annualInterestRate,
    loanTenureYears
  );
  const numberOfMonths = loanTenureYears * 12;

  const totalPayment = monthlyPayment * numberOfMonths;
  return totalPayment;
};

const calculateMonthlyEMI = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
): number => {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const numberOfMonths = loanTenureYears * 12;

  const emi =
    (loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** numberOfMonths) /
    ((1 + monthlyInterestRate) ** numberOfMonths - 1);

  return emi;
};

const calculatePrincipalAmount = (loanAmount: number): number => {
  return loanAmount;
};

const calculateTotalInterest = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
): number => {
  const monthlyEMI = calculateMonthlyEMI(
    loanAmount,
    annualInterestRate,
    loanTenureYears
  );
  const numberOfMonths = loanTenureYears * 12;

  const totalAmountPayable = monthlyEMI * numberOfMonths;
  const totalInterest = totalAmountPayable - loanAmount;

  return totalInterest;
};

const calculateTotalAmount = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
): number => {
  const monthlyEMI = calculateMonthlyEMI(
    loanAmount,
    annualInterestRate,
    loanTenureYears
  );
  const numberOfMonths = loanTenureYears * 12;

  const totalAmountPayable = monthlyEMI * numberOfMonths;

  return totalAmountPayable;
};
