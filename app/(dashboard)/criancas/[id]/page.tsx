import { notFound } from 'next/navigation'
import { ChildProfile } from '@/components/criancas/child-profile'
import { mockChildren } from '@/lib/data/mock-data'

export async function generateStaticParams() {
  return mockChildren.map((child) => ({
    id: String(child.id),
  }))
}

export default async function ChildPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const child = mockChildren.find(child => String(child.id) === params.id)

  if (!child) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Perfil da Criança</h1>
        <p className="text-muted-foreground">Visualize e gerencie informações da criança</p>
      </div>
      
      <ChildProfile child={child} />
    </div>
  )
}