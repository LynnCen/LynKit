---
sidebar_position: 1
---

# 图标

LynKit Icons 是一个现代化的图标库，提供了丰富的图标集合，可用于 React 应用中。这些图标采用 SVG 格式，支持自定义大小、颜色等属性。

## 特点

- **高质量矢量图标** - 基于 SVG，清晰度不受缩放影响
- **样式可定制** - 支持自定义颜色、大小等属性
- **轻量级** - 支持按需加载，减小应用体积
- **响应式** - 适配不同屏幕尺寸
- **易于使用** - 简单的 API 和丰富的文档
- **TypeScript 支持** - 提供完整的类型定义

## 图标分类

### 基础图标

- [IconAdd](/docs/icons/IconAdd) - 添加图标
- [IconDelete](/docs/icons/IconDelete) - 删除图标
- [IconEdit](/docs/icons/IconEdit) - 编辑图标
- [IconSearch](/docs/icons/IconSearch) - 搜索图标
- [IconRefresh](/docs/icons/IconRefresh) - 刷新图标
- [IconMore](/docs/icons/IconMore) - 更多图标

### 方向图标

- [IconArrowUp](/docs/icons/IconArrowUp) - 向上箭头
- [IconArrowDown](/docs/icons/IconArrowDown) - 向下箭头
- [IconArrowLeft](/docs/icons/IconArrowLeft) - 向左箭头
- [IconArrowRight](/docs/icons/IconArrowRight) - 向右箭头
- [IconCaretUp](/docs/icons/IconCaretUp) - 上三角
- [IconCaretDown](/docs/icons/IconCaretDown) - 下三角

### 导航图标

- [IconHome](/docs/icons/IconHome) - 首页图标
- [IconUser](/docs/icons/IconUser) - 用户图标
- [IconSetting](/docs/icons/IconSetting) - 设置图标
- [IconNotification](/docs/icons/IconNotification) - 通知图标
- [IconMenu](/docs/icons/IconMenu) - 菜单图标
- [IconDashboard](/docs/icons/IconDashboard) - 仪表盘图标

### 媒体图标

- [IconPlay](/docs/icons/IconPlay) - 播放图标
- [IconPause](/docs/icons/IconPause) - 暂停图标
- [IconStop](/docs/icons/IconStop) - 停止图标
- [IconVolume](/docs/icons/IconVolume) - 音量图标
- [IconImage](/docs/icons/IconImage) - 图片图标
- [IconVideo](/docs/icons/IconVideo) - 视频图标

### 状态图标

- [IconSuccess](/docs/icons/IconSuccess) - 成功图标
- [IconWarning](/docs/icons/IconWarning) - 警告图标
- [IconError](/docs/icons/IconError) - 错误图标
- [IconInfo](/docs/icons/IconInfo) - 信息图标
- [IconLoading](/docs/icons/IconLoading) - 加载图标
- [IconCheck](/docs/icons/IconCheck) - 检查图标

### 社交图标

- [IconGithub](/docs/icons/IconGithub) - GitHub 图标
- [IconTwitter](/docs/icons/IconTwitter) - Twitter 图标
- [IconFacebook](/docs/icons/IconFacebook) - Facebook 图标
- [IconLinkedin](/docs/icons/IconLinkedin) - LinkedIn 图标
- [IconYoutube](/docs/icons/IconYoutube) - YouTube 图标
- [IconInstagram](/docs/icons/IconInstagram) - Instagram 图标

### 文件类型图标

- [IconFile](/docs/icons/IconFile) - 文件图标
- [IconFolder](/docs/icons/IconFolder) - 文件夹图标
- [IconDocument](/docs/icons/IconDocument) - 文档图标
- [IconImage](/docs/icons/IconImage) - 图片文件图标
- [IconPdf](/docs/icons/IconPdf) - PDF 文件图标
- [IconZip](/docs/icons/IconZip) - 压缩文件图标

## 安装

```bash
npm install @lynkit/icons
```

## 使用示例

### 基本用法

```jsx
import { IconHome, IconSearch, IconUser } from '@lynkit/icons';

function App() {
  return (
    <div>
      <IconHome /> Home
      <IconSearch /> Search
      <IconUser /> User
    </div>
  );
}
```

### 自定义大小和颜色

```jsx
import { IconNotification } from '@lynkit/icons';

function NotificationBadge() {
  return (
    <div>
      <IconNotification size={24} color="#f5222d" />
      <IconNotification size="2em" color="royalblue" />
      <IconNotification style={{ fontSize: 36, color: 'green' }} />
    </div>
  );
}
```

### 响应式图标

```jsx
import { IconMenu } from '@lynkit/icons';

function ResponsiveMenu() {
  return (
    <div>
      <IconMenu 
        className="menu-icon"
        style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          color: 'currentColor'
        }}
      />
    </div>
  );
}
```

### 动画图标

```jsx
import { IconLoading } from '@lynkit/icons';

function LoadingIndicator() {
  return (
    <div>
      <IconLoading 
        className="rotate-animation"
        color="#1890ff"
        size={32}
      />
      
      <style jsx>{`
        .rotate-animation {
          animation: rotate 1.5s linear infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
```

## 图标属性

所有图标组件都接受以下属性：

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `size` | number \| string | '1em' | 图标大小 |
| `color` | string | 'currentColor' | 图标颜色 |
| `className` | string | - | 自定义类名 |
| `style` | CSSProperties | - | 自定义样式 |
| `onClick` | function | - | 点击事件处理函数 |

## 按需加载

为了减小打包体积，建议使用按需加载的方式：

```jsx
// 只导入需要的图标
import { IconHome } from '@lynkit/icons/IconHome';
import { IconSearch } from '@lynkit/icons/IconSearch';
```

或者使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 自动实现按需加载：

```js
// .babelrc
{
  "plugins": [
    ["import", {
      "libraryName": "@lynkit/icons",
      "libraryDirectory": "",
      "camel2DashComponentName": false
    }]
  ]
}
```

## 自定义图标

LynKit Icons 也提供了创建自定义图标的工具：

```jsx
import { createIcon } from '@lynkit/icons/create';

const CustomIcon = createIcon({
  path: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', // SVG path
  viewBox: '0 0 24 24'
});

function App() {
  return <CustomIcon size={24} color="tomato" />;
}
```

## 浏览器兼容性

LynKit Icons 支持所有现代浏览器。在 IE11 中使用需要添加 SVG polyfill。 