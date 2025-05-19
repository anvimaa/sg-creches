import { GuardiansTable } from '@/components/responsaveis/guardians-table'
import { mockGuardians } from '@/lib/data/mock-data'

export default function GuardiansPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Responsáveis</h1>
        <p className="text-muted-foreground">Gerenciamento de pais e responsáveis</p>
      </div>
      
      <GuardiansTable guardians={mockGuardians} />
    </div>
  )
}