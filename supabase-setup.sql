-- 🚀 Script de configuración para Supabase
-- Ejecuta este script en el SQL Editor de tu proyecto Supabase

-- 1. Crear la tabla leads
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  lastname TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  participant_type TEXT NOT NULL,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  interests TEXT[] NOT NULL,
  terms_accepted BOOLEAN NOT NULL DEFAULT FALSE
);

-- 2. Crear índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_participant_type ON leads(participant_type);

-- 3. Habilitar Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- 4. Crear política para permitir inserción anónima
CREATE POLICY "Allow anonymous insert" ON leads
FOR INSERT WITH CHECK (true);

-- 5. Crear política para permitir lectura autenticada (opcional)
CREATE POLICY "Allow authenticated read" ON leads
FOR SELECT USING (auth.role() = 'authenticated');

-- 6. Crear política para permitir actualización autenticada (opcional)
CREATE POLICY "Allow authenticated update" ON leads
FOR UPDATE USING (auth.role() = 'authenticated');

-- 7. Crear política para permitir eliminación autenticada (opcional)
CREATE POLICY "Allow authenticated delete" ON leads
FOR DELETE USING (auth.role() = 'authenticated');

-- 8. Insertar datos de prueba (opcional)
INSERT INTO leads (
  name, 
  lastname, 
  full_name, 
  email, 
  phone, 
  participant_type, 
  company, 
  position, 
  interests, 
  terms_accepted
) VALUES (
  'Usuario',
  'Prueba',
  'Usuario Prueba',
  'test@example.com',
  '+51999999999',
  'profesional',
  'Empresa Test',
  'Desarrollador',
  ARRAY['Inteligencia Artificial', 'Blockchain'],
  true
);

-- 9. Verificar la configuración
SELECT 
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'leads'
ORDER BY ordinal_position;

-- 10. Verificar las políticas RLS
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'leads';
