import { getAllModels } from "@/app/lib/models"
import ModelsGrid from "../components/ModelsGrid"

export default async function ModelsPage({children}) {
  const models = await getAllModels()
  return (
    <ModelsGrid title="3D Models" models={models} />
  )
}
