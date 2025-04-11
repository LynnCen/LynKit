---
sidebar_position: 1
---

# debounce

## 简介

`debounce` 是一个防抖函数，用于限制函数的执行频率。当事件频繁触发时，防抖函数会在最后一次事件触发后的指定时间后才执行回调函数，忽略前面的所有调用。

## 使用场景

防抖函数常用于以下场景：

- **搜索框输入**：用户输入时，等用户停止输入后再发送请求
- **窗口调整**：浏览器窗口大小改变时，等调整完成后再执行回调
- **按钮提交**：防止用户多次点击提交按钮
- **滚动事件**：优化滚动时的性能
- **表单验证**：用户输入后延迟验证

## 使用示例

### 基本用法

```js
import { debounce } from '@lynkit/api';

// 基础防抖函数
const handleSearch = debounce((searchTerm) => {
  console.log(`搜索：${searchTerm}`);
  // 发送 API 请求
}, 300);

// 在输入框中使用
searchInput.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});
```

### 在 React 中使用

```jsx
import React, { useState, useCallback } from 'react';
import { debounce } from '@lynkit/api';

function SearchBar() {
  const [results, setResults] = useState([]);
  
  // 使用 useCallback 确保防抖函数不会在每次渲染时重新创建
  const debouncedSearch = useCallback(
    debounce(async (term) => {
      const data = await fetchSearchResults(term);
      setResults(data);
    }, 300),
    []
  );
  
  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => debouncedSearch(e.target.value)} 
        placeholder="搜索..." 
      />
      {/* 显示结果 */}
    </div>
  );
}
```

### 带取消功能

```js
import { debounce } from '@lynkit/api';

const debouncedFn = debounce(() => {
  console.log('执行操作');
}, 300);

// 触发操作
button.addEventListener('click', debouncedFn);

// 在适当的时候取消
cancelButton.addEventListener('click', () => {
  debouncedFn.cancel();
});
```

## API 属性

### 参数

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `func` | Function | 必填 | 需要防抖的函数 |
| `wait` | number | 必填 | 等待时间，单位为毫秒 |
| `immediate` | boolean | false | 是否在触发事件后立即执行函数，之后的事件则在等待时间结束后才执行 |

### 返回值

| 类型 | 描述 |
| --- | --- |
| Function | 包装后的防抖函数，具有与原函数相同的参数 |

### 方法

| 方法名 | 描述 |
| --- | --- |
| `cancel()` | 取消延迟的函数调用 |
| `flush()` | 立即执行延迟的函数调用 |

## 注意事项

1. **闭包与内存**：防抖函数会创建闭包，长时间持有对外部变量的引用，可能导致内存泄漏。

2. **this 指向**：在使用防抖函数时，需要注意 `this` 的绑定问题。在类方法或组件方法中使用时，可能需要手动绑定 `this`。

3. **React 中的使用**：在 React 组件中，建议结合 `useCallback` 使用防抖函数，避免不必要的重新创建。

4. **返回值处理**：防抖函数会延迟执行，因此不能直接获取原函数的返回值。如果需要处理返回值，可以使用回调函数或 Promise。

5. **合适的延迟时间**：根据不同场景选择合适的延迟时间：
   - 搜索框输入：300-500ms
   - 窗口调整：100-200ms
   - 按钮点击：200-300ms
