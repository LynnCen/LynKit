---
sidebar_position: 8
---

# Switch 开关

开关选择器，表示开启或关闭状态。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时。
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

<div className="example-wrapper">
  <div className="example-preview">

### 基本用法

最简单的用法。

```jsx live
function BasicSwitchDemo() {
  return (
    <Switch defaultChecked />
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 不可用状态

Switch 的不可用状态。

```jsx live
function DisabledSwitchDemo() {
  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Switch disabled={disabled} defaultChecked />
        <Switch disabled={disabled} />
      </div>
      <Button type="primary" onClick={toggle} size="small">
        {disabled ? '启用' : '禁用'}
      </Button>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 带文字描述

带有文字说明的开关。

```jsx live
function SwitchWithTextDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <Switch
        checkedChildren={<CheckIcon />}
        unCheckedChildren={<CloseIcon />}
        defaultChecked
      />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474c-6.1-7.7-15.3-12.2-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
    </svg>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 尺寸

`size="small"` 表示小号开关。

```jsx live
function SwitchSizeDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Switch defaultChecked />
      <Switch size="small" defaultChecked />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 加载中

表示正在加载中的开关。

```jsx live
function LoadingSwitchDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Switch loading defaultChecked />
      <Switch size="small" loading />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 受控组件

受控的 Switch。

```jsx live
function ControlledSwitchDemo() {
  const [checked, setChecked] = React.useState(true);

  const onChange = (checked) => {
    setChecked(checked);
  };

  return (
    <div className="flex flex-col space-y-4">
      <p>当前状态：{checked ? '开启' : '关闭'}</p>
      <Switch checked={checked} onChange={onChange} />
      <Button 
        type="primary" 
        size="small" 
        onClick={() => setChecked(!checked)}
      >
        {checked ? '关闭' : '开启'}
      </Button>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 自定义颜色和样式

自定义颜色和 Tailwind 样式。

```jsx live
function CustomStyledSwitchDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <Switch defaultChecked style={{ backgroundColor: '#f50' }} />
      <Switch defaultChecked style={{ backgroundColor: '#87d068' }} />
      <Switch defaultChecked style={{ backgroundColor: '#a259ff' }} />
      <Switch 
        defaultChecked 
        className="custom-switch md:hover:opacity-80"
      />
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 两个开关联动

两个开关互相影响。

```jsx live
function TwoSwitchesDemo() {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <p>第一个开关：控制第二个开关是否可用</p>
        <Switch 
          checked={!disabled} 
          onChange={(checked) => setDisabled(!checked)} 
          checkedChildren="启用" 
          unCheckedChildren="禁用"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p>第二个开关：{disabled ? '已禁用' : '可用的'}</p>
        <Switch disabled={disabled} />
      </div>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 配合表单使用

在表单中使用开关。

```jsx live
function SwitchInFormDemo() {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log('表单值:', values);
    alert(`提交的值: 接收通知: ${values.notifications}, 公开资料: ${values.public}`);
  };
  
  return (
    <Form
      form={form}
      name="switchForm"
      onFinish={onFinish}
      initialValues={{
        notifications: true,
        public: false
      }}
      className="w-full max-w-md"
    >
      <Form.Item
        name="notifications"
        label="接收通知"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      
      <Form.Item
        name="public"
        label="公开个人资料"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          保存设置
        </Button>
      </Form.Item>
    </Form>
  );
}
```

  </div>
</div>

## API

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
      <td>checkedChildren</td>
      <td>选中时的内容</td>
      <td>ReactNode</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td>Switch 器类名</td>
      <td>string</td>
      <td>-</td>
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
      <td>loading</td>
      <td>加载中的开关</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>开关大小，可选值：default small</td>
      <td>string</td>
      <td>default</td>
    </tr>
    <tr>
      <td>style</td>
      <td>样式对象</td>
      <td>CSSProperties</td>
      <td>-</td>
    </tr>
    <tr>
      <td>unCheckedChildren</td>
      <td>非选中时的内容</td>
      <td>ReactNode</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>变化时的回调函数</td>
      <td>function(checked: boolean, event: Event)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>点击时的回调函数</td>
      <td>function(checked: boolean, event: Event)</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 方法

<table className="api-table">
  <thead>
    <tr>
      <th>名称</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>blur()</td>
      <td>移除焦点</td>
    </tr>
    <tr>
      <td>focus()</td>
      <td>获取焦点</td>
    </tr>
  </tbody>
</table>

## 设计指南

1. Switch 开关用于切换单个选项的状态，它类似于一个可视化的布尔值控件。
2. 开关提供了一种直观的方式来表示开/关、是/否、显示/隐藏等两种状态的切换。
3. 与 Checkbox 不同，Switch 开关的状态改变会立即触发相应的动作，而不需要额外的提交步骤。
4. 使用开关时，状态变化通常会立即生效，因此适用于需要即时反馈的场景。

## 最佳实践

1. 使用清晰的标签描述开关的功能，避免使用模糊的描述。
2. 开关通常应该默认为"关闭"状态，除非有明确的理由需要默认开启。
3. 当多个开关出现在表单中时，应保持一致的布局和对齐方式。
4. 对于可能导致重要数据变更或敏感操作的开关，考虑添加确认步骤。
5. 使用开关的 loading 状态来表示状态改变需要时间处理，避免用户重复操作。 