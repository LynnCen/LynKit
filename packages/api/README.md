# @lynkit/api

轻量级工具函数库，提供常用的时间控制、缓存、重试等功能。

## 特性

- **Tree-shaking** - 支持按需导入
- **TypeScript** - 完整的类型定义
- **零依赖** - 无外部依赖
- **双格式** - ESM + CommonJS

## 安装

```bash
pnpm add @lynkit/api
```

## API

### debounce - 防抖

```ts
import { debounce } from '@lynkit/api';
// 或路径导入
import { debounce } from '@lynkit/api/debounce';

const debouncedSearch = debounce((query: string) => {
  console.log('搜索:', query);
}, 300);

// 带选项
const debouncedSave = debounce(save, 1000, {
  leading: true, // 立即执行一次
  trailing: true, // 结束后执行
});

// 方法
debouncedSearch.cancel(); // 取消
debouncedSearch.flush(); // 立即执行
```

### throttle - 节流

```ts
import { throttle } from '@lynkit/api';

const throttledScroll = throttle(() => {
  console.log('滚动');
}, 200);

window.addEventListener('scroll', throttledScroll);

// 方法
throttledScroll.cancel();
```

### LRUCache - LRU 缓存

```ts
import { LRUCache } from '@lynkit/api';

const cache = new LRUCache<string>(100); // 容量 100

cache.set('key', 'value');
cache.get('key'); // 'value'
cache.has('key'); // true
cache.delete('key');
cache.clear();
cache.size; // 当前大小
cache.capacity; // 容量
cache.keys(); // 按最近使用排序
```

### ExponentialBackoff - 指数退避

```ts
import { ExponentialBackoff, retry } from '@lynkit/api';

// 手动控制
const backoff = new ExponentialBackoff({
  baseInterval: 1000,
  maxInterval: 30000,
  maxRetries: 5,
  jitter: 0.1,
});

const delay = backoff.nextDelay(); // 1000, 2000, 4000...
backoff.reset();
backoff.canRetry; // 是否可继续重试
backoff.retryCount; // 当前重试次数

// 简化用法
const result = await retry(() => fetch('/api/data'), { maxRetries: 3 });
```

## 路径导入

支持独立导入以获得更好的 tree-shaking：

```ts
import { debounce } from '@lynkit/api/debounce';
import { throttle } from '@lynkit/api/throttle';
import { LRUCache } from '@lynkit/api/LRUCache';
import { ExponentialBackoff } from '@lynkit/api/ExponentialBackoff';
```

## 许可证

[MIT](./LICENSE)
