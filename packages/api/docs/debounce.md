# debounce

防抖函数 - 将多次执行的函数合并成一次执行。

## 介绍

`debounce` 函数用于限制函数的执行频率，当持续触发事件时，函数只会在最后一次触发事件的 N 毫秒后执行一次。

## 类型定义

```typescript
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => ReturnType<T>
```

## 使用示例

```typescript
import { debounce } from '@lynkit/api';

// 基础用法
const handleSearch = debounce((value: string) => {
  console.log('搜索:', value);
}, 300);

// React 组件中使用
function SearchInput() {
  const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('搜索:', e.target.value);
  }, 300);

  return <input onChange={onChange} />;
}
```

## 最佳实践

1. 搜索框输入防抖
```typescript
const handleSearch = debounce((value: string) => {
  api.search(value);
}, 300);
```

2. 窗口调整防抖
```typescript
const handleResize = debounce(() => {
  updateLayout();
}, 150);

window.addEventListener('resize', handleResize);
```

3. 表单提交防抖
```typescript
const handleSubmit = debounce((data: FormData) => {
  api.submit(data);
}, 1000);
```

## 注意事项

1. 选择合适的延迟时间
- 搜索建议：200-300ms
- 窗口调整：150-200ms
- 表单提交：800-1000ms

2. 在 React 组件中使用时，建议配合 useCallback 使用
```typescript
const debouncedFn = useCallback(
  debounce((value) => {
    // 处理逻辑
  }, 300),
  []
);
```

3. 清理工作
```typescript
const debouncedFn = debounce(() => {}, 300);
// 在组件卸载时
window.removeEventListener('resize', debouncedFn);
``` 