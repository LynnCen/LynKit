---
sidebar_position: 1
---

# 介绍

LynKit UI 是一套现代化的 React UI 组件库，提供了丰富的界面组件，帮助开发者快速构建美观、易用的 Web 应用。

## 特点

- **轻量级** - 精简代码，最小化依赖
- **可定制** - 支持自定义主题和样式覆盖
- **易于使用** - 简洁的 API 和全面的文档
- **TypeScript 支持** - 完整的类型定义
- **响应式设计** - 适配各种屏幕尺寸
- **无障碍访问** - 遵循 WAI-ARIA 规范

## 组件列表

### 基础组件

- [Button](/docs/components/button) - 按钮组件，支持多种样式和状态
- [Input](/docs/components/input) - 输入框组件，支持各种输入类型
- [Typography](/docs/components/typography) - 排版组件，包括标题、段落、文本等

### 布局组件

- [Grid](/docs/components/grid) - 栅格系统，用于页面布局
- [Layout](/docs/components/layout) - 布局组件，包括页头、页脚、侧边栏等
- [Space](/docs/components/space) - 间距组件，用于设置元素之间的间距

### 导航组件

- [Menu](/docs/components/menu) - 菜单组件，用于导航
- [Tabs](/docs/components/tabs) - 标签页组件，用于内容切换
- [Breadcrumb](/docs/components/breadcrumb) - 面包屑组件，用于页面导航

### 数据录入组件

- [Form](/docs/components/form) - 表单组件，用于数据收集和验证
- [Select](/docs/components/select) - 选择器组件，用于选择数据
- [Checkbox](/docs/components/checkbox) - 复选框组件
- [Radio](/docs/components/radio) - 单选框组件
- [Switch](/docs/components/switch) - 开关组件
- [DatePicker](/docs/components/date-picker) - 日期选择组件

### 数据展示组件

- [Table](/docs/components/table) - 表格组件，用于展示数据
- [Card](/docs/components/card) - 卡片组件，用于信息展示
- [List](/docs/components/list) - 列表组件，用于数据展示
- [Avatar](/docs/components/avatar) - 头像组件

### 反馈组件

- [Modal](/docs/components/modal) - 模态框组件，用于信息确认
- [Notification](/docs/components/notification) - 通知组件，用于全局消息提示
- [Message](/docs/components/message) - 消息组件，用于轻量级提示
- [Progress](/docs/components/progress) - 进度条组件，用于展示进度

## 安装

```bash
npm install @lynkit/ui
```

## 使用示例

```jsx
import { Button, Input, Form } from '@lynkit/ui';

function LoginForm() {
  const handleSubmit = (values) => {
    console.log('登录信息:', values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder="请输入密码" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}
```

## 主题定制

LynKit UI 支持主题定制，你可以通过 ThemeProvider 来设置自定义主题：

```jsx
import { ThemeProvider } from '@lynkit/ui';

const customTheme = {
  colors: {
    primary: '#1890ff',
    secondary: '#13c2c2',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  },
  // 其他主题变量
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* 你的应用 */}
    </ThemeProvider>
  );
}
```

## 按需加载

借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)，可以实现组件的按需加载，减小应用体积：

```js
// .babelrc
{
  "plugins": [
    ["import", {
      "libraryName": "@lynkit/ui",
      "style": true
    }]
  ]
}
```

## 浏览器兼容性

LynKit UI 支持所有现代浏览器和 IE11+（需要 polyfills）。 