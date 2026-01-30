import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * photo_bold
 * @source figma
 */
const Iconphotobold = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.8501 5.0001C2.8501 3.81268 3.81269 2.8501 5.0001 2.8501H19.0001C20.1875 2.8501 21.1501 3.81269 21.1501 5.0001V19.0001C21.1501 20.1875 20.1875 21.1501 19.0001 21.1501H5.0001C3.81268 21.1501 2.8501 20.1875 2.8501 19.0001V5.0001ZM5.0001 4.6501C4.8068 4.6501 4.6501 4.8068 4.6501 5.0001V12.5772L8.47515 8.7522L12.8952 12.8322L15.9752 9.7522L19.3501 12.8675V5.0001C19.3501 4.8068 19.1934 4.6501 19.0001 4.6501H5.0001ZM19.3501 15.3171L16.0251 12.2479L14.2189 14.0541L15.6105 15.3387L14.3896 16.6614L8.52504 11.2479L4.6501 15.1228V19.0001C4.6501 19.1934 4.8068 19.3501 5.0001 19.3501H19.0001C19.1934 19.3501 19.3501 19.1934 19.3501 19.0001V15.3171Z"
        fill={color}
      />
    </svg>
  );
});

Iconphotobold.displayName = 'Iconphotobold';

export default Iconphotobold;
