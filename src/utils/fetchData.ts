import { CalculatorType } from "./types";

const fetchCalciData = async (filename: string): Promise<CalculatorType> => {
  try {
    // Perform the fetch operation
    const response = await import(`../assets/${filename}.json`);
    const data = await response.default;
    return data; // Return the fetched data
  } catch (error) {
    // Throw the error to be handled by the caller
    throw new Error(`Failed to load page: ${error}`);
  }
};
export default fetchCalciData;
