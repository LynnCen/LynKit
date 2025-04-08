/**
 * 防抖函数 - 将多次执行的函数合并成一次执行
 * @param func 需要防抖的函数
 * @param wait 等待时间(ms)
 * @returns 返回一个包装后的防抖函数
 * @example
 * ```ts
 * const debouncedFn = debounce(() => {
 *   console.log('执行')
 * }, 1000)
 * ```
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => ReturnType<T> {

  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      return func.apply(context, args);
    }, wait);

    return func.apply(context, args);
  };
}