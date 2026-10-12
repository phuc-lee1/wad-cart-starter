import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

const baseOptions = {
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000
}

test('empty cart returns zero', () => {
  assert.equal(cartTotal([], baseOptions), 0)
})

test('free shipping at exact threshold', () => {
  const items = [
    { name: 'Bag', price: 250000, qty: 2 }
  ]

  assert.equal(cartTotal(items, baseOptions), 540000)
})

test('shipping applies below threshold', () => {
  const items = [
    { name: 'Bag', price: 499999, qty: 1 }
  ]

  const options = { ...baseOptions, vatRate: 0 }

  assert.equal(cartTotal(items, options), 529999)
})

test('negative price throws RangeError', () => {
  const items = [
    { name: 'Bag', price: -1, qty: 1 }
  ]

  assert.throws(
    () => cartTotal(items, baseOptions),
    RangeError
  )
})

test('fractional quantity throws RangeError', () => {
  const items = [
    { name: 'Bag', price: 100, qty: 1.5 }
  ]

  assert.throws(
    () => cartTotal(items, baseOptions),
    RangeError
  )
})

test('zero quantity throws RangeError', () => {
  const items = [
    { name: 'Bag', price: 100, qty: 0 }
  ]

  assert.throws(
    () => cartTotal(items, baseOptions),
    RangeError
  )
})

test('negative quantity throws RangeError', () => {
  const items = [
    { name: 'Bag', price: 100, qty: -1 }
  ]

  assert.throws(
    () => cartTotal(items, baseOptions),
    RangeError
  )
})

test('rounds final total', () => {
  const items = [
    { name: 'Book', price: 100.6, qty: 1 }
  ]

  const options = {
    ...baseOptions,
    vatRate: 0,
    freeShipFrom: 0
  }

  assert.equal(cartTotal(items, options), 101)
})

test('returns a number', () => {
  const items = [
    { name: 'Book', price: 100, qty: 1 }
  ]

  assert.equal(
    typeof cartTotal(items, baseOptions),
    'number'
  )
})
