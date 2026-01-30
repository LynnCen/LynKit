# @lynkit/hooks 重构计划

## 当前问题分析

### 1. 构建系统

- **问题**：使用 tsup 单入口打包，`index.js` 包含所有代码
- **影响**：不支持真正的 tree-shaking 和按需引入

### 2. 测试覆盖

- **问题**：测试文件 `__tests__/hook.test.js` 无效（路径错误，内容过时）
- **影响**：无法保证代码质量

### 3. 类型导出不完整

```ts
// 当前只导出了一个类型
export type { ReturnSetStateFn } from './useSetState';

// 缺失：UseIntervalReturn, UsePreviousOptions, UseAsyncState 等
```

### 4. 代码质量问题

| 问题     | 位置                      | 说明                   |
| -------- | ------------------------- | ---------------------- |
| 重复定义 | `useSetState`, `useAsync` | `isFunction` 函数重复  |
| 拼写错误 | `usePrevious`             | `defalutShouldUpdate`  |
| 未导出   | `useAsync`                | index.ts 未导出此 hook |
| 缺少文档 | 全部                      | 缺少完整 JSDoc         |
| any 类型 | 多处                      | `(...args: any[])`     |

### 5. exports 配置

```json
// 当前：只有主入口
"exports": {
  ".": { ... }
}

// 缺失：路径导入支持
// import { useSetState } from '@lynkit/hooks/useSetState'
```

---

## 重构目标

### 核心指标

| 指标         | 当前          | 目标                                  |
| ------------ | ------------- | ------------------------------------- |
| 构建工具     | tsup (bundle) | Vite (preserveModules)                |
| Tree-shaking | ❌            | ✅                                    |
| 测试框架     | 无效          | Vitest + @testing-library/react-hooks |
| 类型导出     | 1 个          | 完整                                  |
| JSDoc 覆盖   | 0%            | 100%                                  |

---

## 改造内容

### Phase 1: 构建系统升级

**目录结构保持不变**：

```
src/
├── useSetState/
│   └── index.ts
├── usePrevious/
│   └── index.ts
├── useInterval/
│   └── index.ts
├── useIsFirstRender/
│   └── index.ts
├── useAsync/
│   └── index.ts
├── usePollingAI/
│   └── index.ts
└── index.ts
```

**产物结构**：

```
es/
├── index.js           # re-export only
├── useSetState/
│   └── index.js
├── usePrevious/
│   └── index.js
└── ...
lib/
├── index.cjs
└── ...
```

**Vite 配置**：

```ts
// vite.config.ts
export default defineConfig({
  plugins: [react(), dts({ outDir: ['es', 'lib'] })],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        { format: 'es', dir: 'es', preserveModules: true },
        { format: 'cjs', dir: 'lib', preserveModules: true },
      ],
    },
  },
});
```

**package.json exports**：

```json
{
  "exports": {
    ".": {
      "types": "./es/index.d.ts",
      "import": "./es/index.js",
      "require": "./lib/index.cjs"
    },
    "./*": {
      "types": "./es/*/index.d.ts",
      "import": "./es/*/index.js",
      "require": "./lib/*/index.cjs"
    }
  }
}
```

### Phase 2: 代码修复

#### 2.1 修复 `useSetState`

- 移除重复的 `isFunction`
- 修复类型定义，移除 `any`
- 添加完整 JSDoc

#### 2.2 修复 `usePrevious`

- 修复拼写错误 `defalutShouldUpdate` → `defaultShouldUpdate`
- 导出类型 `ShouldUpdateFunc`

#### 2.3 补全导出

```ts
// src/index.ts
export { default as useSetState } from './useSetState';
export { default as usePrevious } from './usePrevious';
export { default as useIsFirstRender } from './useIsFirstRender';
export { default as useInterval } from './useInterval';
export { default as useAsync } from './useAsync'; // 新增
export { usePollingAI } from './usePollingAI';

// 类型导出
export type { ReturnSetStateFn } from './useSetState';
export type { ShouldUpdateFunc } from './usePrevious';
export type { AsyncState } from './useAsync';
export type { PollingConfig, PollingState } from './usePollingAI';
```

#### 2.4 创建共享工具

```ts
// src/utils.ts
export function isFunction<T>(value: T): value is T & Function {
  return typeof value === 'function';
}
```

### Phase 3: 测试覆盖

**测试框架**：Vitest + @testing-library/react

**测试文件结构**：

```
src/
├── useSetState/
│   ├── index.ts
│   └── index.test.ts
├── usePrevious/
│   ├── index.ts
│   └── index.test.ts
└── ...
```

**示例测试**：

```ts
// useSetState/index.test.ts
import { renderHook, act } from '@testing-library/react';
import useSetState from '.';

describe('useSetState', () => {
  it('should merge state like class component', () => {
    const { result } = renderHook(() => useSetState({ a: 1, b: 2 }));

    act(() => {
      result.current[1]({ a: 10 });
    });

    expect(result.current[0]).toEqual({ a: 10, b: 2 });
  });
});
```

### Phase 4: 文档完善

每个 hook 添加完整 JSDoc：

````ts
/**
 * 模拟 class 组件的 setState 方法，支持部分更新和回调
 *
 * @param initialState - 初始状态对象
 * @returns [state, setState] - 状态和更新函数
 *
 * @example
 * ```tsx
 * const [state, setState] = useSetState({ name: '', age: 0 });
 *
 * // 部分更新
 * setState({ name: 'John' });
 *
 * // 函数式更新
 * setState(prev => ({ age: prev.age + 1 }));
 *
 * // 带回调
 * setState({ name: 'Jane' }, () => console.log('Updated!'));
 * ```
 */
````

---

## 实施计划

| 阶段    | 任务         | 产出                   |
| ------- | ------------ | ---------------------- |
| Phase 1 | 构建系统升级 | Vite + preserveModules |
| Phase 2 | 代码修复     | 修复类型、拼写、导出   |
| Phase 3 | 测试覆盖     | Vitest 测试套件        |
| Phase 4 | 文档完善     | JSDoc + README         |

---

## 验收标准

- [ ] `es/index.js` 只有 re-export（< 20 行）
- [ ] 支持 `import { useSetState } from '@lynkit/hooks/useSetState'`
- [ ] 所有 hooks 有单元测试
- [ ] 类型导出完整
- [ ] 零 lint 错误
- [ ] README 更新
