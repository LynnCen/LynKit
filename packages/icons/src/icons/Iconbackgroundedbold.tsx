import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * backgrounded_bold
 * @source figma
 */
const Iconbackgroundedbold = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.1475 4.90576C21.1488 4.93705 21.1494 4.96889 21.1494 5.00049V7.09326L7.09277 21.1499H5C4.9684 21.1499 4.93656 21.1493 4.90527 21.1479L4.56445 21.1333L21.1328 4.56494L21.1475 4.90576ZM21.1494 12.7505L12.75 21.1499H10.2041L21.1494 10.2046V12.7505ZM21.1494 18.4077L18.4072 21.1499H15.8613L21.1494 15.8618V18.4077ZM19 2.8501C19.1261 2.85012 19.2498 2.8614 19.3701 2.88232L19.6553 2.93115L2.93066 19.6558L2.88184 19.3706C2.86092 19.2502 2.84963 19.1266 2.84961 19.0005V17.1909L17.1904 2.8501H19ZM2.84961 14.0796V11.5347L11.5342 2.8501H14.0791L2.84961 14.0796ZM2.84961 8.42334V5.87744L5.87695 2.8501H8.42285L2.84961 8.42334ZM19.1592 3.00635H19.1562C19.1048 3.00237 19.0525 3.0005 19 3.00049C19.0536 3.0005 19.1067 3.0022 19.1592 3.00635Z"
        fill={color}
      />
    </svg>
  );
});

Iconbackgroundedbold.displayName = 'Iconbackgroundedbold';

export default Iconbackgroundedbold;
