# api-weather - Aplicación del Clima

`api-weather` es una aplicación web de clima que proporciona información meteorológica actual y precisa. La aplicación utiliza la geolocalización del dispositivo para detectar automáticamente la ubicación del usuario y, posteriormente, se conecta a la API de OpenWeather para obtener y mostrar datos del clima en tiempo real.

Desarrollado con HTML, CSS y JavaScript puro, este proyecto es una demostración de cómo consumir APIs externas para crear una experiencia de usuario interactiva y útil. La interfaz está diseñada para ser clara y concisa, mostrando datos esenciales como la temperatura, la humedad y el estado del cielo.

## Características Principales

  * **Geolocalización Automática:** Detecta la ubicación del usuario al cargar la página para mostrar datos locales.
  * **Datos en Tiempo Real:** Muestra la temperatura, descripción del clima, humedad, nubosidad, velocidad y dirección del viento, presión atmosférica y visibilidad.
  * **Consumo de API:** Se conecta a la API de OpenWeather para obtener todos los datos meteorológicos.
  * **Interfaz de Usuario Intuitiva:** Presenta la información de forma clara y organizada.
  * **Manejo de Errores:** Incluye un mensaje de error si no se pueden obtener los datos, por ejemplo, debido a problemas de conexión.
  * **Estilos Dinámicos:** El fondo de la aplicación cambia según las condiciones del clima (por ejemplo, soleado, nublado, etc.).

## Tecnologías Utilizadas

  * **HTML5:** Estructura semántica de la página.
  * **CSS3:** Utilizado para el diseño, los estilos y las animaciones.
  * **JavaScript (ES6+):** Lógica de la aplicación, manejo de la geolocalización, peticiones a la API (`fetch`) y manipulación del DOM.
  * **API de OpenWeather:** Fuente de los datos meteorológicos.

## Instalación y Uso

Para ejecutar "api-weather" localmente en tu máquina, sigue estos pasos.

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/rivero9/api-weather.git
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd api-weather
    ```

3.  **Abre el archivo `index.html`:**
    Simplemente abre el archivo `index.html` en tu navegador web. El navegador te pedirá permiso para acceder a tu ubicación, lo cual debes aceptar para que la aplicación funcione correctamente.

## Estructura del Proyecto

```
api-weather/
├── index.html            // Archivo principal HTML
├── main.js               // Lógica de la aplicación en JavaScript
├── styles/
│   ├── style.css         // Hoja de estilos principal del proyecto
│   └── normalize.css     // Hoja de estilos para normalización
```

## Créditos

  * **Desarrollador:** José Isaac Rivero
  * **Datos del clima:** [OpenWeather](https://openweathermap.org/)

## Contacto

Si tienes alguna pregunta, sugerencia o quieres conectar, no dudes en contactarme:

  * **Email:** riveroviloria2@gmail.com
  * **GitHub:** https://github.com/rivero9

```
```
