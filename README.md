# **App Journal - React & Firebase**

## **1. Clonar el repositorio**

Para comenzar, clona el repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Una vez clonado, accede al directorio del proyecto:

```bash
cd app-journal
```

## **2. Instalar dependencias**

El proyecto utiliza gestores de paquetes como **Bun**, **npm** o **yarn**. Elige el que prefieras para instalar las dependencias necesarias:

### Con Bun

```bash
bun install
```

### Con npm

```bash
npm install
```

### Con Yarn

```bash
yarn install
```

Asegúrate de tener instalado el gestor de paquetes que elijas antes de proceder.

## **3. Configuración del entorno**

Antes de ejecutar el proyecto, es necesario configurar las variables de entorno para conectarte a Firebase. Sigue estos pasos:

1. Crea un archivo `.env` en la raíz del proyecto.
2. Agrega las siguientes variables de entorno, reemplazando los valores con las credenciales de tu proyecto en Firebase:

```env
VITE_FIREBASE_API_KEY=tu_api_key
```

## **4. Ejecutar el proyecto**

Una vez configuradas las dependencias y las variables de entorno, puedes iniciar el servidor de desarrollo local:

### Con Bun

```bash
bun run dev
```

La aplicación estará disponible en tu navegador en la siguiente dirección:  
[http://localhost:5173/](http://localhost:5173/) (o el puerto indicado en la terminal).

---

## **5. Formateo de código con Biome**

Este proyecto utiliza **Biome** para mantener un estilo de código consistente. Para formatear el código, ejecuta:

```bash
bun run biome
```
