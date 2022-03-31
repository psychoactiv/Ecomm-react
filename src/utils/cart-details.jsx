export function calculateCartItems(calculate, discount) {
  const sumToMinus = calculate * Number(`0.${discount}`);
  const discountedPrice = calculate - sumToMinus;
  return [discountedPrice, sumToMinus];
}
