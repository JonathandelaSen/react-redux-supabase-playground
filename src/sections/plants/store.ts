import Plant from 'src/modules/plants/domain/Plant.ts'
import { useAppSelector } from 'src/sections/shared/hooks/store.ts'

export const usePlantsSelector: () => Plant[] = () =>
  useAppSelector((state) => state.plants)
