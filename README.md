# **App Journal - React & Firebase**  

## **1. Clonar el repositorio**  

Ejecuta el siguiente comando para clonar el repositorio:  

```bash
git clone <URL_DEL_REPOSITORIO>
```

Luego, accede al directorio del proyecto:  

```bash
cd app-journal
```

## **2. Instalar dependencias**  

Si estás usando **Bun**, ejecuta:  

```bash
bun install
```

Si usas **npm** o **yarn**, puedes instalar las dependencias con:  

```bash
npm install
# o
yarn install
```

## **3. Configuración del entorno**  

Crea un archivo `.env` en la raíz del proyecto y configura tus variables de entorno, por ejemplo:  

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_APP_ID=tu_app_id
```

Asegúrate de reemplazar los valores con los de tu proyecto en Firebase.

## **4. Ejecutar el proyecto**  

Para iniciar el entorno de desarrollo, usa:  

```bash
bun run dev
```

O con npm/yarn:  

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173/` (o el puerto indicado en la terminal).  

## **5. Desplegar la aplicación**  

Si deseas desplegar el proyecto en Firebase Hosting, sigue estos pasos:  

```bash
firebase login
firebase init
firebase deploy
```