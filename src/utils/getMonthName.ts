export default function getMonthName(
  month: number,
  short = false,
  lower = false,
  upper = false
): string {
  const months = [
    '',
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  let result;

  if (month < 1 || month > 12) {
    result = months[0];
  } else {
    result = months[month];
  }

  if (short) {
    result = result.slice(0, 3);
  }

  if (lower) return result.toLowerCase();
  if (upper) return result.toUpperCase();
  return result;
}
