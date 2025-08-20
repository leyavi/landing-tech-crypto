import { supabase } from '../lib/supabase'

/**
 * Manual Supabase setup utility
 * Run this from browser console: window.setupSupabase()
 */
export async function setupSupabase() {
  try {
    console.log('🚀 Setting up Supabase manually...')
    
    // Test connection first
    const { data: testData, error: testError } = await supabase
      .from('leads')
      .select('count')
      .limit(1)
    
    if (testError) {
      console.error('❌ Connection test failed:', testError.message)
      return { success: false, error: testError.message }
    }
    
    console.log('✅ Connection test successful')
    
    // Show setup instructions
    console.log(`
📋 MANUAL SETUP REQUIRED:

1. Go to Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Go to SQL Editor
4. Run this SQL:

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anonymous insert" ON leads
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON leads
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON leads
FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete" ON leads
FOR DELETE USING (auth.role() = 'authenticated');

5. After running SQL, try the form again
    `)
    
    return { success: true, message: 'Check console for setup instructions' }
    
  } catch (error) {
    console.error('❌ Setup failed:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Test Supabase connection
 */
export async function testSupabaseConnection() {
  try {
    console.log('🔍 Testing Supabase connection...')
    
    const { data, error } = await supabase
      .from('leads')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Connection failed:', error.message)
      return { success: false, error: error.message }
    }
    
    console.log('✅ Connection successful!')
    return { success: true, data }
    
  } catch (error) {
    console.error('❌ Test failed:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Get environment variables status
 */
export function getEnvStatus() {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY
  
  return {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseKey,
    urlPreview: supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'Not set',
    keyPreview: supabaseKey ? `${supabaseKey.substring(0, 30)}...` : 'Not set'
  }
}

// Make functions available globally for console access
if (typeof window !== 'undefined') {
  window.setupSupabase = setupSupabase
  window.testSupabaseConnection = testSupabaseConnection
  window.getEnvStatus = getEnvStatus
  window.testRLSPolicies = async () => {
    const { leadsService } = await import('../services/leadsService')
    return await leadsService.testRLSPolicies()
  }
  
  console.log(`
🚀 Supabase utilities loaded! Available functions:

- window.setupSupabase() - Show setup instructions
- window.testSupabaseConnection() - Test connection
- window.getEnvStatus() - Check environment variables
- window.testRLSPolicies() - Test RLS policies

Run any of these from the console to get started.
  `)
}
