import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * volume_disabled_static
 * @source figma
 */
const Iconvolumedisabledstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.2432 2.45459C14.4798 2.31277 14.7866 2.38904 14.9287 2.62549C14.9753 2.70319 15 2.79268 15 2.8833V12.729H13.5V4.64893L7.08301 8.49854L3.5 8.49951V15.4995L6.70898 15.4985C6.45965 15.9616 6.27823 16.4663 6.17676 16.9995L3 17.0005C2.44786 17.0005 2.00023 16.5526 2 16.0005V8.00049C2 7.4482 2.44772 7.00049 3 7.00049L6.66699 6.99951L14.2432 2.45459ZM17 7.02197C19.8032 7.27459 22 9.63147 22 12.5005C22 12.8188 21.9709 13.1305 21.9189 13.4341C21.5045 13.1944 21.0551 13.0081 20.5791 12.8882C20.5914 12.7606 20.5986 12.6313 20.5986 12.5005C20.5986 10.4268 19.0207 8.72135 17 8.52002V7.02197Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3525 13.9805C21.567 13.9805 23.3622 15.7757 23.3623 17.9902C23.3623 20.2048 21.5671 21.9999 19.3525 22H11.332C9.11749 21.9999 7.32227 20.2048 7.32227 17.9902C7.32233 15.7757 9.11753 13.9805 11.332 13.9805H19.3525ZM19.3535 14.9824C17.6926 14.9824 16.3457 16.3293 16.3457 17.9902C16.346 19.6509 17.6928 20.9971 19.3535 20.9971C21.014 20.9968 22.3601 19.6507 22.3604 17.9902C22.3604 16.3295 21.0142 14.9827 19.3535 14.9824Z"
        fill="#C6C9CD"
      />
    </svg>
  );
});

Iconvolumedisabledstatic.displayName = 'Iconvolumedisabledstatic';

export default Iconvolumedisabledstatic;
