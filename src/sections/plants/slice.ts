import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Plant from '../../modules/plants/domain/Plant'

const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera',
    description:
      'A popular plant for its beautiful leaves and low maintenance. It is also known as the Swiss Cheese Plant. It is native to the tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.',
    imageUrl: '',
  },
  {
    id: '2',
    name: 'Succulent',
    description:
      'A popular plant for its beautiful leaves and low maintenance. It is also known as the Swiss Cheese Plant. It is native to the tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands. A popular plant for its beautiful leaves and low maintenance. It is also known as the Swiss Cheese Plant. It is native to the tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.',
    imageUrl: '',
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    description:
      'A popular plant for its beautiful leaves and low maintenance. It is also known as the Swiss Cheese Plant. It is native to the tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.',
    imageUrl: '',
  },
  {
    id: '4',
    name: 'Rubber Plant',
    description:
      'A popular plant for its beautiful leaves and low maintenance. It is also known as the Swiss Cheese Plant. It is native to the tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.',
    imageUrl: '',
  },
  {
    id: '5',
    name: 'Peace Lily',
    description:
      'A popular plant for its beautiful leaves and low maintenance. It is also known as the Swiss Cheese Plant. It is native to the tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.',
    imageUrl: '',
  },
  {
    id: '6',
    name: 'Lucky Bamboo',
    description:
      'A popular plant for its beautiful leaves and low maintenance. It is also known as the Swiss Cheese Plant. It is native to the tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.',
    imageUrl: '',
  },
  {
    id: '7',
    name: 'Dragon Tree',
    description:
      'A popular plant for its beautiful leaves and low maintenance. It is also known as the Swiss Cheese Plant. It is native to the tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.',
    imageUrl: '',
  },
]

export const plantsSlice = createSlice({
  name: 'plants',
  initialState: plants,
  reducers: {
    deletePlantById: (state, action: PayloadAction<string>) => {
      return state.filter((plant) => plant.id !== action.payload)
    },
    addPlant: (state, action: PayloadAction<Plant>) => {
      state.push(action.payload)
    },
  },
})

export default plantsSlice.reducer
export const { deletePlantById, addPlant } = plantsSlice.actions
