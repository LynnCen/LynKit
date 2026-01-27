---
sidebar_position: 2
---

# throttle

## 简介

`throttle` 是一个节流函数，用于限制函数的执行频率。与防抖不同，节流函数会确保函数在指定的时间间隔内最多只执行一次，而不管事件触发了多少次。

## 使用场景

节流函数常用于以下场景：

- **滚动事件**：优化滚动时的性能，如懒加载、无限滚动
- **鼠标移动**：处理鼠标移动事件，如拖拽、画布操作
- **游戏中的按键操作**：限制按键事件触发频率
- **频繁点击**：限制用户点击按钮的频率
- **实时搜索**：限制向服务器发送请求的频率

## 使用示例

### 基本用法

```js
import { throttle } from '@lynkit/api';

// 基础节流函数
const handleScroll = throttle(() => {
  console.log('滚动位置:', window.scrollY);
  // 执行操作
}, 200);

// 在滚动事件中使用
window.addEventListener('scroll', handleScroll);
```

### 在 React 中使用

```jsx
import React, { useState, useCallback } from 'react';
import { throttle } from '@lynkit/api';

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  
  // 使用 useCallback 确保节流函数不会在每次渲染时重新创建
  const throttledLoadMore = useCallback(
    throttle(() => {
      // 检查是否到达底部
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        // 加载更多数据
        fetchMoreItems().then(newItems => {
          setItems(prev => [...prev, ...newItems]);
        });
      }
    }, 300),
    []
  );
  
  React.useEffect(() => {
    window.addEventListener('scroll', throttledLoadMore);
    
    return () => {
      window.removeEventListener('scroll', throttledLoadMore);
    };
  }, [throttledLoadMore]);
  
  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="item">{item.name}</div>
      ))}
    </div>
  );
}
```

### 带取消功能

```js
import { throttle } from '@lynkit/api';

const throttledFn = throttle(() => {
  console.log('执行操作');
}, 300);

// 触发操作
moveElement.addEventListener('mousemove', throttledFn);

// 在适当的时候取消
stopButton.addEventListener('click', () => {
  throttledFn.cancel();
});
```

## API 属性

### 参数

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `func` | Function | 必填 | 需要节流的函数 |
| `wait` | number | 必填 | 等待时间，单位为毫秒 |
| `options` | Object | {} | 配置选项 |
| `options.leading` | boolean | true | 是否在开始时立即执行函数 |
| `options.trailing` | boolean | true | 是否在等待时间结束后执行函数 |

### 返回值

| 类型 | 描述 |
| --- | --- |
| Function | 包装后的节流函数，具有与原函数相同的参数 |

### 方法

| 方法名 | 描述 |
| --- | --- |
| `cancel()` | 取消延迟的函数调用 |
| `flush()` | 立即执行延迟的函数调用 |

## 注意事项

1. **选择合适的时间间隔**：根据不同场景选择合适的节流时间：
   - 滚动事件：50-200ms
   - 鼠标移动：50-100ms
   - 窗口调整：100-200ms

2. **leading 和 trailing 选项**：
   - 当 `leading` 为 true 时，会在第一次触发事件时立即执行函数
   - 当 `trailing` 为 true 时，会在等待时间结束后执行函数
   - 两者都为 false 时，函数不会被执行

3. **在 React 中的使用**：结合 `useCallback` 和 `useEffect` 使用节流函数，确保正确的依赖关系和清理工作。

4. **事件监听器清理**：在使用节流函数处理事件时，记得在组件卸载时移除事件监听器，避免内存泄漏。

5. **异步操作**：在节流函数中处理异步操作时，需要注意竞态条件，确保数据的一致性。
