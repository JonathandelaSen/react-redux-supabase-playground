import { createClient } from '@supabase/supabase-js'
import { type Database } from './types/database.types'

//TODO: Set env vars
const supabase = createClient<Database>(
  process.env.REACT_SUPABASE_PROJECT_URL!,
  process.env.REACT_SUPABASE_ANON_KEY!,
)

export default supabase
