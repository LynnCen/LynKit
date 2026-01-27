---
sidebar_position: 5
---

# usePrevious

## 简介

`usePrevious` 是一个自定义 Hook，用于保存组件上一次渲染时某个值的快照。它使得在当前渲染中能够访问到上一次渲染的值，对于需要比较当前值与先前值的场景非常有用。

## 使用场景

- 检测特定值的变化并执行相应操作
- 动画和过渡效果实现
- 表单值变化前后的比较
- 实现撤销功能
- 优化渲染决策
- 在依赖项变化前后进行对比分析

## 使用示例

### 基本用法

```jsx
import { useState } from 'react';
import { usePrevious } from '@lynkit/hooks';

function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount !== undefined ? previousCount : 'None'}</p>
      <p>
        {previousCount !== undefined && 
          `Count ${count > previousCount ? 'increased' : 'decreased'} from ${previousCount} to ${count}`
        }
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

### 监控对象变化

```jsx
import { useState, useEffect } from 'react';
import { usePrevious } from '@lynkit/hooks';

function UserProfileMonitor() {
  const [user, setUser] = useState({
    name: 'John',
    email: 'john@example.com',
    role: 'user'
  });
  
  const previousUser = usePrevious(user);
  
  useEffect(() => {
    if (previousUser && user.role !== previousUser.role) {
      console.log(`Role changed from ${previousUser.role} to ${user.role}`);
      // 可能需要更新权限或者通知其他组件
    }
  }, [user, previousUser]);
  
  const promoteUser = () => {
    setUser({ ...user, role: 'admin' });
  };
  
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button onClick={promoteUser}>Promote to Admin</button>
    </div>
  );
}
```

### 实现自动滚动到新内容

```jsx
import { useState, useEffect, useRef } from 'react';
import { usePrevious } from '@lynkit/hooks';

function MessageList() {
  const [messages, setMessages] = useState([]);
  const previousMessagesLength = usePrevious(messages.length);
  const messagesEndRef = useRef(null);
  
  // 当有新消息时自动滚动到底部
  useEffect(() => {
    if (previousMessagesLength !== undefined && messages.length > previousMessagesLength) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length, previousMessagesLength]);
  
  const addMessage = () => {
    const newMessage = `Message ${messages.length + 1}`;
    setMessages([...messages, newMessage]);
  };
  
  return (
    <div>
      <div style={{ height: '200px', overflow: 'auto', border: '1px solid #ccc' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ padding: '8px' }}>
            {message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}
```

## API 属性

### 参数

```jsx
const previousValue = usePrevious(value);
```

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `value` | any | 必填 | 需要追踪先前值的变量 |

### 返回值

| 返回值 | 类型 | 描述 |
| --- | --- | --- |
| `previousValue` | any | 上一次渲染时的值，首次渲染时为 undefined |

## 注意事项

1. **首次渲染时为 undefined**：在组件的首次渲染中，`usePrevious` 返回 `undefined`，因为没有"先前的值"。

2. **更新时机**：先前值的更新发生在每次渲染完成后，通过 `useEffect` 实现，所以当前渲染中可以访问到上一次渲染的值。

3. **深度比较**：对于对象或数组，`usePrevious` 保存的是引用，如果需要深度比较，需要额外实现。

4. **多个值的追踪**：如果需要追踪多个值的历史，可以使用对象包装多个值后传给 `usePrevious`。

5. **与 useRef 结合**：`usePrevious` 内部使用 `useRef` 存储先前值，因此不会触发重新渲染。

6. **性能考虑**：对于大型对象，应谨慎使用，因为它会在内存中保留对象的额外副本。 