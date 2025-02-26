# @lynkit/hooks

一个实用的 React Hooks 工具库，提供了一系列常用的自定义 Hooks，帮助你更高效地开发 React 应用。

## 📦 安装

```bash
npm install @lynkit/hooks
```

## 🎯 特性

- 📦 开箱即用
- 🎨 支持 TypeScript
- 🔥 支持按需加载
- 📚 详细的文档和示例
- ⚡️ 轻量级

## 📚 Hooks 列表

### useSetState

一个模拟类组件 `setState` 行为的 Hook，让函数组件也能像类组件一样方便地管理状态。

#### 基础用法

```typescript
import { useSetState } from '@lynkit/hooks';

function Demo() {
  const [state, setState] = useSetState({
    hello: 'world',
    count: 0,
  });

  return (
    <div>
      <p>hello: {state.hello}</p>
      <p>count: {state.count}</p>
      <button onClick={() => setState({ count: state.count + 1 })}>
        count + 1
      </button>
    </div>
  );
}
```

#### API

```typescript
const [state, setState] = useSetState<T extends object>(initialState: T);
```

##### 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initialState | 初始状态值 | `T` | - |

##### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| state | 当前状态 | `T` |
| setState | 更新状态的函数 | `(state: Partial<T> \| ((prevState: T) => Partial<T>), callback?: () => void) => void` |

#### 进阶用法

1. 对象方式更新：
```typescript
setState({ hello: 'lynkit' });
```

2. 函数方式更新：
```typescript
setState((prev) => ({ count: prev.count + 1 }));
```

3. 带回调的更新：
```typescript
setState(
  { count: 100 },
  () => { console.log('状态已更新') }
);
```

#### 最佳实践

1. 表单状态管理：
```typescript
const [form, setForm] = useSetState({
  username: '',
  password: '',
  remember: false,
});

// 更新单个字段
setForm({ username: 'lynn' });

// 批量更新
setForm({
  username: 'lynn',
  remember: true,
});
```

2. 异步操作状态管理：
```typescript
const [requestState, setRequestState] = useSetState({
  loading: false,
  data: null,
  error: null,
});

const fetchData = async () => {
  setRequestState({ loading: true });
  try {
    const data = await api.getData();
    setRequestState({ loading: false, data });
  } catch (error) {
    setRequestState({ loading: false, error });
  }
};
```

#### 注意事项

1. 初始值必须是一个对象
2. 更新时会自动合并对象，不会覆盖未提及的字段
3. 回调函数会在状态实际更新后执行
4. 不要在回调函数中直接使用更新前的 state 值

## 🤝 贡献指南

欢迎提交 issue 和 Pull Request 帮助我们改进代码。

## 📄 许可证

[ISC](LICENSE)
