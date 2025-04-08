export let count = 0;

export function increase(n = 1) {
  return (count += n);
}
