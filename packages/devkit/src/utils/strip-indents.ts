export function stripIndents(strings, ...values) {
  return String.raw(strings, ...values)
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .trim();
}
