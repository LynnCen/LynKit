import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * video_edit_fill
 * @source figma
 */
const Iconvideoeditfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.3848 2.71191C19.4202 2.71211 20.2717 3.49939 20.374 4.50781L20.3848 4.71191V11.1318L14.1924 17.3457C14.162 17.3762 14.1409 17.4149 14.1318 17.457L13.4424 20.6963C10.5051 20.6963 7.0483 20.6963 4.40039 20.6963L4.19629 20.6855C3.18772 20.5833 2.40053 19.7318 2.40039 18.6963V4.71191C2.40054 3.6764 3.18772 2.82492 4.19629 2.72266L4.40039 2.71191H18.3848ZM9.60449 8.22656C9.16117 7.9459 8.57473 8.07725 8.29395 8.52051C8.19775 8.67253 8.14648 8.84939 8.14648 9.0293V14.7314C8.14694 15.2559 8.57215 15.6816 9.09668 15.6816C9.27638 15.6816 9.4526 15.6302 9.60449 15.5342L14.2656 12.582C14.6531 12.3366 14.7686 11.8231 14.5234 11.4355C14.4578 11.3319 14.3693 11.2434 14.2656 11.1777L9.60449 8.22656Z"
        fill={color}
      />
      <path
        d="M21.4209 12.207C22.567 12.207 23.4991 13.138 23.499 14.2861C23.4989 14.3777 23.4629 14.4654 23.3984 14.5303L18.0293 19.918C18.0079 19.9394 17.9807 19.9545 17.9512 19.9609L15.4102 20.5078C15.2985 20.5318 15.1989 20.4322 15.2227 20.3203L15.7646 17.7744C15.771 17.7449 15.7854 17.7177 15.8066 17.6963L21.1758 12.3086C21.2407 12.2435 21.3291 12.2071 21.4209 12.207Z"
        fill={color}
      />
    </svg>
  );
});

Iconvideoeditfill.displayName = 'Iconvideoeditfill';

export default Iconvideoeditfill;
