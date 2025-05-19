import { StaffTable } from '@/components/funcionarios/staff-table'
import { mockEmployees } from '@/lib/data/mock-data'

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Funcionários</h1>
        <p className="text-muted-foreground">Gerenciamento de educadores e auxiliares</p>
      </div>
      
      <StaffTable employees={mockEmployees} />
    </div>
  )
}