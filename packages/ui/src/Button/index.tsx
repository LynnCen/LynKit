import React from 'react'
import classNames from 'classnames'
import { ButtonProps } from './interface'
import './style/index.less'

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'middle',
  disabled,
  loading,
  icon,
  className,
  children,
  ...rest
}) => {
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

export default Button
