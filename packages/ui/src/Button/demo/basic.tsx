import React from 'react'
import Button from '../index'

export default () => {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {/* 按钮类型 */}
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>

      {/* 按钮尺寸 */}
      <div style={{ width: '100%', marginTop: '16px' }}>
        <Button size="large">Large Button</Button>
        <Button>Default Button</Button>
        <Button size="small">Small Button</Button>
      </div>

      {/* 按钮状态 */}
      <div style={{ width: '100%', marginTop: '16px' }}>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
      </div>

      {/* 图标按钮 */}
      <div style={{ width: '100%', marginTop: '16px' }}>
        <Button icon={<span>⭐</span>}>With Icon</Button>
        <Button icon={<span>⭐</span>} />
      </div>

      {/* 点击事件 */}
      <div style={{ width: '100%', marginTop: '16px' }}>
        <Button type="primary" onClick={() => alert('Button clicked!')}>
          Click Me
        </Button>
      </div>
    </div>
  )
}
