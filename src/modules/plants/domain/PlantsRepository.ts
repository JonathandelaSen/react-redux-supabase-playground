import Plant from '@/src/modules/plants/domain/Plant.ts'

export default interface PlantsRepository {
  getPlants(): Promise<Plant[]>
}
