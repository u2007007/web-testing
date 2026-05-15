/**
 * Formats a Date object into a human-readable string (e.g., "May 15, 2026").
 * @param date - The date to format.
 * @returns A formatted date string.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Calculates the total sum of an array of numbers, including 10% tax.
 * @param prices - An array of numbers to sum.
 * @returns The total sum after applying 10% tax.
 */
export function calculateTotal(prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0) * 1.1;
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param n - The number to clamp.
 * @param lower - The minimum allowed value.
 * @param upper - The maximum allowed value.
 * @returns The clamped number.
 */
export function clamp(n: number, lower: number, upper: number): number {
  return Math.min(Math.max(n, lower), upper);
}
