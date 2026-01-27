import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface LayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  activeId: string;
  onNavChange: (id: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, navItems, activeId, onNavChange }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-5 border-b border-slate-100">
          <h1 className="text-lg font-semibold text-slate-800 tracking-tight">LynKit</h1>
          <p className="text-xs text-slate-400 mt-0.5">Playground</p>
        </div>

        <nav className="flex-1 p-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavChange(item.id)}
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
        </nav>

        <div className="p-4 border-t border-slate-100">
          <p className="text-xs text-slate-400 text-center">workspace:* 热重载</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
};
