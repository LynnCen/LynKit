export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export type Size = 'small' | 'middle' | 'large';
export type Status = 'success' | 'warning' | 'error';
export type ButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text'; 