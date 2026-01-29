import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * workflow_delivery
 * @source figma
 */
const Iconworkflowdelivery = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.7578 5.37866L14.4829 7.10376L15.5436 6.0431L12.008 2.50757L8.47217 6.04324L9.53283 7.1039L11.2578 5.37891V16.1885H5.5C3.98122 16.1885 2.75 17.4197 2.75 18.9385C2.75 20.4573 3.98122 21.6885 5.5 21.6885H18.5C20.0188 21.6885 21.25 20.4573 21.25 18.9385C21.25 17.4197 20.0188 16.1885 18.5 16.1885H12.7578V5.37866ZM5.5 17.6885C4.80964 17.6885 4.25 18.2481 4.25 18.9385C4.25 19.6288 4.80964 20.1885 5.5 20.1885H18.5C19.1904 20.1885 19.75 19.6288 19.75 18.9385C19.75 18.2481 19.1904 17.6885 18.5 17.6885H5.5Z"
        fill="black"
      />
      <path
        d="M2.75 11.7397C2.75 10.221 3.98122 8.98975 5.5 8.98975H10.1958V10.4897H5.5C4.80964 10.4897 4.25 11.0494 4.25 11.7397C4.25 12.4301 4.80964 12.9897 5.5 12.9897H10.1958V14.4897H5.5C3.98122 14.4897 2.75 13.2585 2.75 11.7397Z"
        fill="black"
      />
      <path
        d="M18.5 10.4897H13.8076V8.98975H18.5C20.0188 8.98975 21.25 10.221 21.25 11.7397C21.25 13.2585 20.0188 14.4897 18.5 14.4897H13.8076V12.9897H18.5C19.1904 12.9897 19.75 12.4301 19.75 11.7397C19.75 11.0494 19.1904 10.4897 18.5 10.4897Z"
        fill="black"
      />
    </svg>
  );
});

Iconworkflowdelivery.displayName = 'Iconworkflowdelivery';

export default Iconworkflowdelivery;
