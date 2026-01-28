import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { useConfig } from '../hooks';
import type { ButtonProps } from './interface';
import './style/index.less';

/**
 * Button 按钮组件
 *
 * @example
 * ```tsx
 * import { Button } from '@lynkit/ui';
 *
 * <Button type="primary">主按钮</Button>
 * <Button type="default">默认按钮</Button>
 * <Button type="link">链接按钮</Button>
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = 'default', size = 'middle', disabled, loading, icon, className, children, ...rest },
    ref
  ) => {
    const { prefixCls: globalPrefixCls } = useConfig();
    const prefixCls = `${globalPrefixCls}-btn`;

    const classes = classNames(
      prefixCls,
      {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-disabled`]: disabled,
      },
      className
    );

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...rest}>
        {loading && <span className={`${prefixCls}-loading-icon`} />}
        {icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
