export default function stringsToGoogleSearchQ(strings = []) {
  return strings
    .map((str) => str.replace(/\s/g, '+'))
    .join('+')
}
