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

export type Category = {
  displayName: string
  slug: string
}

export type CategoriesData = {
  categories: Category[]
}

export type CategoryPageProps = {
  params: Promise<{
      categoryName: string
  }>
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

export type NavLinkProps = {
  href: string
  children: ReactNode
}
