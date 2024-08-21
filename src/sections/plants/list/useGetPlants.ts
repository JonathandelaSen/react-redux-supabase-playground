import { usePlantsSelector } from '@/src/sections/plants/store.ts'
import GetPlantsSupabaseRepository from '@/src/modules/plants/infrastructure/GetPlantsSupabaseRepository.ts'
import { setPlants } from '@/src/sections/plants/slice.ts'
import PlantsGetter from '@/src/modules/plants/application/PlantsGetter.ts'
import { useAppDispatch } from '@/src/sections/shared/hooks/store.ts'
import { useEffect } from 'react'

const useGetPlants = () => {
  const dispatch = useAppDispatch()
  const plants = usePlantsSelector()
  useEffect(() => {
    new PlantsGetter(new GetPlantsSupabaseRepository())
      .run()
      .then((plants) => {
        console.log('useGetPlants', plants)
        dispatch(setPlants(plants))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return {
    plants,
  }
}

export default useGetPlants
