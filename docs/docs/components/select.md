---
sidebar_position: 5
---

# Select 选择器

Select 选择器是一种表单控件，用于在多个选项中选择一个或多个值。

## 何时使用

- 当用户需要从已有选项集合中选择一项或多项时使用。
- 当选项超过 5 个时，使用 Select 替代 Radio 组件。
- 对比 Radio 组件，Select 节省空间，可以展示更多选项。

## 代码演示

<div className="example-wrapper">
  <div className="example-preview">

### 基本使用

最基本的单选功能。

```jsx live
function BasicSelectDemo() {
  return (
    <Select 
      placeholder="请选择" 
      style={{ width: 200 }}
      options={[
        { value: 'apple', label: '苹果' },
        { value: 'orange', label: '橙子' },
        { value: 'banana', label: '香蕉' },
        { value: 'grape', label: '葡萄' },
      ]}
    />
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 多种大小

提供三种尺寸的选择器。

```jsx live
function SizeSelectDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Select
        size="large"
        placeholder="大尺寸"
        style={{ width: 200 }}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
        ]}
      />
      <Select
        placeholder="默认尺寸"
        style={{ width: 200 }}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
        ]}
      />
      <Select
        size="small"
        placeholder="小尺寸"
        style={{ width: 200 }}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
        ]}
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 禁用状态

选择器不可用状态。

```jsx live
function DisabledSelectDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Select
        disabled
        placeholder="禁用状态"
        style={{ width: 200 }}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
        ]}
      />
      <Select
        placeholder="默认选中且禁用"
        style={{ width: 200 }}
        disabled
        defaultValue="orange"
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
        ]}
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 多选模式

支持多选功能。

```jsx live
function MultipleSelectDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Select
        mode="multiple"
        placeholder="多选模式"
        style={{ width: '100%' }}
        defaultValue={['apple']}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
          { value: 'grape', label: '葡萄' },
          { value: 'watermelon', label: '西瓜' },
        ]}
      />
      
      <Select
        mode="tags"
        placeholder="标签模式"
        style={{ width: '100%' }}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
        ]}
        help="可以输入自定义值"
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 带搜索功能

支持搜索功能，在大型数据集合中快速定位选项。

```jsx live
function SearchableSelectDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Select
        showSearch
        placeholder="搜索选择"
        style={{ width: '100%' }}
        options={[
          { value: 'beijing', label: '北京' },
          { value: 'shanghai', label: '上海' },
          { value: 'guangzhou', label: '广州' },
          { value: 'shenzhen', label: '深圳' },
          { value: 'hangzhou', label: '杭州' },
          { value: 'nanjing', label: '南京' },
          { value: 'chengdu', label: '成都' },
          { value: 'wuhan', label: '武汉' },
        ]}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
      />
      
      <Select
        mode="multiple"
        showSearch
        placeholder="多选搜索"
        style={{ width: '100%' }}
        options={[
          { value: 'beijing', label: '北京' },
          { value: 'shanghai', label: '上海' },
          { value: 'guangzhou', label: '广州' },
          { value: 'shenzhen', label: '深圳' },
          { value: 'hangzhou', label: '杭州' },
          { value: 'nanjing', label: '南京' },
          { value: 'chengdu', label: '成都' },
          { value: 'wuhan', label: '武汉' },
        ]}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 分组

使用 OptGroup 进行选项分组。

```jsx live
function GroupSelectDemo() {
  return (
    <Select
      placeholder="分组选择"
      style={{ width: '100%' }}
    >
      <Select.OptGroup label="水果">
        <Select.Option value="apple">苹果</Select.Option>
        <Select.Option value="banana">香蕉</Select.Option>
        <Select.Option value="orange">橙子</Select.Option>
      </Select.OptGroup>
      <Select.OptGroup label="蔬菜">
        <Select.Option value="tomato">番茄</Select.Option>
        <Select.Option value="carrot">胡萝卜</Select.Option>
        <Select.Option value="potato">土豆</Select.Option>
      </Select.OptGroup>
    </Select>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 联动选择

省市联动是典型的例子。

```jsx live
function CascadeSelectDemo() {
  const provinceData = ['浙江', '江苏'];
  const cityData = {
    浙江: ['杭州', '宁波', '温州'],
    江苏: ['南京', '苏州', '无锡'],
  };
  
  const [province, setProvince] = React.useState(provinceData[0]);
  const [city, setCity] = React.useState(cityData[provinceData[0]][0]);
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  
  const handleProvinceChange = (value) => {
    setProvince(value);
    setCities(cityData[value]);
    setCity(cityData[value][0]);
  };
  
  const handleCityChange = (value) => {
    setCity(value);
  };
  
  return (
    <div className="flex space-x-4">
      <Select
        value={province}
        style={{ width: 120 }}
        onChange={handleProvinceChange}
        options={provinceData.map(province => ({ label: province, value: province }))}
      />
      <Select
        value={city}
        style={{ width: 120 }}
        onChange={handleCityChange}
        options={cities.map(city => ({ label: city, value: city }))}
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 自定义选项样式

可以自定义选项样式。

```jsx live
function CustomSelectDemo() {
  const options = [
    { value: 'urgent', label: '紧急', color: 'red' },
    { value: 'important', label: '重要', color: 'orange' },
    { value: 'normal', label: '普通', color: 'blue' },
    { value: 'low', label: '低优先级', color: 'green' },
  ];
  
  return (
    <Select
      placeholder="选择优先级"
      style={{ width: 200 }}
      options={options}
      optionRender={(option) => (
        <div className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: option.data.color }}
          />
          <span>{option.data.label}</span>
        </div>
      )}
    />
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 状态

验证状态的选择器，适用于表单验证。

```jsx live
function StatusSelectDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Select
        status="error"
        placeholder="错误状态"
        style={{ width: 200 }}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
        ]}
      />
      <Select
        status="warning"
        placeholder="警告状态"
        style={{ width: 200 }}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' },
        ]}
      />
    </div>
  );
}
```

  </div>
</div>

## API

### Select

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
      <td>allowClear</td>
      <td>支持清除</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td>指定默认选中的选项</td>
      <td>string | string[] | number | number[]</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>filterOption</td>
      <td>是否根据输入项进行筛选</td>
      <td>boolean | function(inputValue, option)</td>
      <td>true</td>
    </tr>
    <tr>
      <td>mode</td>
      <td>设置 Select 的模式为多选或标签</td>
      <td>'multiple' | 'tags'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>notFoundContent</td>
      <td>当下拉列表为空时显示的内容</td>
      <td>ReactNode</td>
      <td>'无匹配结果'</td>
    </tr>
    <tr>
      <td>options</td>
      <td>数据化配置选项内容</td>
      <td>{ label, value }[]</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>选择框默认文本</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>showSearch</td>
      <td>使单选模式可搜索</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>选择框大小</td>
      <td>'large' | 'middle' | 'small'</td>
      <td>'middle'</td>
    </tr>
    <tr>
      <td>status</td>
      <td>设置校验状态</td>
      <td>'error' | 'warning'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>value</td>
      <td>指定当前选中的选项</td>
      <td>string | string[] | number | number[]</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>选中 option 或 input 的 value 变化时的回调</td>
      <td>function(value, option)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onSearch</td>
      <td>文本框值变化时的回调</td>
      <td>function(value: string)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>optionRender</td>
      <td>自定义选项渲染</td>
      <td>(option) => ReactNode</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Select.Option

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
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>label</td>
      <td>选项显示的内容</td>
      <td>string | ReactNode</td>
      <td>-</td>
    </tr>
    <tr>
      <td>value</td>
      <td>选项的值</td>
      <td>string | number</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Select.OptGroup

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
      <td>label</td>
      <td>组名</td>
      <td>string | ReactNode</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 设计指南

1. 当可选选项较多时，使用 Select 组件可以节省空间。
2. 当需要多选时，使用 Select 的 multiple 模式。
3. 当需要自定义输入值时，使用 Select 的 tags 模式。
4. 优先使用 options 属性而不是 Option 组件，除非需要高度自定义选项内容。

## 最佳实践

1. 在有限的空间中，选择器常用于表单元素中，建议给予足够的宽度。
2. 对于大量选项，建议使用 showSearch 属性启用搜索功能，提高用户体验。
3. 使用适当的分组和层次结构来组织选项，使用户更容易找到所需的选项。
4. 对于层级关系明确的数据，如省市联动，考虑使用级联选择器（Cascader）组件。
5. 给选择器添加清晰的 placeholder，帮助用户理解应该选择什么。 