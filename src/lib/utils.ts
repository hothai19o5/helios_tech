import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sectionClass(extra?: string) {
  return cn("py-20 md:py-28 lg:py-32", extra)
}
