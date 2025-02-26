# Select 选择器

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。
- 当选项少于 5 项时，建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示

### 基本使用

```tsx
import { Select } from '@lynkit/ui';

const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
];

export default () => (
  <Select
    placeholder="请选择"
    options={options}
    onChange={(value) => console.log(value)}
  />
);
```

### 禁用选项

```tsx
import { Select } from '@lynkit/ui';

const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2', disabled: true },
  { label: '选项3', value: '3' },
];

export default () => (
  <Select placeholder="含禁用选项" options={options} />
);
```

### 带搜索框

```tsx
import { Select } from '@lynkit/ui';

export default () => (
  <Select
    showSearch
    placeholder="请输入搜索"
    options={options}
    onSearch={(value) => console.log('搜索:', value)}
  />
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的选项 | `string \| number` | - |
| defaultValue | 默认选中的选项 | `string \| number` | - |
| placeholder | 选择框默认文本 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| options | 可选项数据源 | `Option[]` | `[]` |
| size | 选择框大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| loading | 加载中状态 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| showSearch | 使单选模式可搜索 | `boolean` | `false` |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| onChange | 选中 option 变化时回调 | `(value) => void` | - |
| onSearch | 搜索时回调 | `(value: string) => void` | - |
| onClear | 清空时回调 | `() => void` | - |

### Option 类型

```ts
interface Option {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
  children?: Option[];  // 用于分组
}
```

## 最佳实践

1. 基础用法
```tsx
const [value, setValue] = useState<string>();

<Select
  value={value}
  options={options}
  onChange={setValue}
  placeholder="请选择"
/>
```

2. 搜索过滤
```tsx
<Select
  showSearch
  options={options}
  placeholder="请搜索"
  onSearch={(value) => {
    // 实现搜索逻辑
  }}
/>
```

3. 异步加载选项
```tsx
const [options, setOptions] = useState([]);
const [loading, setLoading] = useState(false);

<Select
  loading={loading}
  options={options}
  onFocus={async () => {
    setLoading(true);
    const data = await fetchOptions();
    setOptions(data);
    setLoading(false);
  }}
/>
``` 