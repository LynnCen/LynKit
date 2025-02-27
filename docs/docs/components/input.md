---
sidebar_position: 2
---

# Input 输入框

输入框用于获取用户输入的文本。

## 何时使用

需要用户输入文本时。

## 代码演示

```jsx live
function InputDemo() {
  const [value, setValue] = React.useState('');
  
  return (
    <div className="space-y-4">
      <Input 
        placeholder="Basic usage"
        value={value}
        onChange={setValue}
      />
      
      <Input prefix="🔍" placeholder="With prefix" />
      <Input suffix="@example.com" placeholder="With suffix" />
    </div>
  );
}
``` 