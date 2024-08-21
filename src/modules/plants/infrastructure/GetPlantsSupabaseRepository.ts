import PlantsRepository from '@/src/modules/plants/domain/PlantsRepository.ts'
import Plant from '@/src/modules/plants/domain/Plant.ts'
import supabase from '@/src/sections/shared/supabase/supabaseClient.ts'

export default class GetPlantsSupabaseRepository implements PlantsRepository {
  FAKE_PLANTS = [
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
  async getPlants(): Promise<Plant[]> {
    const plants = await supabase.from('plants').select('*')

    console.log('repository plants', plants)
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.FAKE_PLANTS), 2000)
    })
  }
}
