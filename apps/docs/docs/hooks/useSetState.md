---
sidebar_position: 2
---

# useSetState

## 简介

`useSetState` 是一个模拟类组件的 `setState` 方法的自定义 Hook。它允许您使用对象合并的方式更新状态，并且支持回调函数在状态更新后执行。

## 使用场景

- 从类组件迁移到函数组件时，保持原有的 setState 使用习惯
- 管理复杂的对象状态
- 需要部分更新对象状态而不影响其他属性
- 状态更新后需要执行回调函数

## 使用示例

### 基本用法

```jsx
import { useSetState } from '@lynkit/hooks';

function UserProfile() {
  const [state, setState] = useSetState({
    name: 'John',
    age: 25,
    address: {
      city: 'Beijing',
      zipCode: '100000'
    }
  });

  const updateName = () => {
    // 只更新 name 属性，不影响其他属性
    setState({ name: 'Mike' });
  };

  const updateAddress = () => {
    // 只更新 address 对象的 city 属性
    setState({
      address: {
        ...state.address,
        city: 'Shanghai'
      }
    });
  };

  return (
    <div>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <p>City: {state.address.city}</p>
      <p>Zip Code: {state.address.zipCode}</p>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAddress}>Update City</button>
    </div>
  );
}
```

### 使用回调函数

```jsx
import { useSetState } from '@lynkit/hooks';

function Counter() {
  const [state, setState] = useSetState({
    count: 0,
    lastUpdate: null
  });

  const increment = () => {
    setState({ count: state.count + 1 }, () => {
      console.log('Count updated to:', state.count + 1);
    });
  };

  const updateWithTimestamp = () => {
    setState({ lastUpdate: new Date().toISOString() }, () => {
      console.log('Timestamp updated');
    });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Last Update: {state.lastUpdate || 'Never'}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={updateWithTimestamp}>Update Timestamp</button>
    </div>
  );
}
```

### 使用函数式更新

```jsx
import { useSetState } from '@lynkit/hooks';

function TemperatureConverter() {
  const [state, setState] = useSetState({
    celsius: 0,
    fahrenheit: 32
  });

  const updateCelsius = (event) => {
    const celsius = Number(event.target.value);
    setState((prevState) => ({
      celsius,
      fahrenheit: (celsius * 9/5) + 32
    }));
  };

  const updateFahrenheit = (event) => {
    const fahrenheit = Number(event.target.value);
    setState((prevState) => ({
      fahrenheit,
      celsius: (fahrenheit - 32) * 5/9
    }));
  };

  return (
    <div>
      <div>
        <label>
          Celsius:
          <input
            type="number"
            value={state.celsius}
            onChange={updateCelsius}
          />
        </label>
      </div>
      <div>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={state.fahrenheit}
            onChange={updateFahrenheit}
          />
        </label>
      </div>
    </div>
  );
}
```

## API 属性

### 参数

```jsx
const [state, setState] = useSetState(initialState);
```

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `initialState` | Object | 必填 | 初始状态对象 |

### 返回值

| 返回值 | 类型 | 描述 |
| --- | --- | --- |
| `state` | Object | 当前状态对象 |
| `setState` | Function | 更新状态的函数 |

### setState 函数

```jsx
setState(partialState, callback);
```

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `partialState` | Object \| Function | 必填 | 要更新的部分状态或返回新状态的函数 |
| `callback` | Function | - | 状态更新后执行的回调函数 |

## 注意事项

1. **只适用于对象类型的状态**：`useSetState` 只适用于对象类型的状态，不适用于原始类型或数组。

2. **浅合并**：与类组件的 `setState` 类似，`useSetState` 只会在顶层进行浅合并。如果需要更新嵌套属性，需要手动展开对象。

3. **状态不可变性**：虽然 API 设计类似于类组件的 `setState`，但仍然需要遵循 React 的状态不可变性原则。

4. **回调执行时机**：回调函数会在状态更新完成并重新渲染后执行，类似于类组件中的 `setState` 回调。

5. **函数式更新**：当依赖于之前的状态计算新状态时，建议使用函数式更新形式，确保使用最新的状态值。

6. **性能优化**：当状态对象很大时，只更新需要更改的部分可以提高性能。 