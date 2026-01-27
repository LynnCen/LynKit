import React from 'react';
import { Button } from '@lynkit/ui';
import { DemoCard } from '../../components';

export const ButtonDemo: React.FC = () => {
  return (
    <div className="space-y-6">
      <DemoCard title="按钮类型" description="不同类型的按钮样式">
        <div className="flex flex-wrap gap-3">
          <Button type="primary">Primary</Button>
          <Button type="default">Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <Button type="link">Link</Button>
        </div>
      </DemoCard>

      <DemoCard title="按钮尺寸" description="支持大、中、小三种尺寸">
        <div className="flex flex-wrap items-center gap-3">
          <Button type="primary" size="large">
            Large
          </Button>
          <Button type="primary" size="middle">
            Middle
          </Button>
          <Button type="primary" size="small">
            Small
          </Button>
        </div>
      </DemoCard>

      <DemoCard title="禁用状态">
        <div className="flex flex-wrap gap-3">
          <Button type="primary" disabled>
            Primary Disabled
          </Button>
          <Button type="default" disabled>
            Default Disabled
          </Button>
        </div>
      </DemoCard>

      <DemoCard title="点击事件">
        <Button
          type="primary"
          onClick={() => {
            window.alert('Button clicked!');
          }}
        >
          Click Me
        </Button>
      </DemoCard>
    </div>
  );
};
