import { PaymentsTable } from '@/components/financeiro/payments-table'
import { FinancialSummary } from '@/components/financeiro/financial-summary'
import { mockPayments } from '@/lib/data/mock-data'

export default function FinancialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Financeiro</h1>
        <p className="text-muted-foreground">Controle de mensalidades e finanças</p>
      </div>
      
      <FinancialSummary payments={mockPayments} />
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Mensalidades</h2>
        <PaymentsTable payments={mockPayments} />
      </div>
    </div>
  )
}