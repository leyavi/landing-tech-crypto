# 🚀 Configuración de Supabase para el Landing Page

## 📋 Requisitos Previos

1. **Cuenta de Supabase**: [https://supabase.com](https://supabase.com)
2. **Proyecto creado** en Supabase
3. **Base de datos configurada** con la tabla `leads`

## 🗄️ Estructura de la Base de Datos

### Tabla: `leads`

```sql
CREATE TABLE leads (
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

-- Índices recomendados
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_participant_type ON leads(participant_type);
```

## ⚙️ Configuración del Proyecto

### 1. Obtener Credenciales de Supabase

1. Ve a tu proyecto en [Supabase Dashboard](https://app.supabase.com)
2. Navega a **Settings** → **API**
3. Copia:
   - **Project URL**
   - **anon public** key

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Configuración Automática

El archivo `src/lib/supabase.js` ya está configurado para usar variables de entorno automáticamente. Solo necesitas:

1. **Crear archivo `.env.local`** en la raíz del proyecto
2. **Agregar tus credenciales** de Supabase
3. **Reiniciar el servidor** de desarrollo

El archivo se verá así:

```javascript
// src/lib/supabase.js
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
```

## 🔐 Configuración de Seguridad

### 1. Row Level Security (RLS)

Habilita RLS en la tabla `leads`:

```sql
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
```

### 2. Política de Inserción

Permite que usuarios anónimos inserten leads:

```sql
CREATE POLICY "Allow anonymous insert" ON leads
FOR INSERT WITH CHECK (true);
```

### 3. Política de Lectura (Opcional)

Si quieres que solo usuarios autenticados lean los leads:

```sql
CREATE POLICY "Allow authenticated read" ON leads
FOR SELECT USING (auth.role() = 'authenticated');
```

## 🧪 Pruebas

### 1. Verificar Variables de Entorno

```javascript
import { getEnvStatus } from './src/utils/testSupabase'

// Check environment variables
const envStatus = getEnvStatus()
console.log('Environment Status:', envStatus)
```

### 2. Probar Conexión Completa

```javascript
import { testSupabaseConnection } from './src/utils/testSupabase'

// Test full connection and operations
const result = await testSupabaseConnection()
console.log('Test Result:', result)
```

### 3. Prueba Manual de Conexión

```javascript
import { supabase } from './src/lib/supabase'

// Test connection
const { data, error } = await supabase
  .from('leads')
  .select('count')
  .limit(1)

if (error) {
  console.error('Connection error:', error)
} else {
  console.log('Connection successful!')
}
```

### 2. Insertar Lead de Prueba

```javascript
const testLead = {
  name: "Test",
  lastname: "User",
  full_name: "Test User",
  email: "test@example.com",
  phone: "+1234567890",
  participant_type: "profesional",
  company: "Test Company",
  position: "Developer",
  interests: ["Inteligencia Artificial"],
  terms_accepted: true
}

const result = await leadsService.createLead(testLead)
console.log('Test lead created:', result)
```

## 🚨 Solución de Problemas

### Error: "Missing Supabase environment variables"
- Verifica que el archivo `.env.local` existe
- Asegúrate de que las variables estén correctamente nombradas
- Reinicia el servidor de desarrollo

### Error: "JWT expired"
- Verifica que la API key sea válida
- Regenera la API key si es necesario

### Error: "RLS policy violation"
- Verifica que las políticas de RLS estén configuradas correctamente
- Asegúrate de que la política permita inserción anónima

## 📱 Uso en el Componente

El componente `RegistrationSection` ahora:

1. **Valida** todos los campos requeridos
2. **Envía** los datos a Supabase
3. **Maneja** errores y éxitos
4. **Muestra** notificaciones Toast
5. **Redirige** a la pantalla de confirmación

## 🔄 Flujo de Datos

```
Formulario → Validación → Supabase → Toast → Confirmación
    ↓           ↓           ↓         ↓         ↓
  Datos    Campos OK    DB Insert  Success   Pantalla
```

## 📊 Monitoreo

### 1. Dashboard de Supabase
- Ve a **Table Editor** → **leads**
- Monitorea inserciones en tiempo real

### 2. Logs de la Aplicación
- Revisa la consola del navegador
- Verifica los logs de Supabase

## 🎯 Próximos Pasos

1. **Autenticación**: Implementar login/registro de usuarios
2. **Dashboard**: Crear panel de administración para ver leads
3. **Notificaciones**: Enviar emails de confirmación
4. **Analytics**: Agregar métricas y reportes
5. **Validación**: Implementar validación más robusta en el backend
