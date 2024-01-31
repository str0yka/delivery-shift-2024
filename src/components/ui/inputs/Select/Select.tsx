import * as SelectPrimitive from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '~/utils/helpers';

import { IconCheck, IconChevronDown } from '../../icons';

const SelectRoot = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    {...props}
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between whitespace-nowrap rounded-lg border border-light bg-primary p-2 pl-3 text-sm shadow-sm',
      'placeholder:text-tertiary',
      'hover:border-indicator-light hover:bg-secondary',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'data-[state=open]:border-indicator-light data-[state=open]:bg-secondary',
      '[&>span]:line-clamp-1',
      className,
    )}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <IconChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      {...props}
      ref={ref}
      className={cn(
        'relative z-50 flex max-h-96 min-w-[8rem] flex-col gap-1 overflow-hidden rounded-md border bg-primary px-1.5 py-2 text-secondary shadow-md',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    {...props}
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-lg bg-primary py-1.5 pl-3 text-base text-secondary outline-none',
      'focus:bg-secondary',
      'data-[disabled]:pointer-events-none',
      className,
    )}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <IconCheck className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

const SelectLabel: React.FC<React.ComponentProps<'span'>> = ({ children, ...props }) => (
  <span
    {...props}
    className="text-sm text-secondary"
  >
    {children}
  </span>
);

export const Select = {
  Root: SelectRoot,
  Group: SelectGroup,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Value: SelectValue,
  Label: SelectLabel,
};
