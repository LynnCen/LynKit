# Button 按钮

常用的操作按钮。

## 何时使用

- 标记了一个（或封装一组）操作命令。
- 触发业务逻辑时。

## 代码演示

### 按钮类型

按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。

```tsx
import { Button } from '@lynkit/ui';

export default () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

```tsx
import { Button } from '@lynkit/ui';

export default () => (
  <>
    <Button size="large">Large Button</Button>
    <Button>Default Button</Button>
    <Button size="small">Small Button</Button>
  </>
);
```

### 加载中状态

添加 loading 属性即可让按钮处于加载状态。

```tsx
import { Button } from '@lynkit/ui';

export default () => (
  <Button loading>Loading</Button>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'default' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| size | 按钮大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| loading | 设置按钮载入状态 | `boolean` | `false` |
| disabled | 按钮失效状态 | `boolean` | `false` |
| icon | 设置按钮的图标组件 | `ReactNode` | - |
| onClick | 点击按钮时的回调 | `(event) => void` | - |

## 设计原则

1. 按钮的类型要符合场景
   - 主按钮：用于主要操作，一个操作区域只能有一个主按钮
   - 默认按钮：用于次要操作
   - 文本按钮：用于最次级的操作

2. 按钮的尺寸要统一
   - 同一表单内的按钮尺寸要一致
   - 不同表单之间的按钮尺寸可以不同

## 最佳实践

1. 主按钮的使用
```tsx
// Good
<Button type="primary">保存</Button>
<Button>取消</Button>

// Bad
<Button type="primary">保存</Button>
<Button type="primary">取消</Button>
```

2. 加载状态的处理
```tsx
// Good
const [loading, setLoading] = useState(false);

<Button 
  loading={loading} 
  onClick={async () => {
    setLoading(true);
    await handleSubmit();
    setLoading(false);
  }}
>
  提交
</Button>
``` 