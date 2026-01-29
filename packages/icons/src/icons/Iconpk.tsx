import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * PK
 * @source figma
 */
const Iconpk = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.16797 6.49868C2.16797 5.20081 3.2201 4.14868 4.51797 4.14868H14.4129L10.139 14.6487H4.51797C3.2201 14.6487 2.16797 13.5965 2.16797 12.2987V6.49868Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5144 9.42297L10.2405 19.923H19.4967C20.7945 19.923 21.8467 18.8708 21.8467 17.573V11.773C21.8467 10.4751 20.7945 9.42297 19.4967 9.42297L14.5144 9.42297ZM19.4967 18.423H12.4706L15.5234 10.923L19.4967 10.923C19.9661 10.923 20.3467 11.3035 20.3467 11.773V17.573C20.3467 18.0424 19.9661 18.423 19.4967 18.423Z"
        fill="black"
      />
    </svg>
  );
});

Iconpk.displayName = 'Iconpk';

export default Iconpk;
