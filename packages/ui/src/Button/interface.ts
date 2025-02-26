import { BaseProps, ButtonType, Size } from '../interfaces';

export interface ButtonProps extends BaseProps {
  type?: ButtonType;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
} 