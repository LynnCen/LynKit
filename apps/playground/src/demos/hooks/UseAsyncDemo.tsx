import React from 'react';
import { useAsync } from '@lynkit/hooks';
import { Button } from '@lynkit/ui';
import { DemoCard } from '../../components';

// 模拟 API 请求
const fetchUser = async (id: string): Promise<{ id: string; name: string; email: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

  // 模拟随机失败
  if (Math.random() < 0.3) {
    throw new Error('Network Error: Failed to fetch user');
  }

  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`,
  };
};

export const UseAsyncDemo: React.FC = () => {
  const { loading, data, error, isError, trigger } = useAsync(fetchUser);

  return (
    <div className="space-y-6">
      <DemoCard title="useAsync" description="管理异步操作状态，自动处理 loading 和 error">
        <div className="space-y-4">
          {/* 状态显示 */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-slate-50 rounded-md">
              <span className="text-slate-500">Loading:</span>
              <span className={`ml-2 font-medium ${loading ? 'text-blue-600' : 'text-slate-600'}`}>
                {loading ? 'true' : 'false'}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-md">
              <span className="text-slate-500">isError:</span>
              <span className={`ml-2 font-medium ${isError ? 'text-red-600' : 'text-slate-600'}`}>
                {isError ? 'true' : 'false'}
              </span>
            </div>
          </div>

          {/* 数据/错误显示 */}
          <div className="p-4 bg-slate-50 rounded-md min-h-[100px]">
            {loading && (
              <div className="flex items-center gap-2 text-blue-600">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span>Loading...</span>
              </div>
            )}
            {isError && (
              <div className="text-red-600">
                <span className="font-medium">Error:</span> {error?.message}
              </div>
            )}
            {data && !loading && (
              <pre className="font-mono text-sm">{JSON.stringify(data, null, 2)}</pre>
            )}
            {!loading && !isError && !data && (
              <span className="text-slate-400">点击按钮发起请求</span>
            )}
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-wrap gap-2">
            <Button type="primary" size="small" disabled={loading} onClick={() => trigger('001')}>
              Fetch User 001
            </Button>
            <Button size="small" disabled={loading} onClick={() => trigger('002')}>
              Fetch User 002
            </Button>
            <Button size="small" disabled={loading} onClick={() => trigger('003')}>
              Fetch User 003
            </Button>
          </div>

          <p className="text-xs text-slate-400">* 30% 概率模拟请求失败</p>
        </div>
      </DemoCard>
    </div>
  );
};
