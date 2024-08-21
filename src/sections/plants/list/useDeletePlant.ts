import { useAppDispatch } from '@/src/sections/shared/hooks/store.ts'
import { deletePlantById } from '@/src/sections/plants/slice.ts'

const useDeletePlant = () => {
  const dispatch = useAppDispatch()

  return {
    deletePlantById: (plantId: string) => {
      dispatch(deletePlantById(plantId))
    },
  }
}

export default useDeletePlant
