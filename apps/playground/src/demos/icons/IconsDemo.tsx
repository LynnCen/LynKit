import React, { useState, useMemo } from 'react';
import { Input } from '@lynkit/ui';
import { DemoCard } from '../../components';
import * as Icons from '@lynkit/icons';
import type { IconComponent } from '@lynkit/icons';

const allIcons = Object.entries(Icons)
  .filter(([name, comp]) => name.startsWith('Icon') && comp)
  .map(([name, component]) => ({ name, component: component as IconComponent }));

const PAGE_SIZE = 120;

export const IconsDemo: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filteredIcons = useMemo(
    () => allIcons.filter((i) => i.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const displayIcons = filteredIcons.slice(0, page * PAGE_SIZE);
  const hasMore = displayIcons.length < filteredIcons.length;

  return (
    <div className="space-y-4">
      <DemoCard title="Icons" description={`共 ${allIcons.length} 个图标，点击复制`}>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Input
              placeholder="搜索..."
              value={search}
              onChange={(v) => {
                setSearch(v);
                setPage(1);
              }}
              className="max-w-[200px]"
            />
            <span className="text-xs text-slate-400">
              {displayIcons.length} / {filteredIcons.length}
            </span>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {displayIcons.map(({ name, component: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center p-2 rounded hover:bg-slate-100 cursor-pointer transition-colors group"
                onClick={() => window.navigator.clipboard.writeText(`<${name} />`)}
                title={name}
              >
                <Icon size={22} className="text-slate-600 group-hover:text-slate-900" />
                <span className="text-[10px] text-slate-400 mt-1 truncate w-full text-center">
                  {name.replace('Icon', '')}
                </span>
              </div>
            ))}
          </div>

          {hasMore && (
            <button
              onClick={() => setPage((p) => p + 1)}
              className="w-full py-2 text-xs text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded transition-colors"
            >
              加载更多
            </button>
          )}
        </div>
      </DemoCard>
    </div>
  );
};
