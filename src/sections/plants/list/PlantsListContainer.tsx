import { usePlantsSelector } from '@/src/sections/hooks/store.ts'
import useDeletePlant from '@/src/sections/plants/list/useDeletePlant.ts'
import PlantsList from '@/src/sections/plants/list/PlantsList.tsx'

const PlantsListContainer = () => {
  const plants = usePlantsSelector()
  const { deletePlantById } = useDeletePlant()

  return (
    <div style={{ margin: '20px 0px' }}>
      <PlantsList
        plants={plants}
        deletePlantById={(plantId: string) => {
          deletePlantById(plantId)
        }}
      />
    </div>
  )
}

export default PlantsListContainer
