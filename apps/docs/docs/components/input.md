---
sidebar_position: 5
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

<div className="example-wrapper">
  <div className="example-preview">

### 基本用法

基础输入框使用示例。

```jsx live
function BasicInputDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Input placeholder="基本使用" />
      <Input placeholder="不可用状态" disabled />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 三种大小

通过设置 `size` 属性来使用三种不同尺寸的输入框。

```jsx live
function InputSizeDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Input size="large" placeholder="大型输入框" />
      <Input placeholder="默认大小输入框" />
      <Input size="small" placeholder="小型输入框" />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 前置/后置标签

使用 `prefix` 和 `suffix` 添加前置和后置内容。

```jsx live
function InputWithAddonDemo() {
  const [value, setValue] = React.useState('');
  
  return (
    <div className="flex flex-col space-y-4">
      <Input 
        placeholder="带有前缀的输入框" 
        prefix={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        } 
      />
      
      <Input 
        placeholder="带有后缀的输入框" 
        suffix={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        } 
      />
      
      <Input 
        placeholder="同时使用前缀和后缀" 
        prefix="￥" 
        suffix="RMB"
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />
      
      {value && (
        <div className="text-sm text-gray-500">
          输入的金额: ￥{value} RMB
        </div>
      )}
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 输入框组合

输入框的组合展示。

```jsx live
function InputGroupDemo() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <p className="text-sm text-gray-600">带有前置/后置标签的组合:</p>
        <Input.Group>
          <Input.Addon>https://</Input.Addon>
          <Input placeholder="网站域名" />
          <Input.Addon>.com</Input.Addon>
        </Input.Group>
      </div>
      
      <div className="flex flex-col space-y-2">
        <p className="text-sm text-gray-600">带有按钮的组合:</p>
        <Input.Group>
          <Input placeholder="搜索内容" />
          <Button type="primary">搜索</Button>
        </Input.Group>
      </div>
      
      <div className="flex flex-col space-y-2">
        <p className="text-sm text-gray-600">带有下拉选择的组合:</p>
        <Input.Group>
          <Select defaultValue="1" style={{ width: '30%' }}>
            <Select.Option value="1">选项 1</Select.Option>
            <Select.Option value="2">选项 2</Select.Option>
            <Select.Option value="3">选项 3</Select.Option>
          </Select>
          <Input style={{ width: '70%' }} placeholder="输入内容" />
        </Input.Group>
      </div>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 搜索框

带有搜索按钮的输入框。

```jsx live
function SearchInputDemo() {
  const onSearch = (value) => {
    console.log('搜索:', value);
    alert(`您搜索了: ${value || '空内容'}`);
  };
  
  return (
    <div className="flex flex-col space-y-4">
      <Input.Search
        placeholder="输入搜索内容"
        onSearch={onSearch}
        style={{ width: 300 }}
      />
      
      <Input.Search
        placeholder="输入搜索内容"
        onSearch={onSearch}
        enterButton
      />
      
      <Input.Search
        placeholder="输入搜索内容"
        onSearch={onSearch}
        enterButton="搜索"
        size="large"
        loading
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 文本域

用于多行输入。

```jsx live
function TextAreaDemo() {
  const [value, setValue] = React.useState('');
  
  const onChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <div className="flex flex-col space-y-4">
      <Input.TextArea 
        placeholder="请输入多行文本" 
        rows={4} 
        value={value}
        onChange={onChange}
      />
      
      <div>
        <p className="text-sm text-gray-500">已输入 {value.length} 个字符</p>
      </div>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 适应高度的文本域

`autoSize` 属性适配内容高度。

```jsx live
function AutoSizeTextAreaDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <p className="mb-2 text-sm text-gray-600">自动调整高度:</p>
        <Input.TextArea placeholder="内容会自动调整高度" autoSize />
      </div>
      
      <div>
        <p className="mb-2 text-sm text-gray-600">限制范围的自动调整:</p>
        <Input.TextArea
          placeholder="高度范围限制在2到6行之间"
          autoSize={{ minRows: 2, maxRows: 6 }}
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

### 密码框

带有切换可见状态的密码输入框。

```jsx live
function PasswordInputDemo() {
  return (
    <Input.Password placeholder="输入密码" />
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 带数字提示的输入框

带有字数限制的输入框。

```jsx live
function InputWithCountDemo() {
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('已经输入的内容');
  
  return (
    <div className="flex flex-col space-y-4">
      <Input
        placeholder="最多允许输入20个字符"
        maxLength={20}
        showCount
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      
      <Input.TextArea
        placeholder="最多允许输入100个字符"
        maxLength={100}
        showCount
        rows={4}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 带移除图标的输入框

带有清除图标的输入框。

```jsx live
function InputWithClearDemo() {
  const [value, setValue] = React.useState('这是可以一键清除的内容');
  
  return (
    <Input
      placeholder="输入内容后可以一键清除"
      allowClear
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 状态

添加 `status` 为输入框添加状态。

```jsx live
function InputStatusDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Input status="error" placeholder="错误状态" />
      <Input status="warning" placeholder="警告状态" />
      <Input status="success" placeholder="成功状态" />
      
      <div className="pt-2">
        <p className="mb-2 text-sm text-gray-600">带图标的状态:</p>
        <div className="flex flex-col space-y-4">
          <Input 
            status="error" 
            placeholder="错误状态" 
            suffix={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            } 
          />
          <Input 
            status="warning" 
            placeholder="警告状态" 
            suffix={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            } 
          />
          <Input 
            status="success" 
            placeholder="成功状态" 
            suffix={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            } 
          />
        </div>
      </div>
    </div>
  );
}
```

  </div>
</div>

## API

### Input

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
      <td>可以点击清除图标删除内容</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td>输入框默认内容</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>最大输入长度</td>
      <td>number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>showCount</td>
      <td>是否展示字数</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>status</td>
      <td>设置校验状态</td>
      <td>'error' | 'warning' | 'success'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>带有前缀图标的 input</td>
      <td>ReactNode</td>
      <td>-</td>
    </tr>
    <tr>
      <td>size</td>
      <td>控件大小</td>
      <td>'large' | 'middle' | 'small'</td>
      <td>'middle'</td>
    </tr>
    <tr>
      <td>suffix</td>
      <td>带有后缀图标的 input</td>
      <td>ReactNode</td>
      <td>-</td>
    </tr>
    <tr>
      <td>type</td>
      <td>声明 input 类型</td>
      <td>string</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td>value</td>
      <td>输入框内容</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>输入框内容变化时的回调</td>
      <td>function(e)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onPressEnter</td>
      <td>按下回车的回调</td>
      <td>function(e)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td>自定义类名</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>style</td>
      <td>自定义样式</td>
      <td>CSSProperties</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Input.TextArea

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
      <td>可以点击清除图标删除内容</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>autoSize</td>
      <td>自适应内容高度</td>
      <td>boolean | &#123; minRows: number, maxRows: number &#125;</td>
      <td>false</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td>输入框默认内容</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>内容最大长度</td>
      <td>number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>showCount</td>
      <td>是否展示字数</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>status</td>
      <td>设置校验状态</td>
      <td>'error' | 'warning' | 'success'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>value</td>
      <td>输入框内容</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>内容变化时的回调</td>
      <td>function(e)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onPressEnter</td>
      <td>按下回车的回调</td>
      <td>function(e)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onResize</td>
      <td>resize 回调</td>
      <td>function(&#123; width, height &#125;)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>文本域默认行数</td>
      <td>number</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

### Input.Search

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
      <td>enterButton</td>
      <td>是否有确认按钮，可设为按钮文字</td>
      <td>boolean | ReactNode</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>搜索 loading</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>onSearch</td>
      <td>点击搜索或按下回车键时的回调</td>
      <td>function(value, event)</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Input.Password

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
      <td>iconRender</td>
      <td>自定义切换按钮</td>
      <td>(visible) => ReactNode</td>
      <td>-</td>
    </tr>
    <tr>
      <td>visibilityToggle</td>
      <td>是否显示切换按钮</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

### Input.Group

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
      <td>compact</td>
      <td>是否用紧凑模式</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Input.Group 中所有的 Input 的大小</td>
      <td>'large' | 'middle' | 'small'</td>
      <td>'middle'</td>
    </tr>
  </tbody>
</table>

## 方法

### Input

<table className="api-table">
  <thead>
    <tr>
      <th>名称</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>blur()</td>
      <td>取消焦点</td>
    </tr>
    <tr>
      <td>focus()</td>
      <td>获取焦点</td>
    </tr>
  </tbody>
</table>

## 设计指南

1. 输入框作为基础表单控件，应在需要用户输入信息时使用。
2. 输入框应该提供足够的对比度和尺寸，确保用户能够轻松识别和操作。
3. 不同类型的输入框（文本、密码、数字等）应当针对其特定的输入类型优化。
4. 避免在同一表单中混合使用不同尺寸的输入框，以保持视觉一致性。

## 最佳实践

1. 为每个输入框提供明确的标签，让用户了解需要输入的内容。
2. 使用占位文本（placeholder）提供额外的输入引导，但不要依赖它作为唯一的提示。
3. 在密码输入框中提供显示/隐藏功能，便于用户核对输入。
4. 对于必填字段，明确标识并提供适当的验证反馈。
5. 在用户输入过程中提供实时反馈，如字数统计、输入格式校验等。
6. 对于较长的表单，考虑将输入框分组或分步骤显示，避免用户被大量输入字段淹没。 