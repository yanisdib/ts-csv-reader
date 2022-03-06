// Calculate the average of an array of numbers
export const average = (numbers: number[]): number => {
    let sum = 0;
    const elements = numbers.length;

    // Find sum of array elements
    numbers.forEach((number => sum += number));

    return sum / elements;
}