import { StaffForm } from "@/components/funcionarios/staff-form";

export default function NewStaffPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Novo Funcionário</h1>
        <p className="text-muted-foreground">Cadastre um novo funcionário no sistema</p>
      </div>
      
      <StaffForm />
    </div>
  )
}