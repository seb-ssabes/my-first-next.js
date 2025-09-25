import { getModels } from "@/app/lib/models"
import ModelsGrid from "../components/ModelsGrid"
import type { ModelsPageProps } from "../types"


export default async function ModelsPage({searchParams}: ModelsPageProps) {
  const { search } = await searchParams
  const models = await getModels()
  const filteredModels =
    search
    ? models.filter(model => model.name.toLowerCase().includes(search.toLowerCase()))
      && models.filter(model => model.description.toLowerCase().includes(search.toLowerCase()))
    : models

  return (
    <>
      <form action="" className="mb-8">
        <div className="flex items-center w-full max-w-md mx-auto">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="🔍  Search models..."
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-orange-300 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            defaultValue={search}
          />
          <button
            type="submit"
            className="ml-3 rounded-2xl bg-orange-400 px-4 py-2 font-medium text-white shadow-md hover:bg-orange-500 transition"
          >
            Search
          </button>
        </div>
      </form>
      <ModelsGrid title="3D Models" models={filteredModels} />
    </>
  )
}
