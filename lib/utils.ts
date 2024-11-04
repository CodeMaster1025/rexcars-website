import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge className strings and handle Tailwind CSS conflicts
 * @param inputs - Array of className values, objects, or conditional classes
 * @returns Merged and cleaned className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentYear(): number {
    return new Date().getFullYear();
}
