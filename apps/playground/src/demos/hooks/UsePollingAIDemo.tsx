import React, { useState } from 'react';
import { usePollingAI } from '@lynkit/hooks';
import { Button } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const UsePollingAIDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [successCount, setSuccessCount] = useState(0);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-9), `[${time}] ${msg}`]);
  };

  // 模拟轮询任务（50% 成功率）
  const pollTask = async () => {
    const success = Math.random() > 0.5;
    if (success) {
      setSuccessCount((c) => c + 1);
      addLog('✓ Poll success');
      return { status: 'ok' };
    }
    addLog('✗ Poll failed');
    throw new Error('Task not ready');
  };

  const { start, stop, reset, isPolling, currentInterval, attempts, error } = usePollingAI(
    pollTask,
    {
      initialInterval: 1000,
      maxInterval: 8000,
      backoffFactor: 2,
      maxAttempts: 5,
      onSuccess: () => addLog('→ onSuccess callback'),
      onError: () => addLog('→ onError callback'),
    }
  );

  const handleReset = () => {
    reset();
    setLogs([]);
    setSuccessCount(0);
  };

  return (
    <div className="space-y-6">
      <DemoCard title="usePollingAI" description="支持指数退避的智能轮询，失败后自动增加间隔">
        <div className="space-y-4">
          {/* 状态面板 */}
          <div className="grid grid-cols-4 gap-3 text-sm">
            <div className="p-3 bg-slate-50 rounded-md text-center">
              <div className="text-slate-500 text-xs mb-1">Status</div>
              <div className={`font-medium ${isPolling ? 'text-green-600' : 'text-slate-600'}`}>
                {isPolling ? 'Polling' : 'Idle'}
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-md text-center">
              <div className="text-slate-500 text-xs mb-1">Interval</div>
              <div className="font-medium text-slate-700">{currentInterval}ms</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-md text-center">
              <div className="text-slate-500 text-xs mb-1">Attempts</div>
              <div className={`font-medium ${attempts > 0 ? 'text-orange-600' : 'text-slate-700'}`}>
                {attempts} / 5
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-md text-center">
              <div className="text-slate-500 text-xs mb-1">Success</div>
              <div className="font-medium text-green-600">{successCount}</div>
            </div>
          </div>

          {/* 错误显示 */}
          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md">
              Last Error: {error.message}
            </div>
          )}

          {/* 日志 */}
          <div className="p-3 bg-slate-900 rounded-md h-48 overflow-auto">
            <div className="font-mono text-xs text-slate-300 space-y-1">
              {logs.length === 0 ? (
                <span className="text-slate-500">// Logs will appear here...</span>
              ) : (
                logs.map((log, i) => <div key={i}>{log}</div>)
              )}
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-2">
            <Button type="primary" size="small" disabled={isPolling} onClick={start}>
              Start Polling
            </Button>
            <Button size="small" disabled={!isPolling} onClick={stop}>
              Stop
            </Button>
            <Button type="dashed" size="small" onClick={handleReset}>
              Reset
            </Button>
          </div>

          <p className="text-xs text-slate-400">
            * 50% 成功率，失败后间隔翻倍（1s → 2s → 4s → 8s），最多重试 5 次
          </p>
        </div>
      </DemoCard>
    </div>
  );
};
