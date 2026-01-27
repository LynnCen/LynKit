---
sidebar_position: 7
---

# useInterval

## 简介

`useInterval` 是一个自定义 Hook，用于在 React 组件中安全地设置和管理定时器。它提供了对 `setInterval` 的封装，解决了在函数组件中使用定时器的常见问题，如内存泄漏和闭包陷阱。该 Hook 还支持动态调整间隔时间和暂停/恢复定时器的功能。

## 使用场景

- 需要定期执行的操作，如轮询 API
- 创建倒计时或计时器
- 实现自动滚动或轮播效果
- 定期更新显示的数据
- 动画和游戏循环
- 需要能暂停和恢复的周期性任务

## 使用示例

### 基本用法

```jsx
import { useState } from 'react';
import { useInterval } from '@lynkit/hooks';

function Counter() {
  const [count, setCount] = useState(0);
  
  // 每秒增加计数
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  
  return <div>Count: {count}</div>;
}
```

### 可控的定时器

```jsx
import { useState } from 'react';
import { useInterval } from '@lynkit/hooks';

function ControlledTimer() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);
  
  // 可以通过设置 delay 为 null 来暂停定时器
  useInterval(() => {
    setCount(count + 1);
  }, isRunning ? delay : null);
  
  const handleDelayChange = (e) => {
    setDelay(Number(e.target.value));
  };
  
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <label>
          Delay (ms):
          <input 
            type="number" 
            value={delay} 
            onChange={handleDelayChange} 
            min="10"
            step="100"
          />
        </label>
      </div>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}
```

### 轮询 API 数据

```jsx
import { useState } from 'react';
import { useInterval } from '@lynkit/hooks';

function DataPolling() {
  const [data, setData] = useState(null);
  const [isPolling, setIsPolling] = useState(true);
  const [pollInterval, setPollInterval] = useState(5000);
  const [lastUpdated, setLastUpdated] = useState(null);
  
  // 定时获取最新数据
  useInterval(() => {
    console.log('Fetching data...');
    fetchData().then(newData => {
      setData(newData);
      setLastUpdated(new Date().toLocaleTimeString());
    });
  }, isPolling ? pollInterval : null);
  
  const fetchData = async () => {
    // 模拟 API 请求
    const response = await fetch('/api/data');
    return response.json();
  };
  
  const togglePolling = () => {
    setIsPolling(!isPolling);
  };
  
  const changePollInterval = (e) => {
    setPollInterval(Number(e.target.value) * 1000);
  };
  
  return (
    <div>
      <h2>Data Polling Example</h2>
      
      <div>
        {data ? (
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <p>Last updated: {lastUpdated}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      
      <div>
        <label>
          Poll every:
          <select value={pollInterval / 1000} onChange={changePollInterval}>
            <option value="1">1 second</option>
            <option value="5">5 seconds</option>
            <option value="10">10 seconds</option>
            <option value="30">30 seconds</option>
          </select>
        </label>
      </div>
      
      <button onClick={togglePolling}>
        {isPolling ? 'Stop Polling' : 'Start Polling'}
      </button>
    </div>
  );
}
```

## API 属性

### 参数

```jsx
useInterval(callback, delay);
```

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `callback` | Function | 必填 | 要定期执行的函数 |
| `delay` | number \| null | 必填 | 执行间隔（毫秒），设置为 null 时暂停定时器 |

### 返回值

useInterval 不返回任何值。

## 注意事项

1. **闭包问题**：`useInterval` 内部使用 `useRef` 来存储最新的回调函数，从而解决 React 函数组件中的闭包问题，确保定时器始终使用最新的 props 和 state。

2. **组件卸载时清理**：Hook 会在组件卸载时自动清除定时器，防止内存泄漏。

3. **动态调整间隔**：可以动态更改 `delay` 参数，定时器会自动使用新的间隔时间。

4. **暂停/恢复功能**：通过将 `delay` 设置为 `null` 可以暂停定时器，设置回数值可以恢复。

5. **性能考虑**：避免设置过短的间隔时间，可能会导致性能问题。对于需要高精度定时的情况，考虑使用 `requestAnimationFrame`。

6. **不必要的重新渲染**：`useInterval` 不会导致额外的组件重新渲染，除非回调函数中更新了状态。 