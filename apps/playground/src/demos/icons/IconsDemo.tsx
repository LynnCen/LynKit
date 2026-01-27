import React, { useState } from 'react';
import { Input } from '@lynkit/ui';
import { DemoCard } from '../../components';
// 只导入几个示例图标用于演示
import {
  Iconhome,
  Iconsearch,
  Iconsetting,
  Iconuser,
  Iconstarted,
  Iconlike,
  Iconcheck,
  Iconclose,
  Iconarrowright,
  Iconadd,
} from '@lynkit/icons';

const icons = [
  { name: 'Iconhome', component: Iconhome },
  { name: 'Iconsearch', component: Iconsearch },
  { name: 'Iconsetting', component: Iconsetting },
  { name: 'Iconuser', component: Iconuser },
  { name: 'Iconstarted', component: Iconstarted },
  { name: 'Iconlike', component: Iconlike },
  { name: 'Iconcheck', component: Iconcheck },
  { name: 'Iconclose', component: Iconclose },
  { name: 'Iconarrowright', component: Iconarrowright },
  { name: 'Iconadd', component: Iconadd },
];

export const IconsDemo: React.FC = () => {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState(24);

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <DemoCard title="图标展示" description="@lynkit/icons 包含 1000+ 图标">
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1 max-w-xs">
              <Input
                placeholder="搜索图标..."
                prefix="🔍"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">尺寸</span>
              <input
                type="range"
                min="16"
                max="48"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-24"
              />
              <span className="text-xs text-slate-400 w-8">{size}px</span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {filteredIcons.map(({ name, component: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center p-3 bg-slate-50 rounded-md hover:bg-slate-100 transition-colors cursor-pointer group"
                onClick={() => window.navigator.clipboard.writeText(`<${name} />`)}
              >
                <Icon width={size} height={size} className="text-slate-700" />
                <span className="text-xs text-slate-400 mt-2 truncate w-full text-center group-hover:text-slate-600">
                  {name.replace('Icon', '')}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 text-center">点击图标复制组件代码</p>
        </div>
      </DemoCard>

      <DemoCard title="图标使用示例">
        <div className="space-y-3">
          <code className="block p-3 bg-slate-900 text-slate-100 rounded-md text-sm">
            {`import { IconHome, IconSettings } from '@lynkit/icons';

<IconHome width={24} height={24} />
<IconSettings className="text-blue-500" />`}
          </code>
        </div>
      </DemoCard>
    </div>
  );
};
