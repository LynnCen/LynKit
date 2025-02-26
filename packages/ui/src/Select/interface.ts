import { BaseProps, Size, Status } from '../interfaces';

export interface SelectOption {
  label: React.ReactNode;
  value: string | number;
  disabled?: boolean;
  children?: SelectOption[];  // 支持分组
}

export interface SelectProps extends BaseProps {
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  options?: SelectOption[];
  size?: Size;
  loading?: boolean;
  clearable?: boolean;
  showSearch?: boolean;
  status?: Status;
  maxTagCount?: number;
  dropdownClassName?: string;
  dropdownStyle?: React.CSSProperties;
  onChange?: (value: string | number) => void;
  onSearch?: (value: string) => void;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onClear?: () => void;
} 