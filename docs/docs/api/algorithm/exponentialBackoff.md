---
sidebar_position: 2
---

# 指数退避算法

## 简介

指数退避（Exponential Backoff）是一种重试策略，当操作失败时，会按照指数增长的时间间隔进行重试。每次重试失败后，等待时间会按照指数函数增长（通常是以 2 为底数），直到达到最大重试次数或最大等待时间。这种策略可以减轻服务器负载，避免短时间内大量重试请求导致的系统崩溃。

## 使用场景

指数退避算法适用于以下场景：

- **网络请求重试**：当 API 请求失败时，使用指数退避策略进行重试
- **资源竞争**：多个客户端竞争同一资源时，使用指数退避避免冲突
- **限流处理**：当遇到服务限流时，使用指数退避等待合适的时间后再请求
- **分布式系统**：在分布式系统中处理临时故障和网络抖动
- **消息队列重试**：处理消息队列中的失败消息

## 使用示例

### 基本用法

```js
import { exponentialBackoff } from '@lynkit/api';

// 创建一个异步操作
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // 重新抛出错误以触发重试
  }
}

// 使用指数退避策略执行操作
exponentialBackoff(fetchData, {
  maxRetries: 5,
  initialDelay: 1000,
  maxDelay: 30000,
  factor: 2,
  onRetry: (error, attempt) => {
    console.log(`Retry attempt ${attempt} after error: ${error.message}`);
  }
})
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('All retries failed:', error);
  });
```

### 自定义重试条件

```js
import { exponentialBackoff } from '@lynkit/api';

// 带有自定义重试条件的请求
async function fetchUserData(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  
  // 返回响应对象，而不是直接抛出错误
  return response;
}

exponentialBackoff(
  () => fetchUserData('user123'),
  {
    maxRetries: 3,
    initialDelay: 2000,
    // 自定义重试条件
    shouldRetry: async (response) => {
      // 只有在服务器错误 (5xx) 或限流 (429) 时才重试
      if (!response.ok) {
        const status = response.status;
        return status === 429 || (status >= 500 && status < 600);
      }
      return false; // 其他情况不重试
    },
    // 自定义退避计算
    backoffCalculator: (attempt, initialDelay, factor) => {
      // 添加一些随机延迟，避免多个客户端同时重试
      const jitter = Math.random() * 1000;
      return initialDelay * Math.pow(factor, attempt) + jitter;
    }
  }
)
  .then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`API error: ${response.status}`);
    }
  })
  .then(data => {
    console.log('User data:', data);
  })
  .catch(error => {
    console.error('Failed to fetch user data:', error);
  });
```

### 在 React 中使用

```jsx
import React, { useState, useEffect } from 'react';
import { exponentialBackoff } from '@lynkit/api';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    
    const fetchWithRetry = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await exponentialBackoff(
          async () => {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
            return response.json();
          },
          {
            maxRetries: 3,
            initialDelay: 1000,
            onRetry: (error, attempt) => {
              console.log(`Retrying ${url} (attempt ${attempt}): ${error.message}`);
            }
          }
        );
        
        if (mounted) {
          setData(result);
        }
      } catch (error) {
        if (mounted) {
          setError(error.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchWithRetry();
    
    return () => {
      mounted = false;
    };
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      <h2>Data Loaded</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## API 属性

### 参数

```js
exponentialBackoff(operation, options)
```

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `operation` | Function | 必填 | 需要执行的异步操作，必须返回 Promise |
| `options` | Object | {} | 配置选项 |

### 选项

| 选项 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `maxRetries` | number | 3 | 最大重试次数 |
| `initialDelay` | number | 1000 | 初始延迟时间，单位为毫秒 |
| `maxDelay` | number | 30000 | 最大延迟时间，单位为毫秒 |
| `factor` | number | 2 | 退避因子，决定等待时间的增长速率 |
| `onRetry` | Function | null | 每次重试前调用的函数，接收错误和当前尝试次数作为参数 |
| `shouldRetry` | Function | (error) => true | 决定是否应该重试的函数，接收错误或操作结果作为参数 |
| `backoffCalculator` | Function | 内部实现 | 自定义计算退避时间的函数 |

### 返回值

| 类型 | 描述 |
| --- | --- |
| `Promise<any>` | 返回操作成功后的结果，如果所有重试都失败，则拒绝 Promise |

## 注意事项

1. **幂等性操作**：确保重试的操作是幂等的，即多次执行不会产生副作用。例如，POST 请求可能不适合简单地重试。

2. **超时处理**：考虑添加操作超时，防止单次操作耗时过长。可以结合 `Promise.race()` 和超时 Promise 实现。

3. **永久性错误**：区分临时错误和永久性错误，对于永久性错误（如认证失败、资源不存在）应该立即失败而不是重试。

4. **并发控制**：在高并发场景下，退避策略可能需要考虑更复杂的因素，如全局重试配额。

5. **日志和监控**：记录重试次数和错误信息，以便监控系统健康状况和识别潜在问题。

6. **内存泄漏**：长时间运行的重试操作可能会导致闭包中的变量无法被垃圾回收，注意内存使用。

7. **用户体验**：对于用户可见的操作，考虑提供适当的反馈，如显示重试进度或允许用户取消重试。 