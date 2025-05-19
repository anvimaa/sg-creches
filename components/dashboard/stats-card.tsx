import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  variant?: 'default' | 'success' | 'warning' | 'danger'
}

export function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  description,
  variant = 'default' 
}: StatsCardProps) {
  const variantClasses = {
    default: 'text-primary bg-primary/10',
    success: 'text-green-500 bg-green-50 dark:bg-green-900/20',
    warning: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
    danger: 'text-red-500 bg-red-50 dark:bg-red-900/20',
  }
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-full ${variantClasses[variant]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}