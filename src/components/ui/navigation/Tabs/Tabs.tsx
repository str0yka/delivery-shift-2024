import * as TabsPrimitive from '@radix-ui/react-tabs';
import { forwardRef } from 'react';

import { cn } from '~/utils/helpers';

const TabsRoot = TabsPrimitive.Root;

const TabsContent = TabsPrimitive.Content;

const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-11 items-center justify-center rounded-2xl bg-secondary p-0.5',
      className,
    )}
    {...props}
  />
));

const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-[14px] px-4 py-2.5 text-sm text-tertiary',
      'focus-visible:outline-none',
      'data-[state=active]:bg-primary data-[state=active]:text-primary',
      'disabled:pointer-events-none',
      className,
    )}
    {...props}
  />
));

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};
