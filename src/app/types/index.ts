import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export type ModelDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

export type ModelCardProps = {
  model: Model
}

export type ModelsGridProps = {
  title: string
  models: Model[]
}

export type PillProps = {
  children: ReactNode
  className?: string
}
