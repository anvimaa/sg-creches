import { GuardiansForm } from "@/components/responsaveis/guardians-form";

export default function NewGuardianPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Novo Responsável</h1>
        <p className="text-muted-foreground">Cadastre um novo responsável no sistema</p>
      </div>
      
      <GuardiansForm />
    </div>
  )
}