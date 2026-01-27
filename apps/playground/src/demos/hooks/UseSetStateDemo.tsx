import React from 'react';
import { useSetState } from '@lynkit/hooks';
import { Button } from '@lynkit/ui';
import { DemoCard } from '../../components';

interface UserState {
  name: string;
  age: number;
  email: string;
}

export const UseSetStateDemo: React.FC = () => {
  const [state, setState] = useSetState<UserState>({
    name: 'John',
    age: 25,
    email: 'john@example.com',
  });

  return (
    <div className="space-y-6">
      <DemoCard title="useSetState" description="类似 class 组件的 setState，支持部分更新">
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-md font-mono text-sm">
            <pre>{JSON.stringify(state, null, 2)}</pre>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="primary" size="small" onClick={() => setState({ age: state.age + 1 })}>
              Age +1
            </Button>
            <Button size="small" onClick={() => setState({ name: 'Jane' })}>
              Change Name
            </Button>
            <Button size="small" onClick={() => setState({ email: 'new@email.com' })}>
              Update Email
            </Button>
            <Button
              type="dashed"
              size="small"
              onClick={() => setState({ name: 'John', age: 25, email: 'john@example.com' })}
            >
              Reset
            </Button>
          </div>
        </div>
      </DemoCard>
    </div>
  );
};
