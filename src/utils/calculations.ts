import { TextOutputComponent, InputObj } from "./types";

export const calculateOutputs = (
  inputs: InputObj[],
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
      // SIP Calculator

      case "EXPECTED_SIP":
        calculatedValue = calculateExpectedAmountSIP(
          ...(values as [number, number, number])
        );
        break;
      case "INVESTED_SIP":
        calculatedValue = calculateInvestedSIP(...(values as [number, number]));
        break;
      case "WEALTH_GAIN_SIP":
        calculatedValue = calculateWealthGainSIP(
          ...(values as [number, number, number])
        );
        break;
      // Lumpsum Calculator
      case "INVESTED_AMOUNT_LUMPSUM":
        calculatedValue = calculateInvestedAmountLumpsum(
          ...(values as [number])
        );
        break;
      case "ESTIMATED_RETURNS_LUMPSUM":
        calculatedValue = calculateEstimatedReturnsLumpsum(
          ...(values as [number, number, number])
        );
        break;
      case "TOTAL_VALUE_LUMPSUM":
        calculatedValue = calculateTotalValueLumpsum(
          ...(values as [number, number, number])
        );
        break;
      // SWP Calculator
      case "TOTAL_INVESTMENT_SWP":
        calculatedValue = valueStraightFromInput(...(values as [number]));
        break;
      case "TOTAL_WITHDRAWAL_SWP":
        calculatedValue = calculateTotalWithdrawalSWP(
          ...(values as [number, number])
        );
        break;
      case "FINAL_VALUE_SWP":
        calculatedValue = calculateFinalValueSWP(
          ...(values as [number, number, number, number])
        );
        break;

      // Loan
      case "LOAN_EMI":
        calculatedValue = calculateLoanEMI(
          ...(values as [number, number, number])
        );
        break;
      case "LOAN_TOTAL_PAYMENT":
        calculatedValue = calculateLoanTotalPayment(
          ...(values as [number, number, number])
        );
        break;
      case "MONTHLY_EMI":
        calculatedValue = calculateLoanEMI(
          ...(values as [number, number, number])
        );
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
      // Car Loan EMI
      case "CAR_LOAN_EMI":
        calculatedValue = calculateCarLoanEMI(
          ...(values as [number, number, number])
        );
        break;
      case "CAR_LOAN_TOTAL_PAYMENT":
        calculatedValue = calculateCarLoanTotalPayment(
          ...(values as [number, number, number])
        );
        break;

      case "CAR_LOAN_TOTAL_INTEREST":
        calculatedValue = calculateCarLoanTotalInterest(
          ...(values as [number, number, number])
        );
        break;

      case "CAR_LOAN_PRINCIPAL_AMOUNT":
        calculatedValue = calculateCarLoanPrincipalAmount(
          ...(values as [number])
        );
        break;
      case "INVESTED_AMOUNT_MF":
        calculatedValue = calculateInvestedAmountMutualFund(
          ...(values as [number])
        );
        break;
      case "ESTIMATED_RETURNS_MF":
        calculatedValue = calculateEstimatedReturnsMutualFund(
          ...(values as [number, number, number])
        );
        break;
      case "TOTAL_MF":
        calculatedValue = calculateTotalValueMutualFund(
          ...(values as [number, number, number])
        );
        break;
      case "TOTAL_EPF":
        calculatedValue = calculateEPFAccumulatedAmount(
          ...(values as [number, number, number, number, number])
        );
        break;
      case "PRINCIPAL_SI":
        calculatedValue = calculatePrincipalAmountSI(...(values as [number]));
        break;
      case "TOTAL_INTEREST_SI":
        calculatedValue = calculateTotalInterestSI(
          ...(values as [number, number, number])
        );
        break;
      case "TOTAL_VALUE_SI":
        calculatedValue = calculateTotalAmountSI(
          ...(values as [number, number, number])
        );
        break;

      case "TOTAL_VALUE_CI":
        calculatedValue = calculateTotalAmountCI(
          ...(values as [number, number, number, number])
        );
        break;
      case "TOTAL_INTEREST_CI":
        calculatedValue = calculateTotalInterestCI(
          ...(values as [number, number, number, number])
        );
        break;
      case "PRINCIPAL_CI":
        calculatedValue = calculatePrincipalAmountCI(...(values as [number]));
        break;
        case "MONTHLY_DEDUCTIONS_SALARY":
          calculatedValue = calculateTotalMonthlyDeductions(
            ...(values as [number, number, number])
          );
          break;
  
        case "ANNUAL_DEDUCTIONS_SALARY":
          calculatedValue = calculateTotalAnnualDeductions(
            ...(values as [number, number, number, number])
          );
          break;
        case "TAKE_HOME_MONTHLY_SALARY":
          calculatedValue = calculateTakeHomeMonthlySalary(
            ...(values as [number, number, number, number, number, number, number])
          );
          break;
        case "TAKE_HOME_ANNUAL_SALARY":
          calculatedValue = calculateTakeHomeAnnualSalary(...(values as [number, number, number, number, number, number, number]));
          break;

      default:
        throw new Error(`Unknown formula: ${formulaName}`);
    }

    // Step 4: Return the output with the calculated value
    calculatedValue = ~~calculatedValue;
    return {
      ...output,
      value: calculatedValue,
    };
  });
};

// All formula functions (including new ones for Lumpsum, SWP, and Car Loan calculators)

// Refactored existing formulas
const valueStraightFromInput = (takenInputValue: number): number => {
  return takenInputValue;
};
const calculateExpectedAmountSIP = (
  monthlyInvestment: number,
  annualReturns: number,
  investmentPeriod: number
): number => {
  const monthlyRate = annualReturns / 12 / 100;
  const months = investmentPeriod * 12;

  return (
    monthlyInvestment *
    (((1 + monthlyRate) ** months - 1) / monthlyRate) *
    (1 + monthlyRate)
  );
};

const calculateInvestedSIP = (
  monthlyInvestment: number,
  investmentPeriod: number
): number => {
  const months = investmentPeriod * 12;
  return monthlyInvestment * months;
};

const calculateWealthGainSIP = (
  monthlyInvestment: number,
  annualReturns: number,
  investmentPeriod: number
): number => {
  const expectedAmount = calculateExpectedAmountSIP(
    monthlyInvestment,
    annualReturns,
    investmentPeriod
  );
  const investedAmount = calculateInvestedSIP(
    monthlyInvestment,
    investmentPeriod
  );
  return expectedAmount - investedAmount;
};

const calculateLoanEMI = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
): number => {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const numberOfMonths = loanTenureYears * 12;

  return (
    (loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** numberOfMonths) /
    ((1 + monthlyInterestRate) ** numberOfMonths - 1)
  );
};

const calculateLoanTotalPayment = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
): number => {
  const monthlyEMI = calculateLoanEMI(
    loanAmount,
    annualInterestRate,
    loanTenureYears
  );
  const numberOfMonths = loanTenureYears * 12;
  return monthlyEMI * numberOfMonths;
};

const calculateTotalInterest = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
): number => {
  const totalPayment = calculateLoanTotalPayment(
    loanAmount,
    annualInterestRate,
    loanTenureYears
  );
  return totalPayment - loanAmount;
};

const calculatePrincipalAmount = valueStraightFromInput;

const calculateTotalAmount = (
  loanAmount: number,
  annualInterestRate: number,
  loanTenureYears: number
): number => {
  return calculateLoanTotalPayment(
    loanAmount,
    annualInterestRate,
    loanTenureYears
  );
};
const calculateTotalWithdrawalSWP = (
  withdrawalPerMonth: number,
  timePeriodYears: number
): number => {
  const months = timePeriodYears * 12;
  return withdrawalPerMonth * months;
};

const calculateFinalValueSWP = (
  totalInvestment: number,
  withdrawalPerMonth: number,
  expectedReturnRate: number,
  timePeriodYears: number
): number => {
  const n = 12; // Compounds per year (monthly)
  const r = expectedReturnRate / 100; // Annual interest rate as a decimal
  const t = timePeriodYears; // Time period in years

  const monthlyRate = r / n;
  const totalMonths = n * t;

  // The modified formula
  const futureValueOfWithdrawals =
    withdrawalPerMonth *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);

  const futureValueOfInvestment =
    totalInvestment * Math.pow(1 + monthlyRate, totalMonths);

  const finalValue = futureValueOfInvestment - futureValueOfWithdrawals;

  return finalValue;
};

const calculateInvestedAmountLumpsum = (totalInvestment: number): number => {
  return totalInvestment;
};

const calculateEstimatedReturnsLumpsum = (
  totalInvestment: number,
  expectedReturnRate: number,
  timePeriodYears: number
): number => {
  const rate = expectedReturnRate / 100;
  const totalValue = totalInvestment * (1 + rate) ** timePeriodYears;
  return totalValue - totalInvestment;
};

const calculateTotalValueLumpsum = (
  totalInvestment: number,
  expectedReturnRate: number,
  timePeriodYears: number
): number => {
  const rate = expectedReturnRate / 100;
  return totalInvestment * (1 + rate) ** timePeriodYears;
};

// Car Loan EMI Calculator formulas can reuse the loan formulas
// Assuming the loan formulas from earlier are defined as follows:

const calculateCarLoanEMI = calculateLoanEMI;
const calculateCarLoanTotalPayment = calculateLoanTotalPayment;
const calculateCarLoanTotalInterest = calculateTotalInterest;
const calculateCarLoanPrincipalAmount = calculatePrincipalAmount;
const calculateInvestedAmountMutualFund = valueStraightFromInput;

const calculateEstimatedReturnsMutualFund = (
  totalInvestment: number,
  annualReturnRate: number,
  timePeriodYears: number
): number => {
  const totalValue = calculateTotalValueMutualFund(
    totalInvestment,
    annualReturnRate,
    timePeriodYears
  );
  return totalValue - totalInvestment;
};

const calculateTotalValueMutualFund = (
  totalInvestment: number,
  annualReturnRate: number,
  timePeriodYears: number
): number => {
  const totalValue =
    totalInvestment * (1 + annualReturnRate / 100) ** timePeriodYears;
  return totalValue;
};

const calculateEPFAccumulatedAmount = (
  monthlySalary: number,
  currentAge: number,
  epfContributionRate: number,
  annualSalaryIncreaseRate: number,
  interestRate: number,
  retirementAge: number = 60
): number => {
  const yearsToRetirement = retirementAge - currentAge;
  let accumulatedAmount = 0;
  let currentMonthlySalary = monthlySalary;

  for (let year = 0; year < yearsToRetirement; year++) {
    for (let month = 0; month < 12; month++) {
      accumulatedAmount += (currentMonthlySalary * epfContributionRate) / 100;
      accumulatedAmount *= 1 + interestRate / 100 / 12;
    }
    currentMonthlySalary *= 1 + annualSalaryIncreaseRate / 100;
  }

  return accumulatedAmount;
};
const calculatePrincipalAmountSI = valueStraightFromInput;

const calculateTotalInterestSI = (
  principalAmount: number,
  annualInterestRate: number,
  timePeriodYears: number
): number => {
  const totalInterest =
    (principalAmount * annualInterestRate * timePeriodYears) / 100;
  return totalInterest;
};

const calculateTotalAmountSI = (
  principalAmount: number,
  annualInterestRate: number,
  timePeriodYears: number
): number => {
  const totalInterest = calculateTotalInterestSI(
    principalAmount,
    annualInterestRate,
    timePeriodYears
  );
  const totalAmount = principalAmount + totalInterest;
  return totalAmount;
};

const calculatePrincipalAmountCI = valueStraightFromInput;

const calculateTotalInterestCI = (
  principalAmount: number,
  annualInterestRate: number,
  timePeriodYears: number,
  compoundingFrequency: number
): number => {
  const totalAmount = calculateTotalAmountCI(
    principalAmount,
    annualInterestRate,
    timePeriodYears,
    compoundingFrequency
  );
  const totalInterest = totalAmount - principalAmount;
  return totalInterest;
};

const calculateTotalAmountCI = (
  principalAmount: number,
  annualInterestRate: number,
  timePeriodYears: number,
  compoundingFrequency: number
): number => {
  const n = compoundingFrequency;
  const totalAmount =
    principalAmount *
    (1 + annualInterestRate / (100 * n)) ** (n * timePeriodYears);
  return totalAmount;
};
const calculateTotalMonthlyDeductions = (
  monthlyProfessionalTax: number,
  monthlyEmployerPF: number,
  monthlyEmployeePF: number,
  monthlyAdditionalDeduction: number = 0
): number => {
  const totalMonthlyDeductions =
    monthlyProfessionalTax +
    monthlyEmployerPF +
    monthlyEmployeePF +
    monthlyAdditionalDeduction;
  return totalMonthlyDeductions;
};

const calculateTotalAnnualDeductions = (
  monthlyProfessionalTax: number,
  monthlyEmployerPF: number,
  monthlyEmployeePF: number,
  monthlyAdditionalDeduction: number = 0
): number => {
  const totalMonthlyDeductions = calculateTotalMonthlyDeductions(
    monthlyProfessionalTax,
    monthlyEmployerPF,
    monthlyEmployeePF,
    monthlyAdditionalDeduction
  );
  const totalAnnualDeductions = totalMonthlyDeductions * 12;
  return totalAnnualDeductions;
};

const calculateTakeHomeMonthlySalary = (
  ctc: number,
  bonusIncluded: number,
  monthlyProfessionalTax: number,
  monthlyEmployerPF: number,
  monthlyEmployeePF: number,
  monthlyAdditionalDeduction: number = 0,
  isBonusInPercentage: number = 0
): number => {
  // Calculate monthly gross salary by removing the bonus first
  const annualGrossSalary = ctc - bonusIncluded;
  let monthlyGrossSalary = annualGrossSalary / 12;

  // Calculate the monthly bonus
  const monthlyBonus = isBonusInPercentage === 1
    ? (ctc * bonusIncluded) / (100 * 12)
    : bonusIncluded / 12;

  // Add the monthly bonus to the monthly gross salary
  monthlyGrossSalary += monthlyBonus;

  const totalMonthlyDeductions = calculateTotalMonthlyDeductions(
    monthlyProfessionalTax,
    monthlyEmployerPF,
    monthlyEmployeePF,
    monthlyAdditionalDeduction
  );

  const takeHomeMonthlySalary = monthlyGrossSalary - totalMonthlyDeductions;
  return takeHomeMonthlySalary;
};

const calculateTakeHomeAnnualSalary = (
  ctc: number,
  bonusIncluded: number,
  monthlyProfessionalTax: number,
  monthlyEmployerPF: number,
  monthlyEmployeePF: number,
  monthlyAdditionalDeduction: number = 0,
  isBonusInPercentage: number = 0
): number => {
  const takeHomeMonthlySalary = calculateTakeHomeMonthlySalary(
    ctc,
    bonusIncluded,
    monthlyProfessionalTax,
    monthlyEmployerPF,
    monthlyEmployeePF,
    monthlyAdditionalDeduction,
    isBonusInPercentage
  );
  const takeHomeAnnualSalary = takeHomeMonthlySalary * 12;
  return takeHomeAnnualSalary;
};
