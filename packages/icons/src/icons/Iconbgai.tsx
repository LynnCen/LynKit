import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * bg_ai
 * @source figma
 */
const Iconbgai = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.0945 3.27738C18.0121 3.68973 17.6897 4.01206 17.2774 4.09453L15.8143 4.38714C15.1444 4.52112 15.1444 5.47888 15.8143 5.61287L17.2774 5.90548C17.6897 5.98795 18.0121 6.31027 18.0945 6.72263L18.3871 8.18569C18.5211 8.85559 19.4789 8.85559 19.6129 8.18569L19.9055 6.72263C19.9879 6.31027 20.3103 5.98795 20.7226 5.90548L22.1857 5.61287C22.8556 5.47889 22.8556 4.52112 22.1857 4.38714L20.7226 4.09453C20.3103 4.01206 19.9879 3.68973 19.9055 3.27738L19.6129 1.81432C19.4789 1.14441 18.5211 1.14441 18.3871 1.81432L18.0945 3.27738Z"
        fill={color}
      />
      <path
        d="M16.5641 10.5492C16.6332 10.7852 16.7346 10.9925 16.8605 11.1709L7.03136 21H5C4.97049 21 4.94114 20.9994 4.91194 20.9981L16.2919 9.61819L16.5641 10.5492Z"
        fill={color}
      />
      <path
        d="M13.7177 3L12.9136 3.80404C12.6592 3.96451 12.4579 4.17238 12.3098 4.40785L3 13.7177V11.5963L11.5963 3H13.7177Z"
        fill={color}
      />
      <path
        d="M3 17.2532L13.0037 7.24952C13.139 7.3253 13.2881 7.38829 13.4508 7.43588L14.602 7.77253L3.02963 19.3449C3.01015 19.2328 3 19.1176 3 19V17.2532Z"
        fill={color}
      />
      <path d="M12.6882 21H10.5669L21 10.5669V12.6882L12.6882 21Z" fill={color} />
      <path d="M18.3451 21H16.2237L21 16.2237V18.3451L18.3451 21Z" fill={color} />
      <path d="M8.0608 3L3 8.0608V5.93948L5.93948 3H8.0608Z" fill={color} />
    </svg>
  );
});

Iconbgai.displayName = 'Iconbgai';

export default Iconbgai;
