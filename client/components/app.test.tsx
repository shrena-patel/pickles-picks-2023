//@vitest-environment jsdom
import '@testing-library/jest-dom/vitest'
import { test, expect } from 'vitest'

test('tests for a test', () => {
  expect(1).toBeTruthy()
})

test('tests for a fail', () => {
  expect(1).toBeTypeOf('number')
})