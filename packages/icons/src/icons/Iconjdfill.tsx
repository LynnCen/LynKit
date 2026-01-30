import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * jd_fill
 * @source figma
 */
const Iconjdfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.5929 14.4643C15.95 15.05 14.9786 15.3428 13.7 15.3428H12.9572V8.17856H13.7C14.9786 8.17856 15.9572 8.47856 16.5929 9.05713C17.2215 9.62856 17.55 10.5643 17.55 11.7643C17.55 12.9571 17.2215 13.8928 16.5929 14.4643Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.28571 22H17.7143C20.0786 22 22 20.0786 22 17.7143V6.28571C22 3.92143 20.0786 2 17.7143 2H6.28571C3.92143 2 2 3.92143 2 6.28571V17.7143C2 20.0786 3.92143 22 6.28571 22ZM17.6929 7.97856C16.7357 7.1357 15.3215 6.70713 13.5072 6.70713H11.3643V16.8143H13.5072C15.3215 16.8143 16.7286 16.3857 17.6929 15.5428C18.6429 14.7143 19.1429 13.4 19.1429 11.7571C19.1429 10.1214 18.6429 8.80713 17.6929 7.97856ZM10.2357 13.2357C10.2357 14.4285 9.88571 15.3285 9.19285 15.9285C8.51428 16.5143 7.42142 16.8071 6.02142 16.8071H5.78571V15.3428H5.95713C6.44285 15.3357 6.84999 15.2928 7.17856 15.2143C7.51428 15.1285 7.80713 14.9928 8.04999 14.8071C8.24999 14.65 8.39285 14.4428 8.47142 14.2C8.55713 13.9428 8.60713 13.4714 8.60713 12.8071V6.71425H10.2428L10.2357 13.2357Z"
        fill={color}
      />
    </svg>
  );
});

Iconjdfill.displayName = 'Iconjdfill';

export default Iconjdfill;
