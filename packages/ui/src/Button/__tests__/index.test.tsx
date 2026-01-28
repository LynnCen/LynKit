import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../index';
import { ConfigProvider } from '../../ConfigProvider';

describe('Button', () => {
  // 基础渲染测试
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  // 类型测试
  it('applies type class', () => {
    const { container } = render(<Button type="primary">Primary</Button>);
    expect(container.firstChild).toHaveClass('lyn-btn-primary');
  });

  // 尺寸测试
  it('applies size class', () => {
    const { container } = render(<Button size="small">Small</Button>);
    expect(container.firstChild).toHaveClass('lyn-btn-small');
  });

  // 点击事件测试
  it('handles click event', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 禁用状态测试
  it('does not trigger click when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // 加载状态测试
  it('shows loading state', () => {
    const { container } = render(<Button loading>Loading</Button>);
    expect(container.querySelector('.lyn-btn-loading-icon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  // 图标测试
  it('renders icon', () => {
    const { container } = render(
      <Button icon={<span data-testid="icon">★</span>}>With Icon</Button>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  // ConfigProvider 集成测试
  it('uses prefixCls from ConfigProvider', () => {
    const { container } = render(
      <ConfigProvider prefixCls="custom">
        <Button>Custom Prefix</Button>
      </ConfigProvider>
    );
    expect(container.firstChild).toHaveClass('custom-btn');
  });

  // ref 转发测试
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref).toHaveBeenCalled();
  });

  // 自定义 className 测试
  it('accepts custom className', () => {
    const { container } = render(<Button className="custom-class">Custom</Button>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
