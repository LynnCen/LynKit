import React, { useState } from 'react';
import { ExponentialBackoff, retry } from '@lynkit/api';
import { Button } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const RetryDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [successRate, setSuccessRate] = useState(30);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const simulateRequest = async (): Promise<string> => {
    await new Promise((r) => setTimeout(r, 200));
    if (Math.random() * 100 < successRate) {
      return 'Success!';
    }
    throw new Error('Request failed');
  };

  const runRetry = async () => {
    setIsRunning(true);
    setLogs([]);
    addLog(`开始请求 (成功率: ${successRate}%)`);

    try {
      let attempt = 0;
      const result = await retry(
        async () => {
          attempt++;
          addLog(`第 ${attempt} 次尝试...`);
          return simulateRequest();
        },
        {
          maxRetries: 5,
          baseInterval: 500,
          jitter: 0.1,
        }
      );
      addLog(`✅ 成功: ${result} (共尝试 ${attempt} 次)`);
    } catch (error) {
      addLog(`❌ 失败: 已达到最大重试次数`);
    }

    setIsRunning(false);
  };

  const runBackoff = () => {
    setLogs([]);
    const backoff = new ExponentialBackoff({
      baseInterval: 1000,
      maxInterval: 10000,
      maxRetries: 6,
      jitter: 0,
    });

    addLog('ExponentialBackoff 延迟序列:');
    while (backoff.canRetry) {
      const delay = backoff.nextDelay();
      addLog(`  第 ${backoff.retryCount} 次: ${delay}ms`);
    }
    addLog('(指数增长: 1s → 2s → 4s → 8s → 10s → 10s)');
  };

  return (
    <DemoCard title="ExponentialBackoff / retry" description="指数退避重试，每次失败后等待时间翻倍">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-sm text-slate-600">
            模拟成功率:
            <input
              type="range"
              min="0"
              max="100"
              value={successRate}
              onChange={(e) => setSuccessRate(Number(e.target.value))}
              className="ml-2 w-24"
            />
            <span className="ml-2 font-mono">{successRate}%</span>
          </label>
        </div>

        <div className="flex gap-2">
          <Button size="small" onClick={runRetry} disabled={isRunning}>
            {isRunning ? '运行中...' : '测试 retry()'}
          </Button>
          <Button size="small" onClick={runBackoff}>
            显示延迟序列
          </Button>
          <Button size="small" onClick={() => setLogs([])}>
            清空日志
          </Button>
        </div>

        <div className="bg-slate-900 text-slate-100 p-3 rounded-md font-mono text-xs h-48 overflow-y-auto">
          {logs.length === 0 ? (
            <span className="text-slate-500">点击按钮开始测试...</span>
          ) : (
            logs.map((log, i) => (
              <div
                key={i}
                className={
                  log.includes('✅')
                    ? 'text-green-400'
                    : log.includes('❌')
                      ? 'text-red-400'
                      : log.includes('尝试')
                        ? 'text-yellow-400'
                        : ''
                }
              >
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </DemoCard>
  );
};
