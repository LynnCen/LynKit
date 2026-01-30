import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * template_line_app
 * @source figma
 */
const Icontemplatelineapp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.5 18V19.5H18.5C18.6726 19.5 18.8402 19.4781 19 19.437C19.8626 19.215 20.5 18.4319 20.5 17.5V6.5C20.5 5.56808 19.8626 4.78503 19 4.56301C18.8402 4.52188 18.6727 4.5 18.5 4.5L17.5 4.5V5.99996L18.5 5.99996C18.7761 5.99996 19 6.22381 19 6.49996V17.5C19 17.7761 18.7761 18 18.5 18L17.5 18Z"
        fill={color}
      />
      <path
        d="M16 4.83124L16 19.1688C16 20.3946 14.9074 21.3319 13.6959 21.1455L4.69588 19.7609L4.92397 18.2784L13.924 19.663C14.2268 19.7096 14.5 19.4752 14.5 19.1688L14.5 4.83124C14.5 4.5248 14.2268 4.29046 13.924 4.33705L4.92397 5.72167C4.68006 5.75919 4.5 5.96907 4.5 6.21585V17.7842C4.5 18.031 4.68006 18.2408 4.92397 18.2784L4.69588 19.7609C3.72022 19.6108 3 18.7713 3 17.7842V6.21585C3 5.22871 3.72022 4.38921 4.69589 4.23911L13.6959 2.8545C14.9074 2.66811 16 3.60547 16 4.83124Z"
        fill={color}
      />
    </svg>
  );
});

Icontemplatelineapp.displayName = 'Icontemplatelineapp';

export default Icontemplatelineapp;
