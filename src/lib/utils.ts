import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function safeMerge<T extends object>(target: T, source: Partial<T>) {
  for (const key in source) {
    if (source[key] !== undefined) {
      target[key] = source[key]!
    }
  }
}

/**
 * Parse une chaîne JSON de manière sécurisée en gérant les erreurs
 * @param jsonString La chaîne JSON à parser
 * @param fallback Valeur par défaut à retourner en cas d'erreur (optionnel)
 * @returns L'objet parsé ou la valeur fallback en cas d'erreur
 */
export function safeJSONParse<T>(jsonString: string, fallback?: T): T | undefined {
  try {
    return JSON.parse(jsonString) as T
  } catch (error) {
    console.error('Error parsing JSON:', error)
    return fallback
  }
}
