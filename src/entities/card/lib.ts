import { colors } from "./constants";

export function get_rand_color() {
  const keys = Object.keys(colors) as [keyof typeof colors];

  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];

  return colors[randomKey];
}
