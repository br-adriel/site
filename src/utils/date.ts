export function getShortMonthName(
  month: number,
  locale: string = 'pt-BR'
): string {
  const monthName = new Date(`2020-${month}-15`)
    .toLocaleString(locale, { month: 'short' })
    .split('');
  monthName[0] = monthName[0].toLocaleUpperCase();
  return monthName.join('');
}
