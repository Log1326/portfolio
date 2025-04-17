import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs))
}
export function getRandomNumber() {
	return Math.floor(Math.random() * 100) + 1
}
