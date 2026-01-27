import React, { useState } from 'react';
import { Button, Input, Select } from '@lynkit/ui';
import { useSetState, useInterval } from '@lynkit/hooks';
import './index.css';

const DemoSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-white rounded-lg p-6 mb-6 shadow">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [state, setState] = useSetState({ count: 0, name: 'LynKit' });

  const selectOptions = [
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3', disabled: true },
  ];

  useInterval(() => {
    console.log('Interval tick:', new Date().toLocaleTimeString());
  }, 5000);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🎮 LynKit Playground
        </h1>
        <p className="text-gray-600 mb-8">
          组件库开发测试平台 - 实时预览所有组件
        </p>

        <DemoSection title="📦 按钮组件 (Button)">
          <div className="flex gap-4 flex-wrap">
            <Button type="primary" onClick={() => alert('Primary clicked!')}>
              Primary Button
            </Button>
            <Button type="default" onClick={() => alert('Default clicked!')}>
              Default Button
            </Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <Button type="primary" disabled>
              Disabled Button
            </Button>
          </div>
        </DemoSection>

        <DemoSection title="📝 输入框组件 (Input)">
          <div className="space-y-4 max-w-md">
            <Input
              placeholder="请输入内容"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input placeholder="带前缀的输入框" prefix="🔍" />
            <Input placeholder="带后缀的输入框" suffix="✅" />
            <Input placeholder="禁用状态" disabled />
            <p className="text-sm text-gray-600">当前输入: {inputValue}</p>
          </div>
        </DemoSection>

        <DemoSection title="🎯 选择器组件 (Select)">
          <div className="max-w-md">
            <Select
              placeholder="请选择"
              options={selectOptions}
              onChange={(value) => console.log('Selected:', value)}
            />
          </div>
        </DemoSection>

        <DemoSection title="🪝 Hooks 示例">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">useSetState</h3>
              <p>Count: {state.count}</p>
              <p>Name: {state.name}</p>
              <div className="flex gap-2 mt-2">
                <Button
                  onClick={() => setState({ count: state.count + 1 })}
                  type="primary"
                  size="small"
                >
                  +1
                </Button>
                <Button
                  onClick={() => setState({ name: 'Updated!' })}
                  size="small"
                >
                  Change Name
                </Button>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded">
              <h3 className="font-semibold mb-2">useInterval</h3>
              <p className="text-sm text-gray-600">
                每 5 秒在控制台输出一次时间戳 (打开控制台查看)
              </p>
            </div>
          </div>
        </DemoSection>

        <footer className="text-center text-gray-500 mt-12">
          <p>使用 workspace:* 引用本地包，实时热重载 🔥</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
