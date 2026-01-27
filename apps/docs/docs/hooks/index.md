---
sidebar_position: 1
---

# 介绍

LynKit Hooks 是一个实用的 React Hooks 集合，旨在简化 React 应用开发，提高代码复用性和可维护性。这些钩子涵盖了状态管理、DOM 交互、异步操作等多个方面。

## 特点

- **专注解决方案** - 每个 Hook 专注解决特定问题
- **轻量级** - 无外部依赖，体积小
- **类型安全** - 完整的 TypeScript 类型定义
- **测试覆盖** - 全面的单元测试保证质量
- **文档完善** - 详细的使用示例和 API 说明

## Hook 列表

### 状态管理

- [useSetState](/docs/hooks/useSetState) - 模拟类组件的 setState 方法
- [useBoolean](/docs/hooks/useBoolean) - 管理布尔值状态
- [useCounter](/docs/hooks/useCounter) - 计数器状态管理
- [useList](/docs/hooks/useList) - 列表状态管理
- [useMap](/docs/hooks/useMap) - 映射状态管理
- [useSet](/docs/hooks/useSet) - 集合状态管理
- [useQueue](/docs/hooks/useQueue) - 队列状态管理
- [useToggle](/docs/hooks/useToggle) - 开关状态管理

### 生命周期

- [useMount](/docs/hooks/useMount) - 组件挂载时执行
- [useUnmount](/docs/hooks/useUnmount) - 组件卸载时执行
- [useUpdateEffect](/docs/hooks/useUpdateEffect) - 跳过首次渲染的 useEffect
- [useIsFirstRender](/docs/hooks/useIsFirstRender) - 判断是否是首次渲染

### DOM 交互

- [useClickAway](/docs/hooks/useClickAway) - 监听元素外部点击
- [useScroll](/docs/hooks/useScroll) - 监听滚动事件
- [useHover](/docs/hooks/useHover) - 监听鼠标悬停
- [useFocus](/docs/hooks/useFocus) - 管理元素焦点
- [useInViewport](/docs/hooks/useInViewport) - 检测元素是否在视口内

### 网络和异步

- [useRequest](/docs/hooks/useRequest) - 处理异步请求
- [useFetch](/docs/hooks/useFetch) - 封装 fetch API
- [usePollingAI](/docs/hooks/usePollingAI) - AI 轮询功能

### 时间和定时器

- [useInterval](/docs/hooks/useInterval) - 安全的 setInterval
- [useTimeout](/docs/hooks/useTimeout) - 安全的 setTimeout
- [useThrottleFn](/docs/hooks/useThrottleFn) - 函数节流
- [useDebounceFn](/docs/hooks/useDebounceFn) - 函数防抖

### 杂项

- [usePrevious](/docs/hooks/usePrevious) - 获取上一次渲染的值
- [useLocalStorage](/docs/hooks/useLocalStorage) - localStorage 状态同步
- [useSessionStorage](/docs/hooks/useSessionStorage) - sessionStorage 状态同步
- [useMedia](/docs/hooks/useMedia) - 媒体查询钩子
- [useForceUpdate](/docs/hooks/useForceUpdate) - 强制组件重新渲染

## 安装

```bash
npm install @lynkit/hooks
```

## 使用示例

### useSetState

```jsx
import { useSetState } from '@lynkit/hooks';

function UserForm() {
  const [state, setState] = useSetState({
    name: '',
    email: '',
    age: 0,
    address: {
      city: '',
      street: ''
    }
  });

  const handleNameChange = (e) => {
    setState({ name: e.target.value });
  };

  const handleAddressChange = (e) => {
    setState({
      address: {
        ...state.address,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <div>
      <input
        value={state.name}
        onChange={handleNameChange}
        placeholder="姓名"
      />
      <input
        name="city"
        value={state.address.city}
        onChange={handleAddressChange}
        placeholder="城市"
      />
      <input
        name="street"
        value={state.address.street}
        onChange={handleAddressChange}
        placeholder="街道"
      />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
```

### useInterval

```jsx
import { useState } from 'react';
import { useInterval } from '@lynkit/hooks';

function Timer() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    setCount(count + 1);
  }, isRunning ? delay : null);

  return (
    <div>
      <h1>计数: {count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '暂停' : '继续'}
      </button>
      <input
        type="number"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        disabled={!isRunning}
      />
    </div>
  );
}
```

### usePrevious

```jsx
import { useState } from 'react';
import { usePrevious } from '@lynkit/hooks';

function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>当前值: {count}</p>
      <p>上一次的值: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

## TypeScript 支持

所有 Hooks 都提供了完整的 TypeScript 类型定义：

```tsx
import { useSetState } from '@lynkit/hooks';

interface User {
  name: string;
  age: number;
  skills: string[];
}

function UserProfile() {
  // 类型安全的状态管理
  const [user, setUser] = useSetState<User>({
    name: 'John',
    age: 25,
    skills: ['React', 'TypeScript']
  });

  // ...
}
```