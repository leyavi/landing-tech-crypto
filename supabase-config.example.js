// Copy this file to src/lib/supabase.js and update with your actual values
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'your_supabase_project_url'
const supabaseAnonKey = 'your_supabase_anon_key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
