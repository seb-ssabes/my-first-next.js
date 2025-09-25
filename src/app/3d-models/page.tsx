import { getModels } from "@/app/lib/models"
import ModelsGrid from "../components/ModelsGrid"
import type { ModelsPageProps } from "../types"
import Form from "next/form"



export default async function ModelsPage({searchParams}: ModelsPageProps) {
  const search = (await searchParams)?.search?.toLowerCase() || ""
  const models = await getModels()
  const filteredModels =
    search
    ? models.filter(
        (model) =>
          model.name.toLowerCase().includes(search) ||
          model.description.toLowerCase().includes(search))
    : models

  return (
    <>
      <Form action="/3d-models" className="mb-8">
        <div className="flex items-center w-full max-w-md mx-auto">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="E.g Tool"
            autoComplete="off"
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-orange-300 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            defaultValue={search}
          />
          <button
            type="submit"
            className="ml-3 rounded-2xl bg-orange-300 px-4 py-2 font-medium text-white shadow-md hover:bg-orange-400 transition"
          >
            Search
          </button>
        </div>
      </Form>
      <ModelsGrid title="3D Models" models={filteredModels} />
    </>
  )
}
