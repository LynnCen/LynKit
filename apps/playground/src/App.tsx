import React, { useState } from 'react';
import {
  ButtonDemo,
  InputDemo,
  SelectDemo,
  UseSetStateDemo,
  UseIntervalDemo,
  UsePreviousDemo,
  UseIsFirstRenderDemo,
  DebounceDemo,
  ThrottleDemo,
  IconsDemo,
} from './demos';
import './index.css';

type DemoId =
  | 'button'
  | 'input'
  | 'select'
  | 'useSetState'
  | 'useInterval'
  | 'usePrevious'
  | 'useIsFirstRender'
  | 'debounce'
  | 'throttle'
  | 'icons';

interface NavItem {
  id: DemoId;
  label: string;
  icon: string;
  category: string;
}

const navItems: NavItem[] = [
  // UI Components
  { id: 'button', label: 'Button', icon: '🔘', category: 'UI' },
  { id: 'input', label: 'Input', icon: '📝', category: 'UI' },
  { id: 'select', label: 'Select', icon: '📋', category: 'UI' },
  // Hooks
  { id: 'useSetState', label: 'useSetState', icon: '🔄', category: 'Hooks' },
  { id: 'useInterval', label: 'useInterval', icon: '⏱️', category: 'Hooks' },
  { id: 'usePrevious', label: 'usePrevious', icon: '⏮️', category: 'Hooks' },
  { id: 'useIsFirstRender', label: 'useIsFirstRender', icon: '1️⃣', category: 'Hooks' },
  // API
  { id: 'debounce', label: 'debounce', icon: '⏳', category: 'API' },
  { id: 'throttle', label: 'throttle', icon: '🚦', category: 'API' },
  // Icons
  { id: 'icons', label: 'Icons', icon: '🎨', category: 'Icons' },
];

const demoComponents: Record<DemoId, React.ComponentType> = {
  button: ButtonDemo,
  input: InputDemo,
  select: SelectDemo,
  useSetState: UseSetStateDemo,
  useInterval: UseIntervalDemo,
  usePrevious: UsePreviousDemo,
  useIsFirstRender: UseIsFirstRenderDemo,
  debounce: DebounceDemo,
  throttle: ThrottleDemo,
  icons: IconsDemo,
};

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<DemoId>('button');

  const currentItem = navItems.find((item) => item.id === activeId);
  const DemoComponent = demoComponents[activeId];

  // 按分类分组
  const categories = ['UI', 'Hooks', 'API', 'Icons'];
  const groupedNavItems = categories.map((cat) => ({
    category: cat,
    items: navItems.filter((item) => item.category === cat),
  }));

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-5 border-b border-slate-100">
          <h1 className="text-lg font-semibold text-slate-800 tracking-tight">LynKit</h1>
          <p className="text-xs text-slate-400 mt-0.5">Playground</p>
        </div>

        <nav className="flex-1 p-3 overflow-y-auto">
          {groupedNavItems.map(({ category, items }) => (
            <div key={category} className="mb-4">
              <p className="px-3 py-1 text-xs font-medium text-slate-400 uppercase tracking-wider">
                {category}
              </p>
              <ul className="space-y-0.5 mt-1">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveId(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeId === item.id
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <p className="text-xs text-slate-400 text-center">Hot Reload Enabled 🔥</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{currentItem?.icon}</span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">{currentItem?.label}</h2>
              <p className="text-sm text-slate-400">
                @lynkit/{currentItem?.category.toLowerCase()}
              </p>
            </div>
          </div>
        </header>

        <div className="p-8">
          <DemoComponent />
        </div>
      </main>
    </div>
  );
};

export default App;
