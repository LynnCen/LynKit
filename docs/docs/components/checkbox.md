---
sidebar_position: 7
---

# Checkbox 多选框

多选框允许用户从一组选项中选择多个选项。

## 何时使用

- 在一组选项中进行多项选择时使用。
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

<div className="example-wrapper">
  <div className="example-preview">

### 基本用法

简单的 checkbox。

```jsx live
function BasicCheckboxDemo() {
  return (
    <Checkbox>Checkbox</Checkbox>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 不可用状态

Checkbox 不可用状态。

```jsx live
function DisabledCheckboxDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Checkbox disabled>不可用</Checkbox>
      <Checkbox disabled checked>不可用（已选中）</Checkbox>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 受控组件

联动 checkbox。

```jsx live
function ControlledCheckboxDemo() {
  const [checked, setChecked] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const label = `${checked ? '选中' : '未选中'}-${disabled ? '不可用' : '可用'}`;

  return (
    <div className="flex flex-col space-y-4">
      <p className="mb-2">
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        >
          {label}
        </Checkbox>
      </p>
      <div className="flex space-x-4">
        <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? '选中' : '取消选中'}
        </Button>
        <Button type="primary" size="small" onClick={toggleDisable}>
          {!disabled ? '不可用' : '可用'}
        </Button>
      </div>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### Checkbox 组

方便的从数组生成 Checkbox 组。

```jsx live
function CheckboxGroupDemo() {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: '苹果', value: 'Apple' },
    { label: '梨', value: 'Pear' },
    { label: '橙子', value: 'Orange' }
  ];
  const optionsWithDisabled = [
    { label: '苹果', value: 'Apple' },
    { label: '梨', value: 'Pear' },
    { label: '橙子', value: 'Orange', disabled: true }
  ];
  
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h4 className="mb-2 text-gray-600">普通数组</h4>
        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
      </div>
      
      <div>
        <h4 className="mb-2 text-gray-600">配置对象数组</h4>
        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
      </div>
      
      <div>
        <h4 className="mb-2 text-gray-600">含禁用选项</h4>
        <Checkbox.Group options={optionsWithDisabled} defaultValue={['Apple']} onChange={onChange} />
      </div>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 全选

实现全选/全不选功能。

```jsx live
function CheckAllDemo() {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const [checkedList, setCheckedList] = React.useState(['Apple', 'Orange']);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b pb-2">
        <Checkbox 
          indeterminate={indeterminate} 
          onChange={onCheckAllChange} 
          checked={checkAll}
        >
          全选
        </Checkbox>
      </div>
      <Checkbox.Group 
        options={plainOptions} 
        value={checkedList} 
        onChange={onChange} 
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 布局

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用可以实现灵活的布局。

```jsx live
function CheckboxLayoutDemo() {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  
  return (
    <Checkbox.Group onChange={onChange}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Checkbox value="A">A</Checkbox>
        </div>
        <div>
          <Checkbox value="B">B</Checkbox>
        </div>
        <div>
          <Checkbox value="C">C</Checkbox>
        </div>
        <div>
          <Checkbox value="D">D</Checkbox>
        </div>
        <div>
          <Checkbox value="E">E</Checkbox>
        </div>
        <div>
          <Checkbox value="F">F</Checkbox>
        </div>
      </div>
    </Checkbox.Group>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 自定义样式

组件允许你采用自定义样式和 Tailwind 类名。

```jsx live
function CustomCheckboxDemo() {
  return (
    <div className="flex flex-col space-y-6">
      <Checkbox.Group className="bg-gray-100 p-4 rounded-md">
        <div className="flex flex-col space-y-2">
          <Checkbox value="1" className="text-blue-600">蓝色文本选项</Checkbox>
          <Checkbox value="2" className="text-red-600">红色文本选项</Checkbox>
          <Checkbox value="3" className="text-green-600">绿色文本选项</Checkbox>
        </div>
      </Checkbox.Group>
      
      <Checkbox className="checkbox-custom">
        <span className="font-bold text-purple-600">自定义样式选项</span>
      </Checkbox>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 限制选择数量

限制选择的数量。

```jsx live
function LimitedCheckboxDemo() {
  const options = [
    { label: '选项 A', value: 'A' },
    { label: '选项 B', value: 'B' },
    { label: '选项 C', value: 'C' },
    { label: '选项 D', value: 'D' },
    { label: '选项 E', value: 'E' },
  ];

  const [checkedList, setCheckedList] = React.useState(['A', 'B']);
  const [disabledList, setDisabledList] = React.useState([]);
  
  const onChange = (list) => {
    setCheckedList(list);
    
    // 如果已经选择了2项，禁用其他未选择的选项
    if (list.length >= 2) {
      const disabled = options
        .filter(o => !list.includes(o.value))
        .map(o => o.value);
      setDisabledList(disabled);
    } else {
      // 否则清除禁用状态
      setDisabledList([]);
    }
  };

  // 修改options，添加disabled属性
  const optionsWithDisabled = options.map(option => ({
    ...option,
    disabled: disabledList.includes(option.value)
  }));

  return (
    <div className="flex flex-col space-y-4">
      <p>最多选择2项:</p>
      <Checkbox.Group
        options={optionsWithDisabled}
        value={checkedList}
        onChange={onChange}
      />
      <div>
        <p>已选择: {checkedList.join(', ')}</p>
      </div>
    </div>
  );
}
```

  </div>
</div>

## API

### Checkbox

<table className="api-table">
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>checked</td>
      <td>指定当前是否选中</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>defaultChecked</td>
      <td>初始是否选中</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>失效状态</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>indeterminate</td>
      <td>设置 indeterminate 状态，只负责样式控制</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>变化时的回调函数</td>
      <td>function(e:Event)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td>自定义类名</td>
      <td>string</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Checkbox.Group

<table className="api-table">
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>defaultValue</td>
      <td>默认选中的选项</td>
      <td>string[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>整组失效</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>options</td>
      <td>指定可选项</td>
      <td>string[] | Array&lt;&#123; label: string value: string disabled?: boolean &#125;&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>value</td>
      <td>指定选中的选项</td>
      <td>string[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>变化时的回调函数</td>
      <td>function(checkedValues)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td>自定义类名</td>
      <td>string</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 设计指南

1. Checkbox 多选框主要用于状态标记，需要与提交操作配合。
2. 单独使用时可作为两种状态之间的切换，类似于开关按钮但具有不同的视觉效果。
3. 多个选项组合使用时，可以从一组数据中选择多个值。
4. 当选项数量过多时，可以考虑使用折叠面板或分组展示。

## 最佳实践

1. 使用积极的表述方式来描述选择框标签，避免使用否定语句。
2. 当存在大量选项时，考虑使用全选/取消全选功能简化用户操作。
3. 对于有依赖关系的选项，可以使用级联选择或禁用相关选项的方式处理。
4. 在表单中使用时，应与其他表单控件保持一致的对齐和间距。
5. 若需要用户必须完成某个选择才能继续操作，请明确指示该多选框为必填项。 