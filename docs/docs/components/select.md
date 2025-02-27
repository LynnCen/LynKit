---
sidebar_position: 3
---

# Select 选择器

下拉选择器。

## 何时使用

需要从多个选项中选择一个时。

## 代码演示

```jsx live
function SelectDemo() {
  const options = [
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
  ];
  
  return (
    <div className="space-y-4">
      <Select 
        placeholder="Basic usage"
        options={options}
      />
      
      <Select 
        showSearch
        placeholder="Searchable"
        options={options}
      />
    </div>
  );
}
``` 