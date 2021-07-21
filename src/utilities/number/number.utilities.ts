export function getRandomInt(min: number, max: number) {
  //The maximum is exclusive and the minimum is inclusive.
  return Math.floor(Math.random() * (max - min) + min);
}
