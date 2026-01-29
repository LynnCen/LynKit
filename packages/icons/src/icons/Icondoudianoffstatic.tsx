import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * doudian_off_static
 * @source figma
 */
const Icondoudianoffstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.8571 0H5.14286C2.30571 0 0 2.30571 0 5.14286V18.8571C0 21.6943 2.30571 24 5.14286 24H18.8571C21.6943 24 24 21.6943 24 18.8571V5.14286C24 2.30571 21.7029 0 18.8571 0ZM14.9914 14.3057C14.9914 15.9915 14.3555 17.5818 12.9771 18.6257C12.2743 19.14 11.4257 19.4314 10.5514 19.4571C7.83067 19.5638 5.43689 17.4106 5.52857 14.6143C5.58 13.0286 6.42 11.5714 7.77429 10.74C8.7 10.1657 9.79714 9.93429 10.8771 10.0886C10.8771 10.9658 10.8857 11.8428 10.8857 12.72C10.56 12.6171 10.2086 12.6 9.87429 12.6857C9.23911 12.8376 8.63171 13.1889 8.32286 13.7829C7.94452 14.5395 8.03087 15.4694 8.58857 16.1143C9.26735 16.9224 10.4587 17.1447 11.3657 16.5686C11.9743 16.1914 12.3686 15.4886 12.3686 14.7771V8.28C12.3771 7.03714 12.3686 5.79429 12.3771 4.56H14.94C14.8614 6.52577 16.6317 8.06139 18.4971 8.12571C18.4971 8.97991 18.4948 9.83447 18.5057 10.6886C17.2457 10.6971 16.02 10.3029 14.9914 9.57429C14.9743 11.1429 14.9743 12.72 14.9914 14.3057Z"
        fill="#D9DCDF"
      />
    </svg>
  );
});

Icondoudianoffstatic.displayName = 'Icondoudianoffstatic';

export default Icondoudianoffstatic;
