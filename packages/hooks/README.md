# @lynkit/hooks

高质量的 React Hooks 工具库，支持 Tree-shaking 和按需引入。

## 安装

```bash
npm install @lynkit/hooks
# or
pnpm add @lynkit/hooks
```

## 特性

- **Tree-shaking** - 只打包使用的 hooks
- **TypeScript** - 完整的类型定义
- **SSR 兼容** - 支持服务端渲染
- **零依赖** - 仅依赖 React

## Hooks 列表

| Hook               | 描述                                     |
| ------------------ | ---------------------------------------- |
| `useSetState`      | 类组件风格的状态管理，支持部分更新和回调 |
| `usePrevious`      | 获取状态的前一个值                       |
| `useIsFirstRender` | 判断是否为首次渲染                       |
| `useInterval`      | 声明式的 setInterval                     |
| `useAsync`         | 管理异步操作状态                         |
| `usePollingAI`     | 支持指数退避的智能轮询                   |

## 使用方式

### 方式一：命名导入（推荐）

```tsx
import { useSetState, usePrevious } from '@lynkit/hooks';
```

### 方式二：路径导入

```tsx
import useSetState from '@lynkit/hooks/useSetState';
import usePrevious from '@lynkit/hooks/usePrevious';
```

## API 文档

### useSetState

模拟 class 组件的 `setState` 方法，支持部分更新和回调。

```tsx
const [state, setState] = useSetState({ name: '', age: 0 });

// 部分更新（自动合并）
setState({ name: 'John' });

// 函数式更新
setState((prev) => ({ age: prev.age + 1 }));

// 带回调（状态更新后执行）
setState({ name: 'Jane' }, () => console.log('Updated!'));
```

**类型定义：**

```ts
function useSetState<T extends object>(initialState: T | (() => T)): [T, SetStateFn<T>];

type SetStateFn<T> = (state: Partial<T> | ((prev: T) => Partial<T>), callback?: () => void) => void;
```

---

### usePrevious

获取状态的前一个值。

```tsx
const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

console.log(`Current: ${count}, Previous: ${prevCount}`);

// 自定义比较函数
const prevValue = usePrevious(value, (prev, next) => {
  return prev !== undefined && Math.abs(next - prev) > 5;
});
```

**类型定义：**

```ts
function usePrevious<T>(state: T, shouldUpdate?: ShouldUpdateFunc<T>): T | undefined;

type ShouldUpdateFunc<T> = (prev: T | undefined, next: T) => boolean;
```

---

### useIsFirstRender

判断是否为组件首次渲染。

```tsx
const isFirstRender = useIsFirstRender();

useEffect(() => {
  if (!isFirstRender) {
    // 跳过首次渲染的副作用
    fetchData();
  }
}, [dependency]);
```

---

### useInterval

声明式的 `setInterval`，支持动态调整间隔和暂停。

```tsx
const [count, setCount] = useState(0);
const [isRunning, setIsRunning] = useState(true);

// 每秒增加计数，传入 null 可暂停
useInterval(
  () => {
    setCount((c) => c + 1);
  },
  isRunning ? 1000 : null
);
```

---

### useAsync

管理异步操作状态。

```tsx
const { loading, data, error, trigger } = useAsync(fetchUserList);

// 手动触发
<button onClick={() => trigger()}>加载数据</button>;

// 立即执行
const { loading, data } = useAsync(fetchUserList, undefined, true);

// 带参数
const { trigger } = useAsync((id: string) => fetchUser(id));
trigger('user-123');
```

**类型定义：**

```ts
interface AsyncState<T> {
  loading: boolean;
  data?: T;
  isError: boolean;
  error?: Error;
}

interface UseAsyncReturn<T, A extends unknown[]> extends AsyncState<T> {
  trigger: (...args: A) => Promise<T | void>;
}
```

---

### usePollingAI

支持指数退避的智能轮询。

```tsx
const { start, stop, isPolling, attempts, error } = usePollingAI(
  async () => {
    const result = await checkTaskStatus(taskId);
    if (result.status === 'completed') {
      stop();
    }
  },
  {
    initialInterval: 2000,    // 初始间隔 2s
    maxInterval: 30000,       // 最大间隔 30s
    backoffFactor: 2,         // 退避因子
    maxAttempts: 10,          // 最大重试次数
    onSuccess: () => {},
    onError: (err) => {},
  }
);

<button onClick={start}>开始轮询</button>
<button onClick={stop}>停止</button>
```

**特性：**

- 成功后重置间隔
- 失败后指数退避（间隔翻倍）
- 可配置最大重试次数

## License

MIT
