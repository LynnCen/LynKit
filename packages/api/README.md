# @lynkit/api

一个实用的工具函数库，提供了防抖、节流等常用的功能函数。

## 📦 安装

```bash
npm install @lynkit/api
```

## 🎯 特性

- 📦 开箱即用
- 🎨 支持 TypeScript
- 🔥 支持按需加载
- ⚡️ 轻量级
- 🛡 完整的类型定义

## 📚 API 文档

### throttle

函数节流，限制函数在一定时间内只能执行一次。

#### 基础用法

```typescript
import { throttle } from '@lynkit/api';

// 创建节流函数
const throttledScroll = throttle(() => {
  console.log('scroll event');
}, 1000);

// 使用节流函数
window.addEventListener('scroll', throttledScroll);
```

#### API

```typescript
function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number = 300,
  options?: {
    leading?: boolean;   // 是否在延迟开始前调用
    trailing?: boolean;  // 是否在延迟结束后调用
  }
): T;
```

##### 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fn | 需要节流的函数 | `(...args: any[]) => any` | - |
| wait | 等待时间（毫秒） | `number` | 300 |
| options | 配置选项 | `object` | `{ leading: true, trailing: true }` |

#### 最佳实践

1. 处理滚动事件：
```typescript
const handleScroll = throttle(() => {
  const scrollTop = document.documentElement.scrollTop;
  // 处理滚动逻辑
}, 200);

window.addEventListener('scroll', handleScroll);
```

2. 处理窗口调整事件：
```typescript
const handleResize = throttle(() => {
  // 处理窗口大小变化逻辑
}, 500);

window.addEventListener('resize', handleResize);
```

### debounce

函数防抖，延迟函数的执行，直到一定时间内没有再次调用。

#### 基础用法

```typescript
import { debounce } from '@lynkit/api';

// 创建防抖函数
const debouncedSearch = debounce((searchTerm) => {
  // 执行搜索操作
  api.search(searchTerm);
}, 300);

// 使用防抖函数
searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

#### API

```typescript
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait: number = 300,
  options?: {
    leading?: boolean;   // 是否在延迟开始前调用
    trailing?: boolean;  // 是否在延迟结束后调用
    maxWait?: number;    // 最大等待时间
  }
): T;
```

##### 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fn | 需要防抖的函数 | `(...args: any[]) => any` | - |
| wait | 等待时间（毫秒） | `number` | 300 |
| options | 配置选项 | `object` | `{ leading: false, trailing: true }` |

#### 最佳实践

1. 处理输入搜索：
```typescript
const handleSearch = debounce(async (value) => {
  try {
    const results = await api.search(value);
    updateSearchResults(results);
  } catch (error) {
    console.error('搜索失败:', error);
  }
}, 500);
```

2. 表单验证：
```typescript
const validateField = debounce(async (value) => {
  try {
    const isValid = await api.validate(value);
    updateValidationStatus(isValid);
  } catch (error) {
    handleValidationError(error);
  }
}, 300);
```

#### 注意事项

1. 防抖函数：
   - 适用于输入框实时搜索
   - 表单验证
   - 按钮点击防止重复提交

2. 节流函数：
   - 适用于滚动事件处理
   - 窗口大小调整
   - 频繁的 API 调用限制

## 🤝 贡献指南

欢迎提交 issue 和 Pull Request 帮助我们改进代码。

## 📄 许可证

[ISC](LICENSE)
