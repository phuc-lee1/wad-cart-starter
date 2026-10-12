# IA#1 — cartTotal Implementation Brief

## Objective

Implement `cartTotal(items, options)` according to the specification in `README.md`.

## Allowed Files

- `src/cart.js`: Implement the function.
- `test/cart.test.js`: Add unit tests.

Do not modify unrelated files.

## Input Contract

The function receives:

- `items`: An array of objects containing `name`, `price`, and `qty`.
- `options`: An object containing `vatRate`, `freeShipFrom`, and `shipFee`.

## Functional Requirements

1. Calculate subtotal as the sum of `price * qty`.
2. Calculate VAT using `subtotal * options.vatRate`.
3. Apply free shipping when `subtotal >= options.freeShipFrom`.
4. Otherwise, shipping equals `options.shipFee`.
5. Return `0` for an empty cart without VAT or shipping.
6. Throw `RangeError` for a negative price.
7. Throw `RangeError` if quantity is not a positive integer.
8. Round the final total to the nearest whole dong.
9. Return a JavaScript number, not a string.

## Constraints

- Plain JavaScript with Node.js.
- No external dependencies.
- Keep the function signature and export unchanged.
- Do not delete or change the original test to make it pass.
- Do not hardcode the expected result `467400`.
- Follow the rules in `CLAUDE.md`.

## Verification

- Preserve the starter test.
- Add tests for the empty cart.
- Add tests for the shipping threshold.
- Add tests for invalid prices and quantities.
- Verify rounding and return type.
- Run `npm test` and `npm run check`.
- Review all changes using `git diff`.

Explain the code and any design decisions so I can understand the implementation.