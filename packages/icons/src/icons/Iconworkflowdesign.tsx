import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * workflow_design
 * @source figma
 */
const Iconworkflowdesign = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.25 6.82248C2.25 4.29717 4.29717 2.25 6.82248 2.25H16.3787C18.904 2.25 20.9512 4.29717 20.9512 6.82248V11.098H19.4512V6.82248C19.4512 5.1256 18.0756 3.75 16.3787 3.75H6.82248C5.1256 3.75 3.75 5.1256 3.75 6.82248V16.3787C3.75 18.0756 5.1256 19.4512 6.82248 19.4512H11.048V20.9512H6.82248C4.29717 20.9512 2.25 18.904 2.25 16.3787V6.82248Z"
        fill="black"
      />
      <path
        d="M7.60802 10.7889L5.4867 8.66759L6.54736 7.60693L7.60803 8.6676L9.72934 6.54629L10.79 7.60695L7.60802 10.7889Z"
        fill="black"
      />
      <path
        d="M7.60802 16.7496L10.79 13.5676L9.72934 12.507L7.60803 14.6283L6.54736 13.5676L5.4867 14.6283L7.60802 16.7496Z"
        fill="black"
      />
      <path d="M17.4624 7.74072H12.4624V9.24072H17.4624V7.74072Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9769 21.6134L21.5478 16.0426C22.0359 15.5544 22.0359 14.763 21.5478 14.2748L19.7818 12.5089C19.2937 12.0207 18.5022 12.0207 18.0141 12.5089L12.4433 18.0797L12.2347 21.0208C12.2193 21.2376 12.2988 21.4505 12.4525 21.6042C12.6062 21.7579 12.819 21.8374 13.0359 21.822L15.9769 21.6134ZM18.898 13.7463L20.3103 15.1587L15.3122 20.1568L13.7921 20.2646L13.8999 18.7444L18.898 13.7463Z"
        fill="black"
      />
    </svg>
  );
});

Iconworkflowdesign.displayName = 'Iconworkflowdesign';

export default Iconworkflowdesign;
