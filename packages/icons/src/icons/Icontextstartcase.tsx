import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_start_case
 * @source figma
 */
const Icontextstartcase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, color = 'currentColor', style, className, ...rest } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.41451 3.5L1 18.5H2.59431L4.30891 13.75H9.83665L11.4193 18.5H13L8.00199 3.5H6.41451ZM9.33684 12.25L7.18333 5.78688L4.85036 12.25H9.33684ZM17.3322 23C20.2694 23 21.9999 21.0331 21.9999 18.337V7.1326H20.3833V8.41436C19.4725 7.26519 18.4706 7 17.2411 7C16.1026 7 15.1008 7.37569 14.5087 7.95028C13.393 9.03315 13.1426 10.7127 13.1426 12.4807C13.1426 14.2486 13.393 15.9282 14.5087 17.0111C15.1008 17.5856 16.0798 17.9834 17.2183 17.9834C18.4251 17.9834 19.4497 17.6961 20.3605 16.5691V18.2707C20.3605 20.1271 19.4497 21.6077 17.2866 21.6077C15.9888 21.6077 15.4195 21.232 14.5998 20.5249L13.5297 21.5414C14.7137 22.5801 15.6472 23 17.3322 23ZM17.5826 8.41436C20.019 8.41436 20.3605 10.4475 20.3605 12.4807C20.3605 14.5138 20.019 16.547 17.5826 16.547C15.1463 16.547 14.782 14.5138 14.782 12.4807C14.782 10.4475 15.1463 8.41436 17.5826 8.41436Z"
        fill={color}
      />
    </svg>
  );
});

Icontextstartcase.displayName = 'Icontextstartcase';

export default Icontextstartcase;
