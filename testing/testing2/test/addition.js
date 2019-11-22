import test from 'ava'
import { sum } from '/Users/zuni4ka/Projects/jscc2019-master/testing/library.js'

test('sum of 0.1 and 0.2 should return 0.3', t => {
    const actualResult = sum(0.1, 0.2)
    const expectedResult = 0.3
    t.is(actualResult, expectedResult)
})

test('sum of 2 and 2 should return 4', t => {
    const actualResult = sum(2, 2)
    const expectedResult = 4
    t.is(actualResult, expectedResult)
})

test('sum of test and manual should return test manual', t => {
    const actualResult = sum('test', 'manual')
    const expectedResult = 'test manual'
    t.is(actualResult, expectedResult)
})