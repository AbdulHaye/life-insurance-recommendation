interface UserData {
  age: number;
  income: number;
  dependents: number;
  riskTolerance: string;
}

interface Recommendation {
  type: string;
  coverage: number;
  term: number;
  explanation: string;
}

export const getRecommendation = ({ age, income, dependents, riskTolerance }: UserData): Recommendation => {
  let type = 'Term Life';
  let coverage = 500000;
  let term =20;

  if (age < 40 && riskTolerance === 'High') {
    coverage = 1000000;
    term = 30;
  } else if (age >= 40 && income > 100000) {
    type = 'Whole Life';
    coverage = 750000;
  } else if (dependents > 2) {
    coverage = 750000;
  }

  const explanation = `Based on your age (${age}), income ($${income}), number of dependents (${dependents}), and risk tolerance (${riskTolerance}), we recommend ${type} insurance with a coverage of $${coverage} for ${term} years.`;
  return { type, coverage, term, explanation };
};