import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
}

export default function CountBtn({ className }: Props) {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((count) => count + 1)} className={cn('', className)}>
      Count is: {count}
    </Button>
  );
}
