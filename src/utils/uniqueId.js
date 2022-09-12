export default function uniqeIds () {
  return btoa(Math.random()).substring(0, 12)
}
