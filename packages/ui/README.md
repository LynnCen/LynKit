# @lynkit/ui

React UI 组件库，提供了一套高质量的基础 UI 组件。

## 特性

- 🎨 **Design Tokens** - 基于 CSS Variables 的设计令牌系统
- 🌓 **主题切换** - 支持亮色/暗色/跟随系统三种主题模式
- 📦 **双格式输出** - 同时支持 ES Modules 和 CommonJS
- 🛡 **TypeScript** - 使用 TypeScript 开发，提供完整的类型定义
- ✅ **测试覆盖** - 核心组件 100% 测试覆盖

## 安装

```bash
npm install @lynkit/ui
# or
yarn add @lynkit/ui
# or
pnpm add @lynkit/ui
```

## 快速开始

```tsx
import { ConfigProvider, Button, Input, Select } from '@lynkit/ui';
import '@lynkit/ui/styles.css';

function App() {
  return (
    <ConfigProvider theme="light">
      <Button type="primary">按钮</Button>
      <Input placeholder="请输入" />
      <Select options={[{ label: '选项', value: '1' }]} />
    </ConfigProvider>
  );
}
```

## 主题切换

### 基础用法

```tsx
import { ConfigProvider, Button } from '@lynkit/ui';
import '@lynkit/ui/styles.css';

// 亮色主题（默认）
<ConfigProvider theme="light">
  <Button>亮色主题</Button>
</ConfigProvider>

// 暗色主题
<ConfigProvider theme="dark">
  <Button>暗色主题</Button>
</ConfigProvider>

// 跟随系统
<ConfigProvider theme="system">
  <Button>跟随系统</Button>
</ConfigProvider>
```

### 动态切换

```tsx
import { ConfigProvider, Button, useConfig } from '@lynkit/ui';
import '@lynkit/ui/styles.css';

function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useConfig();

  return (
    <div>
      <p>当前主题: {resolvedTheme}</p>
      <Button onClick={() => setTheme('light')}>亮色</Button>
      <Button onClick={() => setTheme('dark')}>暗色</Button>
      <Button onClick={() => setTheme('system')}>跟随系统</Button>
    </div>
  );
}

function App() {
  return (
    <ConfigProvider>
      <ThemeSwitcher />
    </ConfigProvider>
  );
}
```

## 按需导入

### 方式一：统一导入（推荐）

```tsx
import { Button, Input } from '@lynkit/ui';
import '@lynkit/ui/styles.css';
```

### 方式二：路径导入

```tsx
import Button from '@lynkit/ui/es/button';
import Input from '@lynkit/ui/es/input';
import '@lynkit/ui/styles.css';
```

## 组件列表

| 组件           | 说明         |
| -------------- | ------------ |
| Button         | 按钮组件     |
| Input          | 输入框组件   |
| Select         | 选择器组件   |
| ConfigProvider | 全局配置组件 |

## API

### ConfigProvider

| 参数      | 说明     | 类型                            | 默认值    |
| --------- | -------- | ------------------------------- | --------- |
| theme     | 主题模式 | `'light' \| 'dark' \| 'system'` | `'light'` |
| prefixCls | 类名前缀 | `string`                        | `'lyn'`   |

### useConfig

```tsx
const { theme, resolvedTheme, prefixCls, setTheme } = useConfig();
```

| 返回值        | 说明           | 类型                            |
| ------------- | -------------- | ------------------------------- |
| theme         | 当前主题设置   | `'light' \| 'dark' \| 'system'` |
| resolvedTheme | 实际生效的主题 | `'light' \| 'dark'`             |
| prefixCls     | 类名前缀       | `string`                        |
| setTheme      | 切换主题方法   | `(theme: ThemeMode) => void`    |

## 本地开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 运行测试
pnpm test
```

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 许可证

[MIT](./LICENSE)
