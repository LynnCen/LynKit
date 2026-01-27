---
sidebar_position: 6
---

# useIsFirstRender

## 简介

`useIsFirstRender` 是一个简单而实用的自定义 Hook，用于判断当前是否是组件的首次渲染。它返回一个布尔值，在组件的第一次渲染中返回 `true`，之后的所有渲染中返回 `false`。

## 使用场景

- 在首次渲染时执行特定逻辑，后续渲染时避免执行
- 区分组件的初始化和更新阶段
- 优化性能，避免在每次更新时执行昂贵的操作
- 实现只在组件初始化时显示的引导或提示
- 与其他 Hook 结合使用，为它们提供渲染上下文

## 使用示例

### 基本用法

```jsx
import { useState } from 'react';
import { useIsFirstRender } from '@lynkit/hooks';

function ComponentWithInitialEffect() {
  const isFirstRender = useIsFirstRender();
  const [count, setCount] = useState(0);
  
  console.log(`Is first render: ${isFirstRender}`);
  
  // 首次渲染时执行一些特定逻辑
  if (isFirstRender) {
    console.log('This is the first render of the component');
    // 初始化逻辑，只会执行一次
  }
  
  return (
    <div>
      <p>Check console to see render information</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 跳过首次渲染的副作用

```jsx
import { useState, useEffect } from 'react';
import { useIsFirstRender } from '@lynkit/hooks';

function DataSyncComponent({ id }) {
  const [data, setData] = useState(null);
  const isFirstRender = useIsFirstRender();
  
  // 当 id 改变时同步数据，但跳过首次渲染
  useEffect(() => {
    if (isFirstRender) {
      // 首次渲染时执行初始化逻辑
      console.log('Initializing component with id:', id);
      fetchInitialData(id).then(setData);
    } else {
      // 后续渲染时，当 id 变化时同步数据
      console.log('Id changed, syncing data for new id:', id);
      synchronizeData(id).then(setData);
    }
  }, [id, isFirstRender]);
  
  return (
    <div>
      <p>Current ID: {id}</p>
      <p>Data: {data ? JSON.stringify(data) : 'Loading...'}</p>
    </div>
  );
}

// 模拟函数
function fetchInitialData(id) {
  return Promise.resolve({ id, status: 'initial' });
}

function synchronizeData(id) {
  return Promise.resolve({ id, status: 'synced' });
}
```

### 与自定义 Hook 结合使用

```jsx
import { useState } from 'react';
import { useIsFirstRender, useUpdateEffect } from '@lynkit/hooks';

function Forms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const isFirstRender = useIsFirstRender();
  
  // 表单验证，跳过首次渲染
  useUpdateEffect(() => {
    // 这是使用 useUpdateEffect 的另一种替代方式
    validateForm(formData);
  }, [formData]);
  
  // 或者使用 isFirstRender 手动控制
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    if (!isFirstRender) {
      const validationErrors = validateForm(formData);
      setErrors(validationErrors);
    }
  }, [formData, isFirstRender]);
  
  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    // 更多验证逻辑...
    return errors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      
      <div>
        <label>Message:</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
        />
      </div>
    </div>
  );
}
```

## API 属性

### 参数

```jsx
const isFirstRender = useIsFirstRender();
```

useIsFirstRender 不接受任何参数。

### 返回值

| 返回值 | 类型 | 描述 |
| --- | --- | --- |
| `isFirstRender` | boolean | 如果是组件的首次渲染则返回 true，否则返回 false |

## 注意事项

1. **状态保存**：该 Hook 使用 `useRef` 内部保存渲染状态，不会导致组件重新渲染。

2. **与 useEffect 的区别**：与 `useEffect` 依赖数组为空的情况不同，`useIsFirstRender` 使您能够在函数组件的主体中访问此信息。

3. **条件渲染**：可以用于条件渲染逻辑，但应避免在渲染函数中过度依赖此状态。

4. **组件重挂载**：如果组件被卸载然后重新挂载，`useIsFirstRender` 会重新返回 `true`，因为它是一个新的组件实例。

5. **Hook 规则**：遵循 React Hooks 的使用规则，不要在循环、条件语句或嵌套函数中调用此 Hook。

6. **与其他渲染判断 Hook 的结合**：可以与 `useUpdateEffect` 等 Hook 结合使用，实现更复杂的渲染控制逻辑。 