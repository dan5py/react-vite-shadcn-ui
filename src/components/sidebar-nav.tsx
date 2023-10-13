import React from 'react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export default function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { pathname } = useLocation(); // Import useLocation from react-router-dom

  return (
    <nav
      className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.href
              ? 'bg-muted hover:bg-muted font-semibold'
              : 'hover:bg-transparent hover:underline text-muted-foreground',
            'justify-start text-left',
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
