import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../index';
import { ConfigProvider } from '../../ConfigProvider';

describe('Input', () => {
  // 基础渲染测试
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  // 受控组件测试
  it('works as controlled component', () => {
    const handleChange = vi.fn();
    render(<Input value="test" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledWith('new value');
  });

  // 非受控组件测试
  it('works as uncontrolled component', () => {
    render(<Input defaultValue="default" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('default');
    fireEvent.change(input, { target: { value: 'changed' } });
    expect(input).toHaveValue('changed');
  });

  // 禁用状态测试
  it('disables input when disabled', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  // 只读状态测试
  it('makes input readonly', () => {
    render(<Input readOnly />);
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
  });

  // 尺寸测试
  it('applies size class', () => {
    const { container } = render(<Input size="small" />);
    expect(container.querySelector('.lyn-input-small')).toBeInTheDocument();
  });

  // 前缀后缀测试
  it('renders prefix and suffix', () => {
    const { container } = render(
      <Input
        prefix={<span data-testid="prefix">$</span>}
        suffix={<span data-testid="suffix">.00</span>}
      />
    );
    expect(screen.getByTestId('prefix')).toBeInTheDocument();
    expect(screen.getByTestId('suffix')).toBeInTheDocument();
  });

  // 字数统计测试
  it('shows character count', () => {
    render(<Input showCount maxLength={10} defaultValue="test" />);
    expect(screen.getByText('4/10')).toBeInTheDocument();
  });

  // 回车事件测试
  it('triggers onPressEnter', () => {
    const handlePressEnter = vi.fn();
    render(<Input onPressEnter={handlePressEnter} />);
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    expect(handlePressEnter).toHaveBeenCalled();
  });

  // 状态样式测试
  it('applies error status', () => {
    const { container } = render(<Input status="error" />);
    expect(container.querySelector('.lyn-input-status-error')).toBeInTheDocument();
  });

  // ConfigProvider 集成测试
  it('uses prefixCls from ConfigProvider', () => {
    const { container } = render(
      <ConfigProvider prefixCls="custom">
        <Input />
      </ConfigProvider>
    );
    expect(container.querySelector('.custom-input-wrapper')).toBeInTheDocument();
  });
});
