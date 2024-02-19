export function truncate(text: string, size: number = 150): string {
  if (text.length < size) return text;

  let letterCount: number = 0;
  let result = '';
  const words: string[] = text.split(' ');

  for (let i = 0; i < words.length; i++) {
    letterCount += words[i].length;
    if (letterCount >= size - 3) break;
    result += ' ' + words[i];
  }
  return result + '...';
}
