import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '~/utils/helpers';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap text-base',
    'focus-visible:outline-none',
    'disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        contained: 'rounded-full px-8 py-4 font-semibold',
        text: 'rounded-full px-8 py-4 font-semibold',
        link: 'underline font-medium',
        outline: 'rounded-full px-8 py-4 font-semibold',
      },
      colour: {
        primary: '',
        secondary: '',
        tertiary: '',
      },
    },
    compoundVariants: [
      {
        colour: 'primary',
        variant: 'contained',
        class: [
          'bg-brand text-invert',
          'hover:bg-primary-hover',
          'active:bg-brand active:outline active:outline-2 active:outline-indicator-focused-alternative',
          'disabled:bg-brand-extralight',
        ],
      },
      {
        colour: 'primary',
        variant: 'text',
        class: [
          'text-brand',
          'hover:bg-primary-100',
          'active:outline active:outline-2 active:outline-indicator-focused-alternative',
          'disabled:bg-none disabled:text-brand-disabled disabled:outline disabled:outline-2 disabled:outline-indicator-focused-alternative',
        ],
      },
      {
        colour: 'primary',
        variant: 'link',
        class: [
          'text-brand',
          'hover:text-brand-hover',
          'active:text-brand',
          'disabled:text-brand-disabled',
        ],
      },
      {
        colour: 'secondary',
        variant: 'outline',
        class: [
          'border border-light text-secondary',
          'hover:bg-tertiary',
          'active:bg-primary',
          'disabled:text-tertiary disabled:border-extralight',
        ],
      },
      {
        colour: 'secondary',
        variant: 'text',
        class: [
          'text-secondary',
          'hover:bg-tertiary',
          'active:bg-primary',
          'disabled:bg-none disabled:text-tertiary',
        ],
      },
      {
        colour: 'secondary',
        variant: 'link',
        class: [
          'text-secondary',
          'hover:text-primary',
          'active:text-secondary',
          'disabled:text-tertiary',
        ],
      },
      {
        colour: 'tertiary',
        variant: 'link',
        class: ['text-quartenery', 'hover:text-tertiary'],
      },
    ],
    defaultVariants: {
      variant: 'contained',
      colour: 'primary',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, colour, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        {...props}
        className={cn(buttonVariants({ variant, colour, className }))}
        ref={ref}
      />
    );
  },
);
