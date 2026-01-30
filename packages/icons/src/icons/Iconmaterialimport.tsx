import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * material_import
 * @source figma
 */
const Iconmaterialimport = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.2253 10.0544L10.8373 2.4978C10.4518 1.83407 9.49289 1.83407 9.10747 2.4978L2.13737 14.501C1.7504 15.1674 2.23141 16.0024 3.00227 16.0024H10.0003C10.0003 19.3148 12.6867 22 16.0005 22C19.3143 22 22.0007 19.3148 22.0007 16.0024C22.0007 12.69 19.3143 10.0048 16.0005 10.0048C15.7378 10.0048 15.4791 10.0216 15.2253 10.0544ZM9.97237 3.99522L3.87064 14.503H10.1893C10.6633 12.6625 11.9893 11.1639 13.7219 10.4524L9.97237 3.99522ZM20.5007 16.0024C20.5007 18.4867 18.4859 20.5006 16.0005 20.5006C13.5152 20.5006 11.5004 18.4867 11.5004 16.0024C11.5004 13.5181 13.5152 11.5042 16.0005 11.5042C18.4859 11.5042 20.5007 13.5181 20.5007 16.0024Z"
        fill={color}
      />
    </svg>
  );
});

Iconmaterialimport.displayName = 'Iconmaterialimport';

export default Iconmaterialimport;
