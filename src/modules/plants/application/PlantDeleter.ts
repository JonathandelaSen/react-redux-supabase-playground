import PlantsRepository from '@/src/modules/plants/domain/PlantsRepository.ts'

export default class PlantAdder {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(plantId: string) {
    await this.plantsRepository.delete(plantId)
  }
}
