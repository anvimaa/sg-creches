import { ChildrenForm } from '@/components/criancas/children-form'

export default function NewChildPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Nova Criança</h1>
        <p className="text-muted-foreground">Cadastre uma nova criança na creche</p>
      </div>
      
      <ChildrenForm />
    </div>
  )
}