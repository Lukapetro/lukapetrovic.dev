export default function pluralize(count, noun, suffix = 's') {
  if (!count) return '--'
  return `${count} ${noun}${Number(count) !== 1 ? suffix : ''}`
}