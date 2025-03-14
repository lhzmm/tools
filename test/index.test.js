import {multiply,add,subtract,floatToFraction} from '../src/arithmetic'

test('验证精度乘法',() => {
  expect(multiply(5,2,4)).toBe(40)
})
test('验证精度加法',() => {
  expect(add(5,2,4)).toBe(11)
})
test('验证精度减法',() => {
  expect(subtract(25,2,4)).toBe(19)
})
test('验证小数转分数',() => {
  expect(floatToFraction(5.2)).toBe([26,5])
})