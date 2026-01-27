import React, { useState, useMemo, useCallback } from 'react';
import { debounce } from '@lynkit/api';
import { Input } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const DebounceDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [callCount, setCallCount] = useState(0);
  const [debouncedCallCount, setDebouncedCallCount] = useState(0);

  const debouncedUpdate = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedValue(value);
        setDebouncedCallCount((c) => c + 1);
      }, 500),
    []
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      setCallCount((c) => c + 1);
      debouncedUpdate(value);
    },
    [debouncedUpdate]
  );

  return (
    <div className="space-y-6">
      <DemoCard title="debounce" description="延迟执行，连续调用只在最后一次触发后执行 (500ms)">
        <div className="space-y-4">
          <div className="max-w-sm">
            <Input placeholder="快速输入测试防抖效果" value={inputValue} onChange={handleChange} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-50 rounded-md">
              <p className="text-xs text-slate-500 mb-1">原始调用次数</p>
              <p className="text-2xl font-mono font-bold text-slate-800">{callCount}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="text-xs text-green-600 mb-1">防抖后执行次数</p>
              <p className="text-2xl font-mono font-bold text-green-700">{debouncedCallCount}</p>
            </div>
          </div>

          <div className="text-sm text-slate-600">
            <span className="text-slate-400">防抖后的值：</span>
            {debouncedValue || '(空)'}
          </div>
        </div>
      </DemoCard>
    </div>
  );
};
