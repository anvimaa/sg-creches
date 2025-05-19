import { WeeklyMenu } from '@/components/alimentacao/weekly-menu'
import { mockMenuItems } from '@/lib/data/mock-data'

export default function FoodPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alimentação</h1>
        <p className="text-muted-foreground">Gerenciamento de cardápios e refeições</p>
      </div>
      
      <WeeklyMenu menuItems={mockMenuItems} />
    </div>
  )
}