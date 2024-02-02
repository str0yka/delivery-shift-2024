import { forwardRef } from 'react';

export const IconUser = forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  ({ color = 'currentColor', ...props }, ref) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8ZM14.5 8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8C9.5 6.61929 10.6193 5.5 12 5.5C13.3807 5.5 14.5 6.61929 14.5 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 17.772V20H20V17.772C20 16.1046 18.9657 14.6121 17.4045 14.0267L17.2669 13.9751C13.8711 12.7017 10.1289 12.7017 6.73315 13.9751L6.59551 14.0267C5.03429 14.6121 4 16.1046 4 17.772ZM7.25984 15.3796C10.316 14.2335 13.684 14.2335 16.7402 15.3796L16.8778 15.4312C17.8536 15.7971 18.5 16.7299 18.5 17.772V18.5H5.5V17.772C5.5 16.7299 6.14643 15.7971 7.12219 15.4312L7.25984 15.3796Z"
        fill={color}
      />
    </svg>
  ),
);
