import { forwardRef } from 'react';

import { cn } from '~/utils/helpers';

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, className, type, ...props }, ref) => (
    <>
      <p className="mb-1.5 text-sm">{label}</p>
      <input
        type={type}
        className={cn(
          'border-light flex h-12 w-full rounded-lg border bg-primary p-3 text-base',
          'placeholder:text-tertiary',
          'hover:border-medium',
          'disabled:bg-disabled disabled:border-light disabled:cursor-not-allowed',
          'disabled:placeholder:text-tertiary',
          !error && 'focus:outline-indicator-focused focus:outline focus:outline-2',
          error && 'outline-indicator-error outline outline-2',
          className,
        )}
        ref={ref}
        {...props}
      />
      <p className={cn('text-tertiary mt-1 text-sm', error && 'text-error')}>{helperText}</p>
    </>
  ),
);
