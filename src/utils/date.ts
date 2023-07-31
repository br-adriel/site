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

export const monthSelectOptionsPtBr = [
  { text: 'Janeiro', value: 1 },
  { text: 'Fevereiro', value: 2 },
  { text: 'Março', value: 3 },
  { text: 'Abril', value: 4 },
  { text: 'Maio', value: 5 },
  { text: 'Junho', value: 6 },
  { text: 'Julho', value: 7 },
  { text: 'Agosto', value: 8 },
  { text: 'Setembro', value: 9 },
  { text: 'Outubro', value: 10 },
  { text: 'Novembro', value: 11 },
  { text: 'Dezembro', value: 12 },
];
