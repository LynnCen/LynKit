---
sidebar_position: 1
---

# API

LynKit API 是一个实用的工具函数集合，提供了各种常见的数据处理、算法实现和开发辅助函数。这些工具函数可以帮助开发者解决日常开发中的常见问题，提高开发效率。

## 特点

- **轻量级** - 每个工具函数都经过优化，体积小
- **高效性能** - 注重性能优化，可处理大量数据
- **TypeScript 支持** - 完整的类型定义
- **无依赖** - 不依赖外部库
- **全面测试** - 每个函数都有完整的单元测试

## 工具函数分类

### 基础工具

- [is](/docs/api/is) - 类型检查工具
- [debounce](/docs/api/debounce) - 函数防抖
- [throttle](/docs/api/throttle) - 函数节流
- [deepClone](/docs/api/deepClone) - 深拷贝
- [deepMerge](/docs/api/deepMerge) - 深合并

### 数据处理

- [formatDate](/docs/api/formatDate) - 日期格式化
- [formatNumber](/docs/api/formatNumber) - 数字格式化
- [formatBytes](/docs/api/formatBytes) - 字节格式化
- [parseCurrency](/docs/api/parseCurrency) - 货币解析

### 字符串工具

- [capitalize](/docs/api/capitalize) - 首字母大写
- [trim](/docs/api/trim) - 去除字符串首尾空格
- [truncate](/docs/api/truncate) - 截断字符串
- [escape](/docs/api/escape) - 转义字符
- [unescape](/docs/api/unescape) - 反转义字符

### 数组工具

- [chunk](/docs/api/chunk) - 数组分块
- [unique](/docs/api/unique) - 数组去重
- [shuffle](/docs/api/shuffle) - 数组洗牌
- [flatten](/docs/api/flatten) - 数组扁平化
- [groupBy](/docs/api/groupBy) - 数组分组

### 算法工具

- [LRU](/docs/api/algorithm/LRU) - LRU 缓存算法
- [exponentialBackoff](/docs/api/algorithm/exponentialBackoff) - 指数退避算法
- [binarySearch](/docs/api/algorithm/binarySearch) - 二分查找
- [quickSort](/docs/api/algorithm/quickSort) - 快速排序

### 浏览器工具

- [cookie](/docs/api/cookie) - Cookie 操作
- [storage](/docs/api/storage) - 本地存储操作
- [viewport](/docs/api/viewport) - 视口工具
- [fileToBase64](/docs/api/fileToBase64) - 文件转 Base64
- [download](/docs/api/download) - 文件下载

### 网络工具

- [fetch](/docs/api/fetch) - Fetch 封装
- [queryString](/docs/api/queryString) - URL 查询字符串解析
- [retry](/docs/api/retry) - 重试机制
- [timeout](/docs/api/timeout) - 超时控制

## 安装

```bash
npm install @lynkit/api
```

## 使用示例

### 防抖函数

```js
import { debounce } from '@lynkit/api';

// 创建一个防抖函数
const handleSearch = debounce((searchTerm) => {
  console.log('搜索:', searchTerm);
  // 发送 API 请求
}, 300);

// 在输入框中使用
inputElement.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});
```

### LRU 缓存

```js
import { LRUCache } from '@lynkit/api/algorithm';

// 创建一个容量为 10 的 LRU 缓存
const cache = new LRUCache(10);

// 存储数据
cache.put('key1', 'value1');
cache.put('key2', 'value2');

// 获取数据
const value = cache.get('key1'); // 'value1'

// 检查是否存在
const exists = cache.has('key3'); // false

// 删除数据
cache.delete('key2');
```

### 日期格式化

```js
import { formatDate } from '@lynkit/api';

const date = new Date();
const formatted = formatDate(date, 'YYYY-MM-DD HH:mm:ss');
console.log(formatted); // 例如: '2023-07-15 10:30:45'

// 使用预设格式
formatDate(date, 'short'); // '7/15/23'
formatDate(date, 'long'); // 'July 15, 2023'
```

### 数组操作

```js
import { chunk, unique, shuffle } from '@lynkit/api';

// 数组分块
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const chunked = chunk(arr, 3);
console.log(chunked); // [[1, 2, 3], [4, 5, 6], [7, 8]]

// 数组去重
const duplicate = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = unique(duplicate);
console.log(uniqueArr); // [1, 2, 3, 4, 5]

// 数组洗牌
const deck = [1, 2, 3, 4, 5];
const shuffled = shuffle(deck);
console.log(shuffled); // 随机顺序的数组
```

## 与其他库的集成

LynKit API 可以与任何 JavaScript 框架或库一起使用，例如 React、Vue、Angular 等。

### 在 React 中使用

```jsx
import React, { useState } from 'react';
import { debounce } from '@lynkit/api';

function SearchBar() {
  const [results, setResults] = useState([]);
  
  // 创建防抖搜索函数
  const handleSearch = debounce(async (term) => {
    const response = await fetch(`/api/search?q=${term}`);
    const data = await response.json();
    setResults(data);
  }, 300);
  
  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => handleSearch(e.target.value)} 
        placeholder="搜索..." 
      />
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 按需导入

可以只导入需要的函数，以减小打包体积：

```js
// 只导入需要的函数
import { debounce, throttle } from '@lynkit/api';
import { LRUCache } from '@lynkit/api/algorithm';
```

## 浏览器兼容性

LynKit API 支持所有现代浏览器，对于旧版浏览器可能需要使用 polyfill。