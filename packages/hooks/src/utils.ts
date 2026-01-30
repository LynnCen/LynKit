/**
 * 判断值是否为函数
 * @param value - 要检查的值
 * @returns 是否为函数
 */
export function isFunction<T>(value: T): value is T & ((...args: unknown[]) => unknown) {
  return typeof value === 'function';
}
