/**
 * Returns a random integer between min (included)
 * and max (included).
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random float between min and max,
 * including min, but excluding max.
 */
export function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * a better modulo. Handles negatives correctly.
 */
export function mod(n, m) {
  return ((n % m) + m) % m;
}
