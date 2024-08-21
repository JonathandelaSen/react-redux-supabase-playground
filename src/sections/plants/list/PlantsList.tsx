import Plant from '@/src/modules/plants/domain/Plant.ts'
import { FC } from 'react'
import PlantItem from '@/src/sections/plants/list/PlantItem.tsx'
import styles from '@/src/sections/plants/list/PlantList.module.css'

type Props = {
  plants: Plant[]
  deletePlantById: (plantId: string) => void
}

const PlantsContainer: FC<Props> = ({ plants, deletePlantById }) => {
  return (
    <div className={styles.plantList}>
      {plants.map((plant) => (
        <PlantItem
          key={plant.id}
          plant={plant}
          deletePlantById={deletePlantById}
        />
      ))}
    </div>
  )
}

export default PlantsContainer
