import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_missingfont
 * @source figma
 */
const Icontextmissingfont = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2 19.5L7.41613 4.5H9.00408L14.0036 19.5H12.4225L8.18517 6.78688L3.59479 19.5H2Z"
        fill={color}
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 14.75H5V13.25H11V14.75Z" fill={color} />
      <path
        d="M19.1097 10.6768C19.5642 10.2332 19.8976 9.84321 20.1135 9.50633L20.1141 9.50546C20.3334 9.16978 20.4471 8.74146 20.4471 8.21279C20.4471 7.4691 20.2268 6.90172 19.7977 6.4946C19.3679 6.08681 18.7566 5.87511 17.9473 5.87511C17.2081 5.87511 16.6347 6.03311 16.2155 6.33654C15.8092 6.63949 15.5186 7.10343 15.3507 7.74117L15.3144 7.87903L14 7.25343L14.0296 7.15411C14.2842 6.29842 14.7515 5.64116 15.4324 5.18997C16.1119 4.72729 16.9588 4.5 17.9658 4.5C19.175 4.5 20.152 4.82885 20.884 5.49837C21.6293 6.16874 22 7.05904 22 8.15694C22 8.70387 21.9112 9.1978 21.731 9.63665L21.7305 9.63783C21.5531 10.0573 21.3304 10.4218 21.0617 10.7301C20.8105 11.0322 20.4859 11.3701 20.0888 11.7436L19.5918 12.2421C19.2576 12.6259 19.0195 13.0566 18.8764 13.5349C18.7328 14.003 18.6588 14.6173 18.6588 15.3803V15.5H17.2729V15.3803C17.2729 14.3941 17.3599 13.5931 17.5376 12.9819L17.5383 12.9797C17.7295 12.3662 18.0541 11.8051 18.5103 11.2968L18.5132 11.2935L19.1097 10.6768Z"
        fill={color}
      />
      <path
        d="M19 18.5C19 19.0523 18.5523 19.5 18 19.5C17.4477 19.5 17 19.0523 17 18.5C17 17.9477 17.4477 17.5 18 17.5C18.5523 17.5 19 17.9477 19 18.5Z"
        fill={color}
      />
    </svg>
  );
});

Icontextmissingfont.displayName = 'Icontextmissingfont';

export default Icontextmissingfont;
