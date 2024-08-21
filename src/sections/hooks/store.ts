import Plant from '../../modules/plants/domain/Plant'
import { useAppSelector } from '../shared/hooks/store'

export const usePlantsSelector: () => Plant[] = () =>
  useAppSelector((state) => state.plants)
