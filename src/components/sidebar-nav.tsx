import React from 'react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Flex } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export default function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  var pathname = window.location.pathname;
  return (
    <nav
      className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)}
      {...props}
    >
      {items.map(
        (item) => (
          console.log(item.href, pathname),
          (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                pathname === item.href
                  ? 'bg-muted hover:bg-muted'
                  : 'hover:bg-transparent hover:underline',
                'justify-start text-left',
              )}
            >
              {item.title}
            </Link>
          )
        ),
      )}
    </nav>
  );
}
