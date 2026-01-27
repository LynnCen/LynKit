import React, { useState } from 'react';
import { usePrevious } from '@lynkit/hooks';
import { Button, Input } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const UsePreviousDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const prevCount = usePrevious(count);
  const prevText = usePrevious(text);

  return (
    <div className="space-y-6">
      <DemoCard title="usePrevious" description="获取状态的上一个值">
        <div className="space-y-6">
          {/* 数字示例 */}
          <div className="space-y-3">
            <p className="text-sm text-slate-600">数字变化追踪</p>
            <div className="flex items-center gap-6">
              <div>
                <span className="text-xs text-slate-400">当前</span>
                <div className="text-2xl font-mono font-bold">{count}</div>
              </div>
              <div>
                <span className="text-xs text-slate-400">上一个</span>
                <div className="text-2xl font-mono text-slate-400">{prevCount ?? '-'}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="small" onClick={() => setCount((c) => c + 1)}>
                +1
              </Button>
              <Button size="small" onClick={() => setCount((c) => c - 1)}>
                -1
              </Button>
              <Button size="small" onClick={() => setCount(Math.floor(Math.random() * 100))}>
                随机
              </Button>
            </div>
          </div>

          {/* 文本示例 */}
          <div className="space-y-3">
            <p className="text-sm text-slate-600">文本变化追踪</p>
            <div className="max-w-xs">
              <Input
                placeholder="输入文本"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="text-xs text-slate-500">上一个值：{prevText || '(无)'}</div>
          </div>
        </div>
      </DemoCard>
    </div>
  );
};
