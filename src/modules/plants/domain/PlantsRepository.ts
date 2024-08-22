import Plant from '@/src/modules/plants/domain/Plant.ts'

export default interface PlantsRepository {
  getPlants(): Promise<Plant[]>
  add(plant: Plant): Promise<void>
  delete(plantId: string): Promise<void>
}
