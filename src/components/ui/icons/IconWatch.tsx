import { forwardRef } from 'react';

export const IconWatch = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M15.9239 16.1238C16.2375 15.8386 16.2492 15.3492 15.9494 15.0494L12.7 11.8V6.75C12.7 6.33579 12.3642 6 11.95 6C11.5358 6 11.2 6.33579 11.2 6.75V11.9858C11.2 12.251 11.3054 12.5054 11.4929 12.6929L14.8994 16.0994C15.1797 16.3796 15.6306 16.3904 15.9239 16.1238Z"
        fill={color}
      />
      <path
        d="M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3583 2 11.975C2 10.6083 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.02917 5.825 4.9375 4.925C5.84583 4.025 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6417 2 12.025 2C13.3917 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.975 18.1542 19.075 19.0625C18.175 19.9708 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20.5C14.3667 20.5 16.375 19.6708 18.025 18.0125C19.675 16.3542 20.5 14.35 20.5 12C20.5 9.63333 19.675 7.625 18.025 5.975C16.375 4.325 14.3667 3.5 12 3.5C9.65 3.5 7.64583 4.325 5.9875 5.975C4.32917 7.625 3.5 9.63333 3.5 12C3.5 14.35 4.32917 16.3542 5.9875 18.0125C7.64583 19.6708 9.65 20.5 12 20.5Z"
        fill={color}
      />
    </svg>
  ),
);
