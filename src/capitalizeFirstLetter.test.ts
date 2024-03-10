import { describe, test, expect } from 'vitest'
import capitalizeFirstLetter from './capitalize-first-letter'

describe('capitalizeFirstLetter', () => {
  test('the first letter of string should be capitalize', async () => {
    const str = 'yuci'
    expect(capitalizeFirstLetter(str)).toEqual('Yuci')
  })
})
