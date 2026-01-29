import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_add
 * @source figma
 */
const Iconaiadd = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, color = 'currentColor', style, className, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.48826 4.48814C7.53234 1.44406 12.4676 1.44406 15.5117 4.48814C18.5557 7.53222 18.5558 12.4675 15.5117 15.5116C12.4676 18.5556 7.53235 18.5556 4.48826 15.5116C1.44418 12.4675 1.44418 7.53222 4.48826 4.48814ZM10.5703 6.20982C10.4475 5.57493 9.54561 5.55707 9.39744 6.18638L8.85838 8.48423C8.80554 8.70955 8.62746 8.88428 8.40135 8.93345L6.13865 9.42271C5.51542 9.55789 5.50576 10.4437 6.12596 10.5926L8.41404 11.1424C8.63328 11.1951 8.80468 11.3666 8.8574 11.5858L9.39744 13.8368C9.5478 14.4629 10.4456 14.4441 10.5703 13.8124L11.0049 11.6092C11.0508 11.3774 11.2287 11.1935 11.459 11.1405L13.833 10.5946C14.4597 10.4498 14.4502 9.55281 13.8203 9.42173L11.4717 8.93443C11.2346 8.88518 11.0507 8.6985 11.0049 8.46079L10.5703 6.20982Z"
        fill="black"
      />
    </svg>
  );
});

Iconaiadd.displayName = 'Iconaiadd';

export default Iconaiadd;
