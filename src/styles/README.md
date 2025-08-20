# 📁 Estructura de Estilos CSS

## 🎯 **ORGANIZACIÓN DE ARCHIVOS**

### **📋 Archivos Principales:**

#### **1. `global.css`**
- **Responsabilidad**: Estilos base globales y utilidades
- **Contenido**: 
  - Directivas de Tailwind
  - Estilos de tipografía base
  - Utilidades personalizadas (scrollbar, selección, focus)
  - Componentes base (botones, cards, inputs)
- **Importa**: `animations.css`

#### **2. `animations.css`**
- **Responsabilidad**: Archivo índice de todas las animaciones
- **Contenido**: Imports de todos los archivos de animación
- **Archivos importados**: `keyframes.css`, `selection-lines.css`, `transitions.css`

### **🎬 Archivos de Animación:**

#### **3. `keyframes.css`**
- **Responsabilidad**: Todas las animaciones con `@keyframes`
- **Contenido**:
  - `lineEnter` - Entrada para líneas naranjas
  - `linePulse` - Pulso para líneas naranjas
  - `borderPulse` - Borde pulsante para botón de registro
  - `spin` - Rotación para spinner
  - `fadeIn` - Fade in para elementos
  - `slideInFromTop` - Slide desde arriba
  - `scaleIn` - Scale in para cards
  - `softBounce` - Bounce suave
  - `glowPulse` - Glow pulsante

#### **4. `selection-lines.css`**
- **Responsabilidad**: Todas las variantes de líneas naranjas
- **Contenido**:
  - `.selection-line` - Base
  - `.selection-line-button` - Para botones
  - `.selection-line-nav` - Para navegación
  - `.selection-line-icon` - Para iconos
  - `.selection-line-card` - Para cards
  - `.selection-line-padded` - Con padding
  - `.selection-line-enter` - Animación de entrada
  - `.selection-line-pulse` - Efecto de pulso

#### **5. `transitions.css`**
- **Responsabilidad**: Transiciones personalizadas reutilizables
- **Contenido**:
  - `.card-transition` - Para cards
  - `.button-transition` - Para botones
  - `.icon-transition` - Para iconos
  - `.link-transition` - Para enlaces
  - `.image-transition` - Para imágenes
  - `.carousel-transition` - Para carruseles
  - `.shadow-transition` - Para sombras
  - `.border-transition` - Para bordes
  - `.background-transition` - Para fondos
  - `.text-transition` - Para texto

### **🔧 Archivos de Componentes:**

#### **6. `Header.css`**
- **Responsabilidad**: Estilos específicos del header
- **Contenido**: Clase `.registration-button-pulse`

#### **7. `ProfilesSection.css`**
- **Responsabilidad**: Estilos específicos de la sección de perfiles
- **Contenido**: Estilos de cards, iconos, tipografía y responsive

#### **8. `BinaryBackground.css`**
- **Responsabilidad**: Estilos del video de fondo
- **Contenido**: Contenedor de video, opacidades y fallback

## 🚀 **BENEFICIOS DE ESTA ORGANIZACIÓN:**

### **✅ Legibilidad:**
- Cada archivo tiene una responsabilidad específica
- Fácil encontrar y modificar animaciones
- Código más limpio y organizado

### **✅ Mantenibilidad:**
- Modificar animaciones sin tocar estilos base
- Reutilizar transiciones en diferentes componentes
- Debugging más fácil

### **✅ Performance:**
- CSS optimizado y organizado
- Imports modulares
- Tailwind purgado automáticamente

### **✅ Escalabilidad:**
- Fácil agregar nuevas animaciones
- Estructura clara para nuevos desarrolladores
- Separación de responsabilidades

## 📥 **CÓMO USAR:**

### **1. En componentes JSX:**
```jsx
import '../styles/global.css'; // Importa todo automáticamente
```

### **2. Para animaciones específicas:**
```jsx
// Usar clases de Tailwind para animaciones básicas
className="hover:scale-105 transition-all duration-500"

// Usar clases personalizadas para efectos complejos
className="selection-line selection-line-card"
```

### **3. Para transiciones personalizadas:**
```jsx
className="card-transition" // Aplica hover:scale-105 y sombras
className="button-transition" // Aplica hover:scale-105 y sombras
```

## 🔄 **FLUJO DE IMPORTS:**

```
global.css
    ↓
animations.css
    ↓
├── keyframes.css
├── selection-lines.css
└── transitions.css
```

## 📝 **CONVENCIONES:**

1. **Nombres de archivos**: `kebab-case` (ej: `selection-lines.css`)
2. **Clases CSS**: `kebab-case` (ej: `.selection-line-card`)
3. **Comentarios**: Usar separadores con `=` para mejor legibilidad
4. **Organización**: Agrupar estilos relacionados en el mismo archivo
5. **Responsive**: Incluir media queries al final de cada archivo
