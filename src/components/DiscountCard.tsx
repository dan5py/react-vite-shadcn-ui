import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface DiscountCardProps {
  discountCode: string
  status: "active" | "inactive"
  codeType: string
}

export function DiscountCard({
  discountCode,
  status,
  codeType,
}: DiscountCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="mb-4 transition-all duration-300">
      {/* Top section: everything on one line */}
      <div className="flex items-center justify-between p-4">
        {/* Left-aligned discount code */}
        <h3 className="text-xl font-bold">{discountCode}</h3>

        {/* Right-aligned badge & button */}
        <div className="flex items-center gap-2">
          <Badge variant={status === "active" ? "success" : "destructive"}>
            {status.toUpperCase()}
          </Badge>
          <Button variant="ghost" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>

      {/* Expandable content */}
      {isExpanded && (
        <CardContent>
          <p className="mb-2">Discount Code Details:</p>
          <p>
            <strong>Type:</strong> {codeType}
          </p>
          {/* Add more fields if needed */}
        </CardContent>
      )}
    </Card>
  )
}


export default DiscountCard;
