import PlantsRepository from '@/src/modules/plants/domain/PlantsRepository.ts'
import Plant from '@/src/modules/plants/domain/Plant.ts'

export default class PlantAdder {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(plant: Plant) {
    await this.plantsRepository.add(plant)
  }
}
