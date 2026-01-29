import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../index';
import { ConfigProvider } from '../../ConfigProvider';

const defaultOptions = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3', disabled: true },
];

describe('Select', () => {
  // 基础渲染测试
  it('renders correctly', () => {
    render(<Select options={defaultOptions} placeholder="请选择" />);
    expect(screen.getByText('请选择')).toBeInTheDocument();
  });

  // 点击展开下拉菜单
  it('opens dropdown on click', () => {
    render(<Select options={defaultOptions} />);
    const selector = screen.getByText('请选择');
    fireEvent.click(selector);
    expect(screen.getByText('选项一')).toBeInTheDocument();
    expect(screen.getByText('选项二')).toBeInTheDocument();
  });

  // 选择选项测试
  it('selects option on click', () => {
    const handleChange = vi.fn();
    render(<Select options={defaultOptions} onChange={handleChange} />);

    // 打开下拉
    fireEvent.click(screen.getByText('请选择'));

    // 选择选项
    fireEvent.click(screen.getByText('选项一'));

    expect(handleChange).toHaveBeenCalledWith('1');
  });

  // 受控组件测试
  it('works as controlled component', () => {
    render(<Select options={defaultOptions} value="2" />);
    expect(screen.getByText('选项二')).toBeInTheDocument();
  });

  // 非受控组件测试
  it('works as uncontrolled component', () => {
    render(<Select options={defaultOptions} defaultValue="1" />);
    expect(screen.getByText('选项一')).toBeInTheDocument();
  });

  // 禁用状态测试
  it('does not open when disabled', () => {
    render(<Select options={defaultOptions} disabled />);
    fireEvent.click(screen.getByText('请选择'));
    expect(screen.queryByText('选项一')).not.toBeInTheDocument();
  });

  // 禁用选项测试
  it('does not select disabled option', () => {
    const handleChange = vi.fn();
    render(<Select options={defaultOptions} onChange={handleChange} />);

    fireEvent.click(screen.getByText('请选择'));
    fireEvent.click(screen.getByText('选项三')); // disabled option

    expect(handleChange).not.toHaveBeenCalled();
  });

  // 清除功能测试
  it('clears selection when clearable', () => {
    const handleChange = vi.fn();
    const handleClear = vi.fn();
    render(
      <Select
        options={defaultOptions}
        value="1"
        clearable
        onChange={handleChange}
        onClear={handleClear}
      />
    );

    const clearButton = screen.getByText('×');
    fireEvent.click(clearButton);

    expect(handleClear).toHaveBeenCalled();
  });

  // 尺寸测试
  it('applies size class', () => {
    const { container } = render(<Select options={defaultOptions} size="large" />);
    expect(container.querySelector('.lyn-select-large')).toBeInTheDocument();
  });

  // 状态样式测试
  it('applies error status', () => {
    const { container } = render(<Select options={defaultOptions} status="error" />);
    expect(container.querySelector('.lyn-select-status-error')).toBeInTheDocument();
  });

  // 搜索功能测试
  it('filters options when showSearch', () => {
    render(<Select options={defaultOptions} showSearch />);

    // 打开下拉
    fireEvent.click(screen.getByText('请选择'));

    // 输入搜索
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '一' } });

    expect(screen.getByText('选项一')).toBeInTheDocument();
    expect(screen.queryByText('选项二')).not.toBeInTheDocument();
  });

  // ConfigProvider 集成测试
  it('uses prefixCls from ConfigProvider', () => {
    const { container } = render(
      <ConfigProvider prefixCls="custom">
        <Select options={defaultOptions} />
      </ConfigProvider>
    );
    expect(container.querySelector('.custom-select')).toBeInTheDocument();
  });

  // 点击外部关闭测试
  it('closes dropdown when clicking outside', () => {
    render(
      <div>
        <Select options={defaultOptions} />
        <button data-testid="outside">Outside</button>
      </div>
    );

    // 打开下拉
    fireEvent.click(screen.getByText('请选择'));
    expect(screen.getByText('选项一')).toBeInTheDocument();

    // 点击外部
    fireEvent.click(screen.getByTestId('outside'));
    expect(screen.queryByText('选项一')).not.toBeInTheDocument();
  });

  // 自定义 className 测试
  it('accepts custom className', () => {
    const { container } = render(<Select options={defaultOptions} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
