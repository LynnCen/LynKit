import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import { InputProps } from './interface'
import './style/index.less'

const Input: React.FC<InputProps> = ({
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
}) => {
  const [innerValue, setInnerValue] = useState(defaultValue)
  const inputRef = useRef<HTMLInputElement>(null)

  const prefixCls = 'lyn-input'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (!disabled && !readOnly) {
      setInnerValue(newValue)
      onChange?.(newValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter?.(e)
    }
  }

  const wrapperClasses = classNames(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-status-${status}`]: status,
    },
    className,
  )

  const renderSuffix = () => {
    if (!suffix && !showCount) return null

    return (
      <span className={`${prefixCls}-suffix`}>
        {showCount && (
          <span className={`${prefixCls}-count`}>
            {`${value?.length || innerValue.length || 0}${maxLength ? `/${maxLength}` : ''}`}
          </span>
        )}
        {suffix}
      </span>
    )
  }

  return (
    <span className={wrapperClasses} style={style}>
      {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
      <input
        ref={inputRef}
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
  )
}
export default Input
