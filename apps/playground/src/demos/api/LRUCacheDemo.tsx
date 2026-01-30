import React, { useState, useRef } from 'react';
import { LRUCache } from '@lynkit/api';
import { Button, Input } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const LRUCacheDemo: React.FC = () => {
  const cacheRef = useRef(new LRUCache<string>(5));
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [, forceUpdate] = useState(0);

  const cache = cacheRef.current;

  const handleSet = () => {
    if (key && value) {
      cache.set(key, value);
      setKey('');
      setValue('');
      setResult(`设置成功: ${key} = ${value}`);
      forceUpdate((n) => n + 1);
    }
  };

  const handleGet = () => {
    if (key) {
      const val = cache.get(key);
      setResult(val !== undefined ? `获取成功: ${key} = ${val}` : `未找到: ${key}`);
      forceUpdate((n) => n + 1);
    }
  };

  const handleDelete = () => {
    if (key) {
      const deleted = cache.delete(key);
      setResult(deleted ? `删除成功: ${key}` : `未找到: ${key}`);
      setKey('');
      forceUpdate((n) => n + 1);
    }
  };

  const handleClear = () => {
    cache.clear();
    setResult('已清空缓存');
    forceUpdate((n) => n + 1);
  };

  const keys = cache.keys();

  return (
    <DemoCard title="LRUCache" description="LRU 缓存 (容量: 5)，超出容量时淘汰最久未使用的项">
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input placeholder="键" value={key} onChange={setKey} className="flex-1" />
          <Input placeholder="值" value={value} onChange={setValue} className="flex-1" />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button size="small" onClick={handleSet}>
            Set
          </Button>
          <Button size="small" onClick={handleGet}>
            Get
          </Button>
          <Button size="small" onClick={handleDelete}>
            Delete
          </Button>
          <Button size="small" onClick={handleClear}>
            Clear
          </Button>
        </div>

        {result && <div className="text-sm text-slate-600 bg-slate-50 p-2 rounded">{result}</div>}

        <div className="border-t pt-4">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>缓存内容 (按最近使用排序)</span>
            <span>
              {cache.size} / {cache.capacity}
            </span>
          </div>

          {keys.length === 0 ? (
            <p className="text-sm text-slate-400">缓存为空</p>
          ) : (
            <div className="flex gap-2 flex-wrap">
              {keys.map((k, i) => (
                <div
                  key={k}
                  className={`px-2 py-1 rounded text-xs font-mono ${
                    i === 0
                      ? 'bg-green-100 text-green-700'
                      : i === keys.length - 1
                        ? 'bg-red-100 text-red-700'
                        : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {k}: {cache.get(k)}
                </div>
              ))}
            </div>
          )}

          <p className="text-xs text-slate-400 mt-2">
            绿色 = 最近使用 | 红色 = 最久未使用（将被淘汰）
          </p>
        </div>
      </div>
    </DemoCard>
  );
};
