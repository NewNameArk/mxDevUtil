import { calcSeconds } from '../src/date/index'

test('测试时分秒转换成秒', () => {
  expect(calcSeconds('0:1:0')).toBe(60)
})