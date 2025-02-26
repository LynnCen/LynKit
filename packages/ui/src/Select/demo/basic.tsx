import React, { useState } from 'react'
import Select from '../index'

const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3', disabled: true },
  { label: '选项4', value: '4' },
]

export default () => {
  const [value, setValue] = useState<string>()

  return (
    <div style={{ width: 200 }}>
      {/* 基础选择器 */}
      <Select
        placeholder="请选择"
        options={options}
        onChange={(value: string | number) => console.log(value)}
      />

      {/* 禁用状态 */}
      <Select disabled placeholder="禁用状态" options={options} />

      {/* 可清除 */}
      <Select clearable placeholder="可清除" options={options} />

      {/* 可搜索 */}
      <Select
        showSearch
        placeholder="可搜索"
        options={options}
        onSearch={(value: string) => console.log('搜索:', value)}
      />

      {/* 不同尺寸 */}
      <Select size="large" placeholder="大尺寸" options={options} />
      <Select placeholder="默认尺寸" options={options} />
      <Select size="small" placeholder="小尺寸" options={options} />

      {/* 不同状态 */}
      <Select status="error" placeholder="错误状态" options={options} />
      <Select status="warning" placeholder="警告状态" options={options} />
    </div>
  )
}
