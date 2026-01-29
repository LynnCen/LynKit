import { useContext } from 'react';
import { ConfigContext } from '../ConfigProvider/context';
import type { ConfigContextValue } from '../ConfigProvider/interface';

/**
 * 获取全局配置的 Hook
 *
 * @example
 * ```tsx
 * import { useConfig } from '@lynkit/ui';
 *
 * function MyComponent() {
 *   const { prefixCls, theme, resolvedTheme, setTheme } = useConfig();
 *
 *   return (
 *     <div className={`${prefixCls}-my-component`}>
 *       当前主题: {resolvedTheme}
 *       <button onClick={() => setTheme('dark')}>切换暗色</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useConfig(): ConfigContextValue {
  return useContext(ConfigContext);
}

export default useConfig;
