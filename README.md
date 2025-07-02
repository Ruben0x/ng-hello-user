# 🚀 Despliegue continuo de aplicación Angular en Google Cloud Storage con GitHub Actions

Este repositorio contiene una aplicación Angular configurada para ser desplegada automáticamente en un bucket de Google Cloud Storage cada vez que se realiza un push a la rama `main`.

## 🛠️ Tecnologías utilizadas

- Angular
- GitHub Actions
- Google Cloud Storage (GCS)
- gsutil CLI

---

## 🧾 Funcionalidad de la aplicación

La aplicación Angular incluye un formulario sencillo donde el usuario puede ingresar su nombre. Al hacer clic en el botón **"Enter"**, se realiza una consulta a una API para obtener un mensaje de saludo personalizado.

### 🔁 Flujo:

1. El usuario ingresa su nombre.
2. Se llama al endpoint de la API (`/saludo?name=...`).
3. La API responde con un saludo como: `"Hola Ruben"`.
4. El mensaje se muestra automáticamente en pantalla.

Este comportamiento se implementa mediante un `Service` de Angular (`HelloService`) que realiza la solicitud HTTP, y un método `onInputName` que actualiza el mensaje mostrado en el componente.

