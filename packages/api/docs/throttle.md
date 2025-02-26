# throttle

节流函数 - 限制函数在一定时间内只能执行一次。

## 介绍

`throttle` 函数用于限制函数的执行频率，保证函数在指定的时间间隔内最多执行一次。

## 类型定义

```typescript
function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => ReturnType<T>
```

## 使用示例

```typescript
import { throttle } from '@lynkit/api';

// 基础用法
const handleScroll = throttle(() => {
  console.log('滚动位置:', window.scrollY);
}, 100);

// React 组件中使用
function ScrollTracker() {
  const onScroll = throttle(() => {
    trackScrollPosition();
  }, 100);

  return <div onScroll={onScroll}>{/* 内容 */}</div>;
}
```

## 最佳实践

1. 滚动事件节流
```typescript
const handleScroll = throttle(() => {
  calculateScrollPosition();
}, 100);

window.addEventListener('scroll', handleScroll);
```

2. 频繁点击节流
```typescript
const handleClick = throttle(() => {
  submitData();
}, 1000);
```

3. 实时数据更新节流
```typescript
const updateData = throttle((newData) => {
  api.update(newData);
}, 500);
```

## 注意事项

1. 选择合适的时间间隔
- 滚动事件：50-100ms
- 窗口调整：100-200ms
- 数据更新：500-1000ms

2. React 组件中使用
```typescript
const throttledFn = useCallback(
  throttle(() => {
    // 处理逻辑
  }, 100),
  []
);
```

3. 及时清理
```typescript
const throttledFn = throttle(() => {}, 100);
// 组件卸载时
window.removeEventListener('scroll', throttledFn);
``` 