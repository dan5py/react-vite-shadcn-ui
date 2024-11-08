import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CountBtnProps {
  className?: string;
}

export default function CountBtn({ className }: CountBtnProps) {
  const [count, setCount] = useState(0);

  return (
    <Button
      onClick={() => setCount((count) => count + 1)}
      className={className}
    >
      Count is: {count}
    </Button>
  );
}
