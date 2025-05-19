"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  FileIcon, 
  ImageIcon, 
  FileTextIcon, 
  DownloadIcon, 
  PlusIcon,
  FolderIcon,
  SearchIcon 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DocumentCard } from '@/components/documentos/document-card'

export default function DocumentsPage() {
  const [search, setSearch] = useState('')
  
  const documentCategories = [
    'Todos',
    'Contratos',
    'Autorizações',
    'Médicos',
    'Pedagógicos',
    'Fotos'
  ]
  
  const documents = [
    {
      id: '1',
      title: 'Contrato Matrícula 2023',
      category: 'Contratos',
      date: '15/01/2023',
      type: 'pdf',
      size: '2.3 MB',
      child: 'Miguel Santos'
    },
    {
      id: '2',
      title: 'Autorização Passeio Zoológico',
      category: 'Autorizações',
      date: '20/03/2023',
      type: 'pdf',
      size: '1.1 MB',
      child: 'Sophia Oliveira'
    },
    {
      id: '3',
      title: 'Atestado Médico',
      category: 'Médicos',
      date: '05/04/2023',
      type: 'pdf',
      size: '0.8 MB',
      child: 'Arthur Lima'
    },
    {
      id: '4',
      title: 'Relatório de Desenvolvimento 1º Semestre',
      category: 'Pedagógicos',
      date: '30/06/2023',
      type: 'doc',
      size: '3.2 MB',
      child: 'Manuela Costa'
    },
    {
      id: '5',
      title: 'Festa Junina 2023',
      category: 'Fotos',
      date: '24/06/2023',
      type: 'jpg',
      size: '5.7 MB',
      child: 'Davi Pereira'
    },
    {
      id: '6',
      title: 'Carteira de Vacinação',
      category: 'Médicos',
      date: '10/02/2023',
      type: 'pdf',
      size: '1.5 MB',
      child: 'Alice Rodrigues'
    },
    {
      id: '7',
      title: 'Autorização Uso de Imagem',
      category: 'Autorizações',
      date: '17/01/2023',
      type: 'pdf',
      size: '0.9 MB',
      child: 'Pedro Almeida'
    },
    {
      id: '8',
      title: 'Atividade de Arte',
      category: 'Pedagógicos',
      date: '12/05/2023',
      type: 'jpg',
      size: '2.8 MB',
      child: 'Laura Ferreira'
    }
  ]
  
  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileIcon className="h-10 w-10 text-red-500" />
      case 'doc':
      case 'docx':
        return <FileTextIcon className="h-10 w-10 text-blue-500" />
      case 'jpg':
      case 'png':
        return <ImageIcon className="h-10 w-10 text-purple-500" />
      default:
        return <FileIcon className="h-10 w-10 text-gray-500" />
    }
  }
  
  const filterDocuments = (category: string, searchTerm: string) => {
    return documents.filter(doc => 
      (category === 'Todos' || doc.category === category) &&
      (doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       doc.child.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documentos</h1>
          <p className="text-muted-foreground">Gerenciamento de documentos e arquivos</p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Novo Documento
        </Button>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar documento ou criança..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="Todos">
        <TabsList className="mb-6 flex flex-wrap">
          {documentCategories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category === 'Todos' && <FolderIcon className="mr-2 h-4 w-4" />}
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {documentCategories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterDocuments(category, search).length === 0 ? (
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  Nenhum documento encontrado para esta categoria.
                </div>
              ) : (
                filterDocuments(category, search).map(doc => (
                  <DocumentCard
                    key={doc.id}
                    title={doc.title}
                    category={doc.category}
                    date={doc.date}
                    type={doc.type}
                    size={doc.size}
                    child={doc.child}
                    icon={getDocumentIcon(doc.type)}
                  />
                ))
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}