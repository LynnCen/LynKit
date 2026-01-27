import React, { useState } from 'react';
import { Select } from '@lynkit/ui';
import { DemoCard } from '../../components';

const basicOptions = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
];

const fruitOptions = [
  { label: '🍎 苹果', value: 'apple' },
  { label: '🍊 橙子', value: 'orange' },
  { label: '🍇 葡萄', value: 'grape' },
  { label: '🍓 草莓 (售罄)', value: 'strawberry', disabled: true },
];

export const SelectDemo: React.FC = () => {
  const [selected, setSelected] = useState<string>();

  return (
    <div className="space-y-6">
      <DemoCard title="基础用法" description="最简单的选择器">
        <div className="max-w-xs">
          <Select
            placeholder="请选择"
            options={basicOptions}
            onChange={(v) => console.warn('Selected:', v)}
          />
        </div>
      </DemoCard>

      <DemoCard title="受控选择" description="通过 value 控制选中项">
        <div className="max-w-xs space-y-3">
          <Select
            placeholder="选择水果"
            options={fruitOptions}
            value={selected}
            onChange={(v) => setSelected(v as string)}
          />
          <p className="text-xs text-slate-500">当前选中：{selected || '无'}</p>
        </div>
      </DemoCard>

      <DemoCard title="禁用选项" description="部分选项可以禁用">
        <div className="max-w-xs">
          <Select placeholder="含禁用项" options={fruitOptions} />
        </div>
      </DemoCard>
    </div>
  );
};
