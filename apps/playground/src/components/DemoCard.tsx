import React from 'react';

interface DemoCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const DemoCard: React.FC<DemoCardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-medium text-slate-800">{title}</h3>
        {description && <p className="text-xs text-slate-500 mt-1">{description}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};
