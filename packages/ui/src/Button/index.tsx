import React from 'react'
import classNames from 'classnames'
import { ButtonProps } from './interface'
import './style/index.less'

export default function Button({
  type = 'default',
  size = 'middle',
  disabled,
  loading,
  icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  const prefixCls = 'lyn-btn'

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-loading`]: loading,
    },
    className,
  )

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {loading && <span className={`${prefixCls}-loading-icon`} />}
      {icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
      {children}
    </button>
  )
}
