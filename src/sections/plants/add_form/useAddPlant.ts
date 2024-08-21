import { useAppDispatch } from '@/src/sections/shared/hooks/store.ts'
import { addPlant } from '@/src/sections/plants/slice.ts'
import Plant from '@/src/modules/plants/domain/Plant.ts'

const useAddPlant = () => {
  const dispatch = useAppDispatch()

  return {
    addPlant: (name: string, description: string, imageUrl?: string) => {
      dispatch(
        addPlant({
          id: crypto.randomUUID(),
          name,
          description,
          imageUrl,
        } as Plant),
      )
    },
  }
}

export default useAddPlant
