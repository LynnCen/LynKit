# LRU 缓存

## 简介

LRU（Least Recently Used，最近最少使用）缓存是一种缓存淘汰策略，它会在缓存空间不足时移除最近最少使用的项目。LRU 缓存保持了一个按最近访问时间排序的项目列表，当缓存满时，会移除列表尾部（最久未使用）的项目。

## 使用场景

LRU 缓存适用于以下场景：

- **前端数据缓存**：缓存 API 响应数据，减少网络请求
- **路由缓存**：保存最近访问的路由组件
- **图片缓存**：管理已加载图片的内存占用
- **计算结果缓存**：缓存耗时计算的结果
- **频繁访问的静态数据**：如配置信息、用户首选项等

## 使用示例

### 基本用法

```js
import { LRUCache } from '@lynkit/api';

// 创建一个容量为 2 的 LRU 缓存
const cache = new LRUCache(2);

// 添加键值对
cache.put('key1', 'value1');
cache.put('key2', 'value2');

// 获取值
console.log(cache.get('key1')); // 输出: value1

// 当添加第三个键值对时，会移除最近最少使用的项目
cache.put('key3', 'value3');

// 此时 key2 已被移除，因为添加 key3 前，key1 是最近被访问的
console.log(cache.get('key2')); // 输出: undefined
console.log(cache.get('key3')); // 输出: value3
```

### 在 React 中使用

```jsx
import React, { useState, useEffect } from 'react';
import { LRUCache } from '@lynkit/api';

// 创建一个全局 LRU 缓存，用于缓存 API 响应
const apiCache = new LRUCache(50);

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 尝试从缓存获取用户数据
    const cachedUser = apiCache.get(`user_${userId}`);
    
    if (cachedUser) {
      setUser(cachedUser);
      setLoading(false);
    } else {
      // 缓存未命中，从 API 获取
      setLoading(true);
      
      fetchUserData(userId)
        .then(data => {
          // 将用户数据存入缓存
          apiCache.put(`user_${userId}`, data);
          setUser(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userId]);

  if (loading) return <div>加载中...</div>;
  if (!user) return <div>未找到用户</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* 其他用户信息 */}
    </div>
  );
}
```

### 缓存复杂对象和计算结果

```js
import { LRUCache } from '@lynkit/api';

// 创建一个用于缓存计算结果的 LRU 缓存
const computeCache = new LRUCache(20);

// 使用带有缓存的斐波那契函数
function fibonacci(n) {
  // 检查缓存
  const cacheKey = `fib_${n}`;
  const cachedResult = computeCache.get(cacheKey);
  
  if (cachedResult !== undefined) {
    console.log(`缓存命中: fibonacci(${n})`);
    return cachedResult;
  }
  
  // 缓存未命中，计算结果
  console.log(`计算: fibonacci(${n})`);
  let result;
  
  if (n <= 1) {
    result = n;
  } else {
    result = fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // 存入缓存
  computeCache.put(cacheKey, result);
  
  return result;
}

// 首次计算
console.log(fibonacci(10)); // 计算并缓存中间结果

// 再次计算同一值，将使用缓存
console.log(fibonacci(10)); // 直接从缓存返回
```

## API 属性

### 构造函数

```js
new LRUCache(capacity)
```

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `capacity` | number | 必填 | 缓存的最大容量 |

### 方法

| 方法名 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| `get(key)` | `key: any` | `any` 或 `undefined` | 获取缓存中 key 对应的值，如果不存在则返回 undefined |
| `put(key, value)` | `key: any, value: any `| void | 将键值对存入缓存，如果键已存在则更新值 |
| `delete(key)` | `key: any` | boolean | 从缓存中删除指定键，返回是否成功删除 |
| `clear()` | 无 | void | 清空整个缓存 |
| `has(key)` | `key: any` | boolean | 检查缓存中是否存在指定键 |
| `size()` | 无 | number | 返回当前缓存中的项目数量 |
| `keys()` | 无 | `Array<any> `| 返回缓存中所有键的数组，按照最近使用顺序排列 |

## 注意事项

1. **选择合适的容量**：根据实际使用场景选择适当的缓存容量，避免内存占用过大。

2. **键的类型**：内部实现通常使用 Map，因此键可以是任何类型（包括对象），但需要注意对象作为键时的引用比较问题。

3. **内存管理**：缓存会持有对象的引用，可能导致被缓存对象无法被垃圾回收，应该避免缓存大量大型对象。

4. **缓存失效策略**：LRU 缓存不支持基于时间的自动失效，需要手动实现定时清理或添加额外的失效机制。

5. **缓存键设计**：在设计缓存键时，要确保键能唯一标识缓存项，对于复杂参数可以考虑序列化或哈希化处理。

6. **避免循环引用**：缓存值中的循环引用可能导致 JSON 序列化失败，影响缓存的持久化。
