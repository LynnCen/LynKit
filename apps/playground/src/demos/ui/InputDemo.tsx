import React, { useState } from 'react';
import { Input } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const InputDemo: React.FC = () => {
  const [value, setValue] = useState('');
  const [controlled, setControlled] = useState('初始值');

  return (
    <div className="space-y-6">
      <DemoCard title="基础用法" description="最简单的输入框">
        <div className="max-w-sm">
          <Input placeholder="请输入内容" />
        </div>
      </DemoCard>

      <DemoCard title="受控输入" description="通过 value 和 onChange 控制">
        <div className="max-w-sm space-y-3">
          <Input
            value={controlled}
            onChange={(e) => setControlled(e.target.value)}
            placeholder="受控输入"
          />
          <p className="text-xs text-slate-500">当前值：{controlled}</p>
        </div>
      </DemoCard>

      <DemoCard title="前缀与后缀" description="可以添加前缀和后缀图标">
        <div className="max-w-sm space-y-3">
          <Input placeholder="搜索..." prefix="🔍" />
          <Input placeholder="输入完成" suffix="✓" />
          <Input placeholder="金额" prefix="¥" suffix="RMB" />
        </div>
      </DemoCard>

      <DemoCard title="禁用状态">
        <div className="max-w-sm">
          <Input placeholder="禁用输入" disabled value="不可编辑" />
        </div>
      </DemoCard>

      <DemoCard title="实时绑定测试">
        <div className="max-w-sm space-y-3">
          <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="输入看看" />
          <div className="text-xs text-slate-500">
            <span>输入长度：{value.length}</span>
            {value && <span className="ml-3">内容：{value}</span>}
          </div>
        </div>
      </DemoCard>
    </div>
  );
};
