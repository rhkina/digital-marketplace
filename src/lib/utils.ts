import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Poppins as FontSans } from 'next/font/google'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'JPY' | 'GBP' | 'BDT'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'USD', notation = 'compact' } = options
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(numericPrice)
}

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  adjustFontFallback: false,
})
