# Input 输入框

通过鼠标或键盘输入内容。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

### 基本使用

基础的输入框。

```tsx
import { Input } from '@lynkit/ui';

export default () => (
  <Input placeholder="Basic usage" />
);
```

### 带图标的输入框

可以添加前缀或后缀图标。

```tsx
import { Input } from '@lynkit/ui';

export default () => (
  <>
    <Input prefix={<SearchIcon />} placeholder="Search" />
    <Input suffix={<InfoIcon />} placeholder="With info" />
  </>
);
```

### 输入框尺寸

```tsx
import { Input } from '@lynkit/ui';

export default () => (
  <>
    <Input size="large" placeholder="Large size" />
    <Input placeholder="Default size" />
    <Input size="small" placeholder="Small size" />
  </>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容 | `string` | - |
| defaultValue | 输入框默认内容 | `string` | - |
| placeholder | 占位提示符 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| maxLength | 最大长度 | `number` | - |
| showCount | 是否展示字数 | `boolean` | `false` |
| size | 控件大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| prefix | 前缀图标 | `ReactNode` | - |
| suffix | 后缀图标 | `ReactNode` | - |
| onChange | 输入框内容变化时的回调 | `(value: string) => void` | - |
| onPressEnter | 按下回车的回调 | `(e) => void` | - |
| status | 设置校验状态 | `'error' \| 'warning'` | - |

## 最佳实践

1. 受控组件的使用
```tsx
const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(value) => setValue(value)}
  placeholder="请输入"
/>
```

2. 表单验证
```tsx
<Input
  status="error"
  placeholder="Error input"
  suffix={<ErrorIcon />}
/>
```

3. 字数限制
```tsx
<Input
  showCount
  maxLength={100}
  placeholder="Limited to 100 characters"
/>
``` 