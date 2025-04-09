---
sidebar_position: 6
---

# Radio 单选框

单选框，用于在多个备选项中选中单个状态。

## 何时使用

- 用于在多个备选项中选中单个状态。
- Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

<div className="example-wrapper">
  <div className="example-preview">

### 基本用法

最简单的用法。

```jsx live
function BasicRadioDemo() {
  return <Radio>Radio</Radio>;
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 不可用状态

Radio 不可用状态。

```jsx live
function DisabledRadioDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Radio disabled>不可用</Radio>
      <Radio disabled checked>不可用（已选中）</Radio>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 单选组合

一组互斥的 Radio 配合使用。

```jsx live
function RadioGroupDemo() {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <div className="flex space-x-4">
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </div>
    </Radio.Group>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 垂直排列

垂直的 Radio.Group，配合更多输入框选项。

```jsx live
function VerticalRadioDemo() {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <div className="flex flex-col space-y-2">
        <Radio value={1}>选项一</Radio>
        <Radio value={2}>选项二</Radio>
        <Radio value={3}>选项三</Radio>
        <Radio value={4}>选项四</Radio>
      </div>
    </Radio.Group>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### Radio.Group 组合 - 配置方式

通过配置数组，自动生成单选组合。

```jsx live
function RadioGroupOptionsDemo() {
  const [value1, setValue1] = React.useState('Apple');
  const [value2, setValue2] = React.useState('Apple');
  const [value3, setValue3] = React.useState('Apple');

  const onChange1 = (e) => {
    setValue1(e.target.value);
  };

  const onChange2 = (e) => {
    setValue2(e.target.value);
  };

  const onChange3 = (e) => {
    setValue3(e.target.value);
  };

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: '苹果', value: 'Apple' },
    { label: '梨', value: 'Pear' },
    { label: '橙子', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: '苹果', value: 'Apple' },
    { label: '梨', value: 'Pear' },
    { label: '橙子', value: 'Orange', disabled: true },
  ];

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h4 className="mb-2 text-gray-600">普通数组作为选项</h4>
        <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      </div>
      
      <div>
        <h4 className="mb-2 text-gray-600">选项数组含有 label 和 value</h4>
        <Radio.Group options={options} onChange={onChange2} value={value2} />
      </div>
      
      <div>
        <h4 className="mb-2 text-gray-600">含有禁用选项的数组</h4>
        <Radio.Group options={optionsWithDisabled} onChange={onChange3} value={value3} />
      </div>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 带额外选项

以数组配置为基础，可以通过包装 `Radio.Group` 实现复选框与附加选项的联动。

```jsx live
function RadioGroupWithExtraDemo() {
  const [value, setValue] = React.useState(1);
  const [extraValue, setExtraValue] = React.useState('');
  
  const onChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <div>
      <Radio.Group onChange={onChange} value={value}>
        <div className="flex flex-col space-y-3">
          <Radio value={1}>选项 A</Radio>
          <Radio value={2}>选项 B</Radio>
          <Radio value={3}>选项 C</Radio>
          <Radio value={4}>
            更多选项...
            {value === 4 && (
              <Input 
                style={{ width: 200, marginLeft: 10 }}
                value={extraValue}
                onChange={(e) => setExtraValue(e.target.value)}
              />
            )}
          </Radio>
        </div>
      </Radio.Group>
      <div className="mt-4 text-gray-600">
        {value === 4 ? `您选择了"更多选项"并输入: ${extraValue}` : `您选择了选项 ${value}`}
      </div>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 按钮样式

单选框可以展示为按钮样式。

```jsx live
function RadioButtonStyleDemo() {
  const [value1, setValue1] = React.useState('a');
  const [value2, setValue2] = React.useState('a');
  const [value3, setValue3] = React.useState('a');
  const [value4, setValue4] = React.useState('a');

  const onChange1 = (e) => {
    setValue1(e.target.value);
  };

  const onChange2 = (e) => {
    setValue2(e.target.value);
  };

  const onChange3 = (e) => {
    setValue3(e.target.value);
  };

  const onChange4 = (e) => {
    setValue4(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <Radio.Group onChange={onChange1} value={value1} optionType="button">
          <div className="flex">
            <Radio.Button value="a">杭州</Radio.Button>
            <Radio.Button value="b">上海</Radio.Button>
            <Radio.Button value="c">北京</Radio.Button>
            <Radio.Button value="d">成都</Radio.Button>
          </div>
        </Radio.Group>
      </div>
      
      <div>
        <Radio.Group onChange={onChange2} value={value2} optionType="button">
          <div className="flex">
            <Radio.Button value="a">杭州</Radio.Button>
            <Radio.Button value="b" disabled>上海</Radio.Button>
            <Radio.Button value="c">北京</Radio.Button>
            <Radio.Button value="d">成都</Radio.Button>
          </div>
        </Radio.Group>
      </div>
      
      <div>
        <Radio.Group 
          options={[
            { label: '杭州', value: 'a' },
            { label: '上海', value: 'b', disabled: true },
            { label: '北京', value: 'c' },
            { label: '成都', value: 'd' },
          ]} 
          onChange={onChange3} 
          value={value3} 
          optionType="button" 
        />
      </div>
      
      <div>
        <Radio.Group 
          options={['杭州', '上海', '北京', '成都']} 
          onChange={onChange4} 
          value={value4} 
          optionType="button" 
        />
      </div>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 尺寸大小

不同大小的单选按钮样式。

```jsx live
function RadioButtonSizeDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Radio.Group defaultValue="a" size="large" optionType="button">
        <div className="flex">
          <Radio.Button value="a">杭州</Radio.Button>
          <Radio.Button value="b">上海</Radio.Button>
          <Radio.Button value="c">北京</Radio.Button>
          <Radio.Button value="d">成都</Radio.Button>
        </div>
      </Radio.Group>
      
      <Radio.Group defaultValue="a" optionType="button">
        <div className="flex">
          <Radio.Button value="a">杭州</Radio.Button>
          <Radio.Button value="b">上海</Radio.Button>
          <Radio.Button value="c">北京</Radio.Button>
          <Radio.Button value="d">成都</Radio.Button>
        </div>
      </Radio.Group>
      
      <Radio.Group defaultValue="a" size="small" optionType="button">
        <div className="flex">
          <Radio.Button value="a">杭州</Radio.Button>
          <Radio.Button value="b">上海</Radio.Button>
          <Radio.Button value="c">北京</Radio.Button>
          <Radio.Button value="d">成都</Radio.Button>
        </div>
      </Radio.Group>
    </div>
  );
}
```

  </div>
</div>

## API

### Radio

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
      <td>是否禁用</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>value</td>
      <td>根据 value 进行比较，判断是否选中</td>
      <td>any</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td>自定义 class</td>
      <td>string</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Radio.Group

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
      <td>默认选中的值</td>
      <td>any</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>禁选所有子单选器</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>name</td>
      <td>RadioGroup 下所有 input[type="radio"] 的 name 属性</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>options</td>
      <td>以配置形式设置子元素</td>
      <td>string[] | Array&lt;&#123; label: string value: any disabled?: boolean &#125;&gt;</td>
      <td>-</td>
    </tr>
    <tr>
      <td>optionType</td>
      <td>用于设置 Radio options 类型</td>
      <td>'default' | 'button'</td>
      <td>'default'</td>
    </tr>
    <tr>
      <td>size</td>
      <td>大小，只对按钮样式生效</td>
      <td>'large' | 'middle' | 'small'</td>
      <td>'middle'</td>
    </tr>
    <tr>
      <td>value</td>
      <td>用于设置当前选中的值</td>
      <td>any</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>选项变化时的回调函数</td>
      <td>function(e:Event)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td>自定义 class</td>
      <td>string</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 设计指南

1. 单选框多用于在有限的备选项中做单项选择，建议不超过5个选项。
2. 需要选择多个选项时，请使用多选框（Checkbox）。
3. 单选框通常用于选择项目，而不是切换操作。对于切换操作，建议使用开关（Switch）。

## 最佳实践

1. 单选框应该有一个默认选择项，避免用户必须做出选择的情况。
2. 垂直排列的单选框视觉流程更清晰，单选框选项较多时建议使用垂直排列。
3. 当单选框数量超过4个时，可以考虑使用下拉选择框（Select）来代替。
4. 按钮样式的单选框适合用于展示明显的选项分组，如分页器、视图切换等场景。 