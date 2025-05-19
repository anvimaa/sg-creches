import { ChildrenTable } from '@/components/criancas/children-table'
import { mockChildren } from '@/lib/data/mock-data'

export default function ChildrenPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Crianças</h1>
        <p className="text-muted-foreground">Gerenciamento de crianças da creche</p>
      </div>
      
      <ChildrenTable children={mockChildren} />
    </div>
  )
}