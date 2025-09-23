import Link from "next/link"
import { getAllCategories } from "../lib/categories"
import type { ReactNode } from "react"
import type { Category } from "@/app/types"


export default function ModelsLayout({children}: {children: ReactNode}) {
  const categories: Category[] = getAllCategories()
  console.log(categories)
  return (
    <>
      <h1>ModelsLayout</h1>
      <ul>
        <Link href="/3d-models">All</Link>
        {
          categories.map(category => (
            <Link
              key={category.slug}
              href={`/3d-models/categories/${category.slug}`}
            >
              <li>{category.displayName}</li>
            </Link>
          ))
        }
      </ul>
      {children}
    </>
  )
}
