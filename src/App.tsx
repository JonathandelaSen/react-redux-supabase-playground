import './App.css'
import AddPlantForm from '@/src/sections/plants/add_form/AddPlantForm.tsx'
import PlantsListContainer from '@/src/sections/plants/list/PlantsListContainer.tsx'

function App() {
  return (
    <>
      <h1>Plants</h1>
      <AddPlantForm />
      <PlantsListContainer />
    </>
  )
}

export default App
