import React, { useState } from 'react';
import { useIsFirstRender } from '@lynkit/hooks';
import { Button } from '@lynkit/ui';
import { DemoCard } from '../../components';

const ChildComponent: React.FC<{ id: number }> = ({ id }) => {
  const isFirst = useIsFirstRender();
  const [renderCount, setRenderCount] = useState(0);

  return (
    <div className="p-3 bg-slate-50 rounded-md">
      <div className="flex items-center justify-between">
        <span className="text-sm">组件 #{id}</span>
        <span
          className={`px-2 py-0.5 rounded text-xs ${
            isFirst ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'
          }`}
        >
          {isFirst ? '首次渲染' : '非首次'}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <Button size="small" onClick={() => setRenderCount((c) => c + 1)}>
          触发渲染 ({renderCount})
        </Button>
      </div>
    </div>
  );
};

export const UseIsFirstRenderDemo: React.FC = () => {
  const [components, setComponents] = useState([1]);
  const isFirst = useIsFirstRender();

  return (
    <div className="space-y-6">
      <DemoCard title="useIsFirstRender" description="判断是否为组件首次渲染">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">父组件状态：</span>
            <span
              className={`px-2 py-0.5 rounded text-xs ${
                isFirst ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'
              }`}
            >
              {isFirst ? '首次渲染' : '非首次'}
            </span>
          </div>

          <div className="space-y-2">
            {components.map((id) => (
              <ChildComponent key={id} id={id} />
            ))}
          </div>

          <Button size="small" onClick={() => setComponents((c) => [...c, Math.max(...c) + 1])}>
            添加子组件
          </Button>
        </div>
      </DemoCard>
    </div>
  );
};
