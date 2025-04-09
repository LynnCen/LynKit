---
sidebar_position: 1
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 LynKit 中，我们提供了五种按钮：

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 链接按钮：用于作为外链的行动点。
- 文本按钮：用于最次级的行动点。
- 图标按钮：通常用于工具栏。

以及四种状态属性与上面配合使用：

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 代码演示

<div className="example-wrapper">
  <div className="example-preview">

### 按钮类型

LynKit 支持五种按钮类型。

```jsx live
function ButtonTypesDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button type="primary">主按钮</Button>
      <Button>默认按钮</Button>
      <Button type="link">链接按钮</Button>
      <Button type="text">文本按钮</Button>
      <Button type="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </Button>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 按钮尺寸

LynKit 支持大、中、小三种尺寸的按钮。

```jsx live
function ButtonSizeDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button size="large" type="primary">大按钮</Button>
        <Button size="large">大按钮</Button>
        <Button size="large" type="link">大按钮</Button>
        <Button size="large" type="text">大按钮</Button>
        <Button size="large" type="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <Button type="primary">中按钮</Button>
        <Button>中按钮</Button>
        <Button type="link">中按钮</Button>
        <Button type="text">中按钮</Button>
        <Button type="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <Button size="small" type="primary">小按钮</Button>
        <Button size="small">小按钮</Button>
        <Button size="small" type="link">小按钮</Button>
        <Button size="small" type="text">小按钮</Button>
        <Button size="small" type="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
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

### 危险按钮

用于危险操作，如删除、重置等。

```jsx live
function ButtonDangerDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button type="primary" danger>危险主按钮</Button>
      <Button danger>危险默认按钮</Button>
      <Button type="link" danger>危险链接按钮</Button>
      <Button type="text" danger>危险文本按钮</Button>
      <Button type="icon" danger>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </Button>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 禁用状态

按钮不可用状态。

```jsx live
function ButtonDisabledDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button type="primary" disabled>禁用主按钮</Button>
        <Button disabled>禁用默认按钮</Button>
        <Button type="link" disabled>禁用链接按钮</Button>
        <Button type="text" disabled>禁用文本按钮</Button>
        <Button type="icon" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <Button type="primary" danger disabled>禁用危险主按钮</Button>
        <Button danger disabled>禁用危险默认按钮</Button>
        <Button type="link" danger disabled>禁用危险链接按钮</Button>
        <Button type="text" danger disabled>禁用危险文本按钮</Button>
        <Button type="icon" danger disabled>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
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

### 加载状态

添加 loading 属性即可让按钮处于加载状态。

```jsx live
function ButtonLoadingDemo() {
  const [loading1, setLoading1] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);
  
  const handleClick1 = () => {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  };
  
  const handleClick2 = () => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 2000);
  };
  
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button type="primary" loading>加载中</Button>
      <Button loading>加载中</Button>
      <Button type="primary" loading={loading1} onClick={handleClick1}>
        点击加载
      </Button>
      <Button loading={loading2} onClick={handleClick2}>
        点击加载
      </Button>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

```jsx live
function ButtonGhostDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center p-4 bg-blue-600">
      <Button type="primary" ghost>幽灵主按钮</Button>
      <Button ghost>幽灵默认按钮</Button>
      <Button type="link" ghost>幽灵链接按钮</Button>
      <Button type="text" ghost>幽灵文本按钮</Button>
      <Button type="icon" ghost>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </Button>
    </div>
  );
}
```

  </div>
</div>

<div className="example-wrapper">
  <div className="example-preview">

### 图标按钮

带有图标的按钮可增强按钮的可识别性。

```jsx live
function ButtonWithIconDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button type="primary" icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      }>
        创建
      </Button>
      
      <Button icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      }>
        搜索
      </Button>
      
      <Button type="primary" icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      }>
        下载
      </Button>
    </div>
  );
}
```

  </div>
</div>

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `size` -> `loading` -> `disabled`。

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
      <td>type</td>
      <td>设置按钮类型</td>
      <td><code>'primary' | 'default' | 'link' | 'text' | 'icon'</code></td>
      <td><code>'default'</code></td>
    </tr>
    <tr>
      <td>size</td>
      <td>设置按钮大小</td>
      <td><code>'large' | 'middle' | 'small'</code></td>
      <td><code>'middle'</code></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>设置按钮加载状态</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>按钮失效状态</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>ghost</td>
      <td>幽灵属性，使按钮背景透明</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>danger</td>
      <td>设置危险按钮</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>设置按钮图标</td>
      <td><code>ReactNode</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td>自定义 CSS class</td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td>style</td>
      <td>自定义样式</td>
      <td><code>CSSProperties</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>点击按钮时的回调</td>
      <td><code>(event) => void</code></td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 设计指南

1. 主按钮在一个页面中最多出现一次，通常位于最明显或页面右下角的位置。
2. 当同一页面中存在多个按钮时，应保持一致的样式和大小，避免混乱。
3. 使用合适的按钮类型来表达操作的重要性和紧急程度。

## 最佳实践

1. 按钮文本应简洁明了，表明操作目的。
2. 危险操作应使用危险按钮，并考虑二次确认机制。
3. 在表单提交等异步操作中，使用加载状态防止重复提交。
4. 对于移动端，按钮大小应足够大以方便触摸操作，建议至少 44x44 像素。 