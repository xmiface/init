export function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomFloatNumber(min: number, max: number) {
  return parseInt(''+ randomNumber(min, max));
}
