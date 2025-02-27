import React, { useState } from 'react'
import { Button, Input, Select } from '../packages/ui/src'
import './index.css'

const DemoSection = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <section className="bg-white rounded-lg p-6 mb-6 shadow">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
)

const App = () => {
  const [inputValue, setInputValue] = useState('')

  const selectOptions = [
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3', disabled: true },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          LynKit UI 组件预览
        </h1>

        <DemoSection title="Button 按钮">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="text">Text</Button>
              <Button type="link">Link</Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button size="large">Large</Button>
              <Button>Default</Button>
              <Button size="small">Small</Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </DemoSection>

        <DemoSection title="Input 输入框">
          <div className="space-y-4 max-w-md">
            <Input
              placeholder="Basic usage"
              value={inputValue}
              onChange={setInputValue}
            />
            <Input prefix="🔍" placeholder="With prefix" />
            <Input suffix="@example.com" placeholder="With suffix" />
            <Input disabled placeholder="Disabled input" />

            <div className="flex flex-wrap gap-2">
              <Input size="large" placeholder="Large size" />
              <Input placeholder="Default size" />
              <Input size="small" placeholder="Small size" />
            </div>

            <Input status="error" placeholder="Error status" />
            <Input showCount maxLength={20} placeholder="With word count" />
          </div>
        </DemoSection>

        <DemoSection title="Select 选择器">
          <div className="space-y-4 max-w-md">
            <Select
              placeholder="Basic usage"
              options={selectOptions}
              onChange={(value) => console.log('selected:', value)}
            />

            <Select
              showSearch
              placeholder="Searchable"
              options={selectOptions}
              onSearch={(value) => console.log('searching:', value)}
            />

            <Select disabled placeholder="Disabled" options={selectOptions} />

            <div className="flex flex-wrap gap-2">
              <Select
                size="large"
                placeholder="Large"
                options={selectOptions}
              />
              <Select placeholder="Default" options={selectOptions} />
              <Select
                size="small"
                placeholder="Small"
                options={selectOptions}
              />
            </div>

            <Select
              status="error"
              placeholder="Error"
              options={selectOptions}
            />
          </div>
        </DemoSection>
      </div>
    </div>
  )
}

export default App
