import React, { useState, useMemo, useRef } from 'react';
import { throttle } from '@lynkit/api';
import { Button } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const ThrottleDemo: React.FC = () => {
  const [normalCount, setNormalCount] = useState(0);
  const [throttledCount, setThrottledCount] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [throttledPos, setThrottledPos] = useState({ x: 0, y: 0 });
  const areaRef = useRef<HTMLDivElement>(null);

  const throttledSetPos = useMemo(
    () =>
      throttle((x: number, y: number) => {
        setThrottledPos({ x, y });
        setThrottledCount((c) => c + 1);
      }, 100),
    []
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    setMousePos({ x, y });
    setNormalCount((c) => c + 1);
    throttledSetPos(x, y);
  };

  const reset = () => {
    setNormalCount(0);
    setThrottledCount(0);
    setMousePos({ x: 0, y: 0 });
    setThrottledPos({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-6">
      <DemoCard title="throttle" description="节流执行，限制一段时间内只执行一次 (100ms)">
        <div className="space-y-4">
          <div
            ref={areaRef}
            className="w-full h-40 bg-slate-100 rounded-md relative cursor-crosshair overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* 原始位置指示 */}
            <div
              className="absolute w-2 h-2 bg-red-400 rounded-full -translate-x-1/2 -translate-y-1/2 transition-none"
              style={{ left: mousePos.x, top: mousePos.y }}
            />
            {/* 节流位置指示 */}
            <div
              className="absolute w-4 h-4 border-2 border-green-500 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{ left: throttledPos.x, top: throttledPos.y }}
            />
            <p className="absolute bottom-2 left-2 text-xs text-slate-400">在此区域移动鼠标</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-red-50 rounded-md">
              <p className="text-xs text-red-600 mb-1">原始触发次数</p>
              <p className="text-2xl font-mono font-bold text-red-700">{normalCount}</p>
              <p className="text-xs text-red-400 mt-1">
                ({mousePos.x}, {mousePos.y})
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="text-xs text-green-600 mb-1">节流后执行次数</p>
              <p className="text-2xl font-mono font-bold text-green-700">{throttledCount}</p>
              <p className="text-xs text-green-400 mt-1">
                ({throttledPos.x}, {throttledPos.y})
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">
              节省了 {normalCount > 0 ? Math.round((1 - throttledCount / normalCount) * 100) : 0}%
              的执行
            </p>
            <Button size="small" onClick={reset}>
              重置计数
            </Button>
          </div>
        </div>
      </DemoCard>
    </div>
  );
};
