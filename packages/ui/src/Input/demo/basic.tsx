import React, { useState } from 'react'
import Input from '../index'

export default () => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: 300 }}>
      {/* 基础输入框 */}
      <Input
        placeholder="Basic usage"
        onChange={(value) => console.log(value)}
      />

      {/* 带图标的输入框 */}
      <Input
        placeholder="Search input"
        // prefix={<SearchOutlined />}
        onChange={setValue}
      />

      {/* 禁用状态 */}
      <Input disabled placeholder="Disabled input" />

      {/* 带字数统计 */}
      <Input showCount maxLength={20} placeholder="Input with word count" />

      {/* 不同尺寸 */}
      <Input size="large" placeholder="Large size" />
      <Input placeholder="Default size" />
      <Input size="small" placeholder="Small size" />

      {/* 带状态的输入框 */}
      <Input status="error" placeholder="Error status" />
      <Input status="warning" placeholder="Warning status" />
    </div>
  )
}
