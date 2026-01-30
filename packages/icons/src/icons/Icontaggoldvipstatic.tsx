import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * tag_goldvip_static
 * @source figma
 */
const Icontaggoldvipstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, color = 'currentColor', style, className, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="14"
      viewBox="0 0 26 14"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <path
        d="M0 3C0 1.34315 1.34315 0 3 0H23C24.6569 0 26 1.34315 26 3V11C26 12.6569 24.6569 14 23 14H3C1.34315 14 0 12.6569 0 11V3Z"
        fill="url(#paint0_linear_17793_4990)"
      />
      <path
        d="M4.06177 3.03259H5.99377L7.40871 9.12967H7.47771L9.97277 3.03259H11.7898L8.32426 10.9863H6.15076L4.06177 3.03259Z"
        fill="#CB6A1A"
      />
      <path d="M12.8276 3.03259H14.5756L13.916 10.9863H12.168L12.8276 3.03259Z" fill="#CB6A1A" />
      <path
        d="M16.3427 3.03259H19.0682C19.6662 3.03259 20.1601 3.08608 20.5499 3.19304C20.948 3.29237 21.2567 3.45282 21.476 3.67439C21.7036 3.88832 21.8529 4.1672 21.9241 4.51102C22.0036 4.8472 22.0233 5.25596 21.9834 5.73731C21.9403 6.25686 21.8464 6.69619 21.7016 7.05529C21.5575 7.40675 21.3497 7.69326 21.0784 7.91484C20.807 8.13641 20.4679 8.29686 20.061 8.39619C19.6547 8.48787 19.1717 8.53371 18.612 8.53371H17.6345L17.4312 10.9863H15.6832L16.3427 3.03259ZM18.498 7.13551C18.797 7.13551 19.0477 7.11641 19.2502 7.07821C19.4534 7.03237 19.6207 6.95596 19.7522 6.849C19.8914 6.74203 19.9948 6.6045 20.0625 6.43641C20.1307 6.26068 20.1759 6.03911 20.1981 5.77169C20.219 5.51956 20.2099 5.30563 20.1708 5.12989C20.1317 4.95416 20.0514 4.81282 19.9299 4.70585C19.8161 4.59888 19.6577 4.52248 19.4545 4.47664C19.2589 4.43079 19.0155 4.40787 18.7242 4.40787H17.9767L17.7505 7.13551H18.498Z"
        fill="#CB6A1A"
      />
      <defs>
        <linearGradient
          id="paint0_linear_17793_4990"
          x1="0"
          y1="7"
          x2="26"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0003" stopColor="#FBEEDB" />
          <stop offset="1" stopColor="#FFE7C4" />
        </linearGradient>
      </defs>
    </svg>
  );
});

Icontaggoldvipstatic.displayName = 'Icontaggoldvipstatic';

export default Icontaggoldvipstatic;
