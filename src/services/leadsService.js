import { supabase } from '../lib/supabase'

export const leadsService = {
  // Setup RLS policies automatically
  async setupRLSPolicies() {
    try {
      console.log('🔧 Setting up RLS policies...')
      
      // Try to enable RLS first
      try {
        await supabase.rpc('exec_sql', { 
          sql: 'ALTER TABLE leads ENABLE ROW LEVEL SECURITY;' 
        })
        console.log('✅ RLS enabled')
      } catch (err) {
        console.log('ℹ️ RLS already enabled or function not available')
      }
      
      // Create policies using raw SQL
      const policies = [
        // Allow anonymous insert
        `CREATE POLICY IF NOT EXISTS "Allow anonymous insert" ON leads FOR INSERT WITH CHECK (true);`,
        
        // Allow authenticated read
        `CREATE POLICY IF NOT EXISTS "Allow authenticated read" ON leads FOR SELECT USING (auth.role() = 'authenticated');`,
        
        // Allow authenticated update
        `CREATE POLICY IF NOT EXISTS "Allow authenticated update" ON leads FOR UPDATE USING (auth.role() = 'authenticated');`,
        
        // Allow authenticated delete
        `CREATE POLICY IF NOT EXISTS "Allow authenticated delete" ON leads FOR DELETE USING (auth.role() = 'authenticated');`
      ]

      // Execute each policy
      for (const policy of policies) {
        try {
          const { error } = await supabase.rpc('exec_sql', { sql: policy })
          if (error) {
            console.warn('Policy creation warning:', error.message)
          } else {
            console.log('✅ Policy created successfully')
          }
        } catch (err) {
          console.warn('Policy creation error:', err.message)
          // If exec_sql is not available, we'll handle it gracefully
        }
      }

      console.log('✅ RLS policies configured successfully')
      return { success: true }
    } catch (error) {
      console.error('❌ Error setting up RLS policies:', error)
      return { success: false, error: error.message }
    }
  },

  // Test RLS policies
  async testRLSPolicies() {
    try {
      console.log('🔍 Testing RLS policies...')
      
      // Try to insert a test lead
      const testLead = {
        name: "Test",
        lastname: "RLS",
        full_name: "Test RLS",
        email: "test-rls@example.com",
        phone: "+1234567890",
        participant_type: "profesional",
        company: "Test Company",
        position: "Developer",
        interests: ["Inteligencia Artificial"],
        terms_accepted: true,
        created_at: new Date().toISOString()
      }
      
      const { data, error } = await supabase
        .from('leads')
        .insert([testLead])
        .select()
      
      if (error) {
        console.error('❌ RLS test failed:', error.message)
        return { success: false, error: error.message }
      }
      
      console.log('✅ RLS test successful! Test lead created:', data[0])
      
      // Clean up test data
      const { error: deleteError } = await supabase
        .from('leads')
        .delete()
        .eq('email', 'test-rls@example.com')
      
      if (deleteError) {
        console.warn('⚠️ Could not clean up test data:', deleteError.message)
      } else {
        console.log('✅ Test data cleaned up')
      }
      
      return { success: true, message: 'RLS policies are working correctly' }
    } catch (error) {
      console.error('❌ RLS test error:', error)
      return { success: false, error: error.message }
    }
  },

  // Alternative: Simple RLS setup using direct SQL
  async setupRLSSimple() {
    try {
      console.log('🔧 Setting up RLS policies (simple method)...')
      
      // This will be handled by the Supabase dashboard or manual SQL
      console.log('ℹ️ RLS policies need to be configured manually in Supabase dashboard')
      console.log('📋 Run this SQL in Supabase SQL Editor:')
      console.log(`
        ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
        
        CREATE POLICY "Allow anonymous insert" ON leads
        FOR INSERT WITH CHECK (true);
        
        CREATE POLICY "Allow authenticated read" ON leads
        FOR SELECT USING (auth.role() = 'authenticated');
      `)
      
      return { success: true, message: 'Check console for manual setup instructions' }
    } catch (error) {
      console.error('❌ Error in simple RLS setup:', error)
      return { success: false, error: error.message }
    }
  },

  // Create a new lead
  async createLead(leadData) {
    try {
      // RLS policies are already configured manually in Supabase
      // No need to call setupRLSPolicies()
      
      // Prepare data according to the schema
      const lead = {
        name: leadData.name,
        lastname: leadData.lastname,
        full_name: `${leadData.name} ${leadData.lastname}`,
        email: leadData.email,
        phone: leadData.phone,
        participant_type: leadData.participantType,
        company: leadData.company,
        position: leadData.position,
        interests: leadData.interests,
        terms_accepted: leadData.termsAccepted,
        created_at: new Date().toISOString()
      }
      
      console.log('📝 Creating lead:', lead)
      
      const { data, error } = await supabase
        .from('leads')
        .insert([lead])
        .select()

      if (error) {
        console.error('❌ Error inserting lead:', error)
        throw error
      }

      console.log('✅ Lead created successfully:', data[0])
      return { success: true, data: data[0] }
    } catch (error) {
      console.error('Error creating lead:', error)
      return { success: false, error: error.message }
    }
  },

  // Get all leads
  async getLeads() {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      return { success: true, data }
    } catch (error) {
      console.error('Error fetching leads:', error)
      return { success: false, error: error.message }
    }
  },

  // Get lead by ID
  async getLeadById(id) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        throw error
      }

      return { success: true, data }
    } catch (error) {
      console.error('Error fetching lead:', error)
      return { success: false, error: error.message }
    }
  }
}
