🚀 ProyectoSG - Sistema de Gestión de Seguros


📝 Descripción
Sistema web completo para la gestión de seguros, seguridad y salud en el trabajo (SST) y consultoría jurídica. Desarrollado con Angular en el frontend y Node.js/Express en el backend, utilizando MongoDB como base de datos.

🏗️ Arquitectura del Proyecto
ProyectoSG/
├── 📁 backend/           # API REST con Node.js/Express
├── 📁 frontend/client/   # Aplicación Angular
├── 📁 postman/          # Colección de pruebas API
├── 📄 package.json      # Scripts para ejecutar ambos servicios
└── 📄 readme.md         # Este archivo

🛠️ Tecnologías Utilizadas
Frontend (Angular)
- Angular 20.1.0 - Framework principal
- Bootstrap - Estilos y componentes UI
- SCSS - Preprocesador CSS
- RxJS - Programación reactiva
Backend (Node.js)

- Express.js - Framework web
- MongoDB + Mongoose - Base de datos NoSQL
- JWT - Autenticación y autorización
- Joi - Validación de datos
- bcrypt - Encriptación de contraseñas
  
**🚀 Instalación Rápida**
**1. Clonar el repositorio**
git clone https://github.com/braiper12/proyectosg.git
cd ProyectoSG

**2. Instalar dependencias**

# Dependencias del proyecto principal
npm install

# Dependencias del backend
cd backend && npm install

# Dependencias del frontend
cd ../frontend/client && npm install

**3. Configurar variables de entorno**
# Copiar archivo de ejemplo en backend/
cp backend/.env.example backend/.env
# Editar las variables según tu configuración

**4. Ejecutar el proyecto completo**
# Desde la raíz del proyecto
npm start

**Esto ejecutará simultáneamente:**

* Backend en http://localhost:3000
* Frontend en http://localhost:4200

  
🔧 Funcionalidades Implementadas
🔐 Autenticación
- Registro de usuarios
- Login con JWT
- Protección de rutas
- Roles de usuario (admin/usuario)
🏢 Gestión de Empresas
- Crear nuevas empresas
- Visualizar lista de empresas
- Editar información empresarial
- Sistema de IDs únicos secuenciales
📊 Dashboard Administrativo
- Panel de control principal
- Sidebar navegable y colapsible
- Interfaz responsiva
🗂️ Estructura del Frontend
frontend/client/src/app/
├── 📁 components/        # Componentes reutilizables
│   ├── about/           # Sección "Sobre nosotros"
│   ├── contact/         # Formulario de contacto
│   ├── services/        # Servicios ofrecidos
│   └── protected/       # Componentes del área privada
├── 📁 pages/            # Páginas principales
│   ├── home/           # Landing page
│   ├── auth/           # Login/Registro
│   ├── dashboard/      # Panel administrativo
│   └── empresas/       # Gestión de empresas
├── 📁 services/        # Servicios HTTP
├── 📁 guards/          # Protección de rutas
└── 📁 shared/          # Componentes compartidos
🗄️ Estructura del Backend
backend/src/
├── 📁 config/          # Configuración (DB, etc.)
├── 📁 controllers/     # Lógica de negocio
├── 📁 middlewares/     # Autenticación, validaciones
├── 📁 models/          # Modelos de datos
├── 📁 routes/          # Definición de rutas API
├── 📁 schemas/         # Esquemas de MongoDB
└── 📁 utils/           # Utilidades (JWT, etc.)
🌐 Endpoints API Principales
POST /users/register     # Registro de usuarios
POST /users/login        # Autenticación
GET  /empresa           # Listar empresas
POST /empresa           # Crear empresa
GET  /empresa/byid      # Obtener empresa por ID
PUT  /empresa/update    # Actualizar empresa
🎨 Características de UI/UX
☼ **Diseño Responsivo** - Funciona en móviles, tablets y escritorio
☼ **Tema Corporativo** - Colores azules profesionales
☼ **Navegación Intuitiva** - Sidebar colapsible y navegación suave
☼ **Formularios Validados** - Validación en tiempo real
☼ **Estados de Carga** - Feedback visual para el usuario
📱 Rutas Principales
/                    # Landing page con servicios
/auth               # Login/Registro
/dashboard          # Panel administrativo (protegido)
/empresas           # Gestión de empresas (protegido)

🔒 Seguridad
**JWT Tokens** - Autenticación stateless
**Middleware de Autorización** - Verificación de roles
**Validación de Datos** - Sanitización con Joi
**Encriptación** - Contraseñas hasheadas con bcrypt
🚀 Scripts Disponibles

# Ejecutar todo el proyecto
npm start

# Solo backend
npm run dev --prefix backend

# Solo frontend
npm start --prefix frontend/client

# Construcción para producción
npm run build --prefix frontend/client


🤝 Contribución
Este proyecto está en desarrollo activo. Para contribuir:


👤 Autor
Braian Alejandro Perez Castillo

GitHub: @braiper12

