import { format, Locale } from "date-fns";
import { fr } from "date-fns/locale";
import { Locale as FrLocale } from "date-fns/locale";
export function formatDateWithLocale(
  date: Date,
  formatString: string,
  language: Locale
): string {
  return format(date, formatString, { locale: language });
}
