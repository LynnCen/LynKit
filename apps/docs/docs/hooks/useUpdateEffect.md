---
sidebar_position: 3
---

# useUpdateEffect

## 简介

`useUpdateEffect` 是一个自定义 Hook，功能类似于 `useEffect`，但会跳过首次渲染时的执行。只有当依赖项发生变化且不是首次渲染时，才会执行效果函数。

## 使用场景

- 当你只想在依赖项更新时执行效果，而不是在组件首次挂载时
- 避免在组件初始化时触发不必要的副作用
- 监听特定状态变化并执行相应操作，但初始状态不需要处理
- 表单值变化后的自动保存或验证
- 防止初始数据加载触发的额外网络请求

## 使用示例

### 基本用法

```jsx
import { useState } from 'react';
import { useUpdateEffect } from '@lynkit/hooks';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // 只有当 searchTerm 改变且不是首次渲染时才发送请求
  useUpdateEffect(() => {
    const fetchData = async () => {
      // 避免空搜索
      if (!searchTerm.trim()) return;
      
      console.log('Fetching data for:', searchTerm);
      const response = await fetch(`/api/search?q=${searchTerm}`);
      const data = await response.json();
      setResults(data);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="搜索..."
      />
      <div>
        {results.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
```

### 自动保存示例

```jsx
import { useState } from 'react';
import { useUpdateEffect } from '@lynkit/hooks';

function AutoSaveForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [saveStatus, setSaveStatus] = useState('');

  // 表单数据变化时自动保存，但初始化时不保存
  useUpdateEffect(() => {
    const saveData = async () => {
      try {
        setSaveStatus('保存中...');
        // 模拟 API 请求
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log('保存表单数据:', formData);
        setSaveStatus('已保存');
      } catch (error) {
        setSaveStatus('保存失败');
      }
    };

    // 设置防抖，避免频繁保存
    const timeoutId = setTimeout(() => {
      saveData();
    }, 1000);

    // 清理函数
    return () => clearTimeout(timeoutId);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <div>
        <label>
          标题:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          内容:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>{saveStatus}</div>
    </div>
  );
}
```

### 依赖多个状态

```jsx
import { useState } from 'react';
import { useUpdateEffect } from '@lynkit/hooks';

function FilterComponent() {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'any',
    sort: 'newest'
  });
  const [products, setProducts] = useState([]);

  // 筛选条件变化时重新获取数据，但初始加载时不调用
  useUpdateEffect(() => {
    console.log('Filters changed, fetching new data');
    
    // 构建查询参数
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== 'all' && value !== 'any') {
        queryParams.append(key, value);
      }
    });
    
    // 模拟数据获取
    const fetchProducts = async () => {
      const response = await fetch(`/api/products?${queryParams}`);
      const data = await response.json();
      setProducts(data);
    };
    
    fetchProducts();
  }, [filters]);

  const updateFilter = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <div>
        <label>
          类别:
          <select 
            value={filters.category}
            onChange={(e) => updateFilter('category', e.target.value)}
          >
            <option value="all">全部</option>
            <option value="electronics">电子产品</option>
            <option value="clothing">服装</option>
          </select>
        </label>
      </div>
      
      <div>
        <label>
          价格:
          <select 
            value={filters.price}
            onChange={(e) => updateFilter('price', e.target.value)}
          >
            <option value="any">任意</option>
            <option value="low">低</option>
            <option value="medium">中</option>
            <option value="high">高</option>
          </select>
        </label>
      </div>
      
      <div>
        <label>
          排序:
          <select 
            value={filters.sort}
            onChange={(e) => updateFilter('sort', e.target.value)}
          >
            <option value="newest">最新</option>
            <option value="price-asc">价格从低到高</option>
            <option value="price-desc">价格从高到低</option>
          </select>
        </label>
      </div>
      
      <div>
        {products.map(product => (
          <div key={product.id}>
            {product.name} - ¥{product.price}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## API 属性

### 参数

```jsx
useUpdateEffect(effect, dependencies);
```

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `effect` | Function | 必填 | 要执行的副作用函数，可以返回一个清理函数 |
| `dependencies` | Array | 必填 | 依赖项数组，当这些值变化时触发效果 |

### 返回值

| 返回值 | 类型 | 描述 |
| --- | --- | --- |
| - | void | 无返回值 |

## 注意事项

1. **与 useEffect 的区别**：`useUpdateEffect` 与 React 的 `useEffect` 主要区别在于它跳过了首次渲染时的执行，仅在后续更新时触发。

2. **依赖项为空数组**：如果依赖项为空数组 `[]`，则效果永远不会执行，因为它跳过首次渲染且没有依赖项会变化。

3. **清理函数**：与 `useEffect` 一样，可以返回一个清理函数，在下一次执行前或组件卸载时调用。

4. **避免无限循环**：确保在依赖项中包含所有在效果中使用的变量，避免无限渲染循环。

5. **配合其他 Hooks 使用**：可以与 `useState`、`useRef` 等其他 Hooks 结合使用，实现更复杂的逻辑。

6. **性能优化**：使用此 Hook 可以避免首次渲染时的不必要操作，提高应用性能。 