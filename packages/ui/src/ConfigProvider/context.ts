import { createContext } from 'react';
import type { ConfigContextValue } from './interface';

const defaultContext: ConfigContextValue = {
  theme: 'light',
  resolvedTheme: 'light',
  prefixCls: 'lyn',
  setTheme: () => {},
};

export const ConfigContext = createContext<ConfigContextValue>(defaultContext);

ConfigContext.displayName = 'ConfigContext';
