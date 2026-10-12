
export function cartTotal(items, options) {
  // Handle empty cart
  if (items.length === 0) {
    return 0
  }

  // Calculate subtotal
  let subtotal = 0

  for (const item of items) {
    // Validate price
    if (item.price < 0) {
      throw new RangeError('price must not be negative')
    }

    // Validate quantity
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('qty must be a positive integer')
    }

    // Add item total
    subtotal += item.price * item.qty
  }

  // Calculate VAT
  const vat = subtotal * options.vatRate

  // Calculate shipping
  const shipping =
    subtotal >= options.freeShipFrom ? 0 : options.shipFee

  // Return rounded total
  return Math.round(subtotal + vat + shipping)
}
