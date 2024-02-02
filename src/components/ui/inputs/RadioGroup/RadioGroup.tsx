import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { forwardRef, useId } from 'react';

import { cn } from '~/utils/helpers';

import { IconCheck } from '../../icons';

const RadioGroupRoot = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    {...props}
    className={cn('grid gap-4', className)}
    ref={ref}
  />
));

const RadioGroupItem = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, id, ...props }, ref) => {
  const reactId = useId();
  const radioButtonId = id || reactId;

  return (
    <label
      className="flex items-center gap-4"
      htmlFor={radioButtonId}
    >
      <RadioGroupPrimitive.Item
        {...props}
        id={radioButtonId}
        ref={ref}
        className={cn(
          'aspect-square h-5 w-5 rounded-full border border-light bg-primary text-primary',
          'hover:bg-disabled',
          'active:outline-extralight active:bg-primary active:outline active:outline-1',
          'disabled:cursor-not-allowed disabled:border-extralight disabled:bg-primary disabled:outline-none',
          'data-[state=checked]:border-current data-[state=checked]:bg-current data-[state=checked]:text-brand',
          'data-[state=checked]:hover:text-brand-hover',
          'data-[state=checked]:outline-primary-400 data-[state=checked]:active:text-brand data-[state=checked]:active:outline data-[state=checked]:active:outline-1',
          className,
        )}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <IconCheck className="h-4 w-4 text-invert" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {children}
    </label>
  );
});

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
};
