import React, { useState, useRef, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
import { useConfig } from '../hooks';
import type { SelectProps, SelectOption } from './interface';
import './style/index.less';

/**
 * Select 选择器组件
 *
 * @example
 * ```tsx
 * import { Select } from '@lynkit/ui';
 *
 * const options = [
 *   { label: '选项一', value: '1' },
 *   { label: '选项二', value: '2' },
 * ];
 *
 * <Select options={options} placeholder="请选择" />
 * ```
 */
const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      value,
      defaultValue,
      placeholder = '请选择',
      disabled = false,
      options = [],
      size = 'middle',
      loading = false,
      clearable = false,
      showSearch = false,
      status,
      maxTagCount: _maxTagCount,
      dropdownClassName,
      dropdownStyle,
      className,
      style,
      onChange,
      onSearch,
      onFocus,
      onBlur,
      onClear,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState<string | number | undefined>(defaultValue);
    const [focused, setFocused] = useState(false);
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const selectRef = useRef<HTMLDivElement>(null);
    const { prefixCls: globalPrefixCls } = useConfig();
    const prefixCls = `${globalPrefixCls}-select`;

    // 获取当前选中项
    const getSelectedOption = (val: string | number | undefined) => {
      return options.find((option) => option.value === val);
    };

    // 处理选项点击
    const handleOptionClick = (option: SelectOption) => {
      if (option.disabled) return;
      const newValue = option.value;
      setInnerValue(newValue);
      onChange?.(newValue);
      setOpen(false);
      setSearchValue('');
    };

    // 处理搜索
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
      onSearch?.(value);
    };

    // 处理清除
    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      setInnerValue(undefined);
      onChange?.(undefined as unknown as string | number);
      onClear?.();
    };

    // 处理点击外部关闭
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(e.target as HTMLElement)) {
          setOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const filteredOptions =
      showSearch && searchValue
        ? options.filter((option) =>
            String(option.label).toLowerCase().includes(searchValue.toLowerCase())
          )
        : options;

    const selectedOption = getSelectedOption(value ?? innerValue);

    const classes = classNames(
      prefixCls,
      `${prefixCls}-single`,
      {
        [`${prefixCls}-open`]: open,
        [`${prefixCls}-focused`]: focused,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-status-${status}`]: status,
      },
      className
    );

    return (
      <div
        ref={ref || selectRef}
        className={classes}
        style={style}
        onClick={() => !disabled && setOpen(!open)}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
      >
        <div className={`${prefixCls}-selector`}>
          {showSearch && open ? (
            <span className={`${prefixCls}-selection-search`}>
              <input
                value={searchValue}
                onChange={handleSearch}
                placeholder={placeholder}
                autoFocus
              />
            </span>
          ) : (
            <span className={`${prefixCls}-selection-${selectedOption ? 'item' : 'placeholder'}`}>
              {selectedOption?.label || placeholder}
            </span>
          )}

          {clearable && (value ?? innerValue) && !disabled && (
            <span className={`${prefixCls}-clear`} onClick={handleClear}>
              ×
            </span>
          )}

          <span className={`${prefixCls}-arrow`}>{loading ? '...' : '▼'}</span>
        </div>

        {open && (
          <div
            className={classNames(`${prefixCls}-dropdown`, dropdownClassName)}
            style={dropdownStyle}
          >
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={classNames(`${prefixCls}-item`, {
                  [`${prefixCls}-item-selected`]: option.value === (value ?? innerValue),
                  [`${prefixCls}-item-disabled`]: option.disabled,
                })}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
