import Plant from '@/src/modules/plants/domain/Plant.ts'
import PlantsRepository from '@/src/modules/plants/domain/PlantsRepository.ts'

export default class PlantsGetter {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(): Promise<Plant[]> {
    return this.plantsRepository.getPlants()
  }
}
