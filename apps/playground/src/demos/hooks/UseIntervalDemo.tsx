import React, { useState, useCallback } from 'react';
import { useInterval } from '@lynkit/hooks';
import { Button } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const UseIntervalDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState<number | null>(1000);

  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);

  const toggle = useCallback(() => {
    setDelay((d) => (d === null ? 1000 : null));
  }, []);

  return (
    <div className="space-y-6">
      <DemoCard title="useInterval" description="声明式的 setInterval，自动清理">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-mono font-bold text-slate-800">{count}</div>
            <span className="text-sm text-slate-500">
              {delay ? `每 ${delay}ms 更新` : '已暂停'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="primary" size="small" onClick={toggle}>
              {delay ? '暂停' : '继续'}
            </Button>
            <Button size="small" onClick={() => setCount(0)}>
              重置
            </Button>
            <Button
              size="small"
              onClick={() => setDelay(delay ? delay / 2 : 500)}
              disabled={delay !== null && delay <= 100}
            >
              加速
            </Button>
            <Button size="small" onClick={() => setDelay(delay ? delay * 2 : 1000)}>
              减速
            </Button>
          </div>
        </div>
      </DemoCard>
    </div>
  );
};
