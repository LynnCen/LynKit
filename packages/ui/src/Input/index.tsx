import React, { forwardRef, useRef, useState } from 'react';
import classNames from 'classnames';
import { useConfig } from '../hooks';
import type { InputProps } from './interface';
import './style/index.less';

/**
 * Input 输入框组件
 *
 * @example
 * ```tsx
 * import { Input } from '@lynkit/ui';
 *
 * <Input placeholder="请输入" />
 * <Input prefix="￥" suffix="元" />
 * <Input showCount maxLength={20} />
 * ```
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      defaultValue = '',
      placeholder,
      disabled = false,
      readOnly = false,
      maxLength,
      showCount = false,
      size = 'middle',
      prefix,
      suffix,
      className,
      style,
      onChange,
      onPressEnter,
      onFocus,
      onBlur,
      status,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);
    const { prefixCls: globalPrefixCls } = useConfig();
    const prefixCls = `${globalPrefixCls}-input`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!disabled && !readOnly) {
        setInnerValue(newValue);
        onChange?.(newValue);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onPressEnter?.(e);
      }
    };

    // 生成 wrapper 的 classNames
    const wrapperClasses = classNames(
      `${prefixCls}-wrapper`,
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-status-${status}`]: status,
      },
      className
    );

    const renderSuffix = () => {
      if (!suffix && !showCount) return null;

      return (
        <span className={`${prefixCls}-suffix`}>
          {showCount && (
            <span className={`${prefixCls}-count`}>
              {`${value?.length || innerValue.length || 0}${maxLength ? `/${maxLength}` : ''}`}
            </span>
          )}
          {suffix}
        </span>
      );
    };

    return (
      <span className={wrapperClasses} style={style}>
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        <input
          ref={ref || inputRef}
          value={value ?? innerValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          placeholder={placeholder}
          className={prefixCls}
        />
        {renderSuffix()}
      </span>
    );
  }
);

Input.displayName = 'Input';

export default Input;
