"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// import { Calendar } from '@/components/ui/calendar' // Potentially remove if not needed for guardians
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover' // Potentially remove if not needed for guardians
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { format } from 'date-fns' // Potentially remove if not needed for guardians
// import { ptBR } from 'date-fns/locale' // Potentially remove if not needed for guardians
// import { CalendarIcon } from 'lucide-react' // Potentially remove if not needed for guardians
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { PlusCircle, Trash2 } from 'lucide-react'

// TODO: Define relations, or fetch from an API/constants file
const relations = [
  { id: 'pai', name: 'Pai' },
  { id: 'mae', name: 'Mãe' },
  { id: 'avo', name: 'Avô/Avó' },
  { id: 'tio', name: 'Tio/Tia' },
  { id: 'outro', name: 'Outro' },
]

const authorizedPersonSchema = z.object({
  name: z.string().min(3, { message: 'Nome da pessoa autorizada deve ter pelo menos 3 caracteres' }),
  relation: z.string().min(2, { message: 'Relação da pessoa autorizada deve ter pelo menos 2 caracteres' }),
  phone: z.string().optional(), // Optional phone for authorized person
});

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(9, { message: 'Telefone deve ter pelo menos 10 caracteres' }),
  address: z.string().optional(),
  relation: z.string({ required_error: "Por favor, selecione o parentesco" }),
  // TODO: Add childrenIds field if a guardian can be linked to children upon creation
  // childrenIds: z.array(z.string()).optional(),
  authorizedPeople: z.array(authorizedPersonSchema).optional(),
  notes: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface GuardiansFormProps {
  initialValues?: Partial<FormValues>
  isEditing?: boolean
}

export function GuardiansForm({ initialValues, isEditing = false }: GuardiansFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialValues?.name || '',
      email: initialValues?.email || '',
      phone: initialValues?.phone || '',
      address: initialValues?.address || '',
      relation: initialValues?.relation || '',
      authorizedPeople: initialValues?.authorizedPeople || [{ name: '', relation: '', phone: '' }],
      notes: initialValues?.notes || '',
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control, // No longer need to cast to any
    name: "authorizedPeople",
  });
  
  function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      toast({
        title: isEditing ? "Responsável atualizado" : "Responsável cadastrado",
        description: `${data.name} foi ${isEditing ? 'atualizado(a)' : 'cadastrado(a)'} com sucesso.`
      })
      setIsSubmitting(false)
      router.push('/responsaveis') // Navigate to guardians list page
    }, 1000)
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Nome completo do responsável" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} placeholder="email@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="(XX) XXXXX-XXXX" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Rua, Número, Bairro, Cidade - Estado" className="resize-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="relation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parentesco com a Criança</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o parentesco" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {relations.map((relation) => (
                          <SelectItem key={relation.id} value={relation.id}>
                            {relation.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pessoas Autorizadas para Retirada</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {fields.map((item, index) => (
                  <div key={item.id} className="p-4 border rounded-md space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Pessoa Autorizada {index + 1}</h4>
                      {fields.length > 1 && (
                        <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)} className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <FormField
                      control={form.control}
                      name={`authorizedPeople.${index}.name` as const}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Nome da pessoa autorizada" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`authorizedPeople.${index}.relation` as const}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parentesco/Relação</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Ex: Avó, Tio, Amigo(a) da família" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name={`authorizedPeople.${index}.phone` as const}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone (Opcional)</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="(XX) XXXXX-XXXX" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => append({ name: '', relation: '', phone: '' } as const)}
                  className="w-full"
                >
                  <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Pessoa Autorizada
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Observações Adicionais</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Observações</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Informações adicionais relevantes sobre o responsável ou a dinâmica familiar"
                          className="resize-none h-24"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="flex justify-end gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => router.push('/responsaveis')} // Navigate to guardians list page
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : (isEditing ? 'Atualizar Responsável' : 'Cadastrar Responsável')}
          </Button>
        </div>
      </form>
    </Form>
  )
}