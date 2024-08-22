import Plant from '@/src/modules/plants/domain/Plant.ts'
import { FC } from 'react'
import PlantItem from '@/src/sections/plants/list/PlantItem/PlantItem.tsx'
import styles from '@/src/sections/plants/list/PlantsList/PlantList.module.css'

type Props = {
  plants: Plant[]
  deletePlantById: (plantId: string) => void
}

const PlantsList: FC<Props> = ({ plants, deletePlantById }) => {
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

export default PlantsList
