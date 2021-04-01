# Nutrialus programming test
## nutrialus-test

![nutrialus-test preview](https://i.imgur.com/L6kGf3q.png)

### Introduction
This project was developed with the [Expo](https://docs.expo.io/) framework using React Native, specifically for [nutrialus](https://nutrial.us) internship [programming test](https://gist.github.com/fcabanasm/10e9bb37f24ee0fa85bb6380387899e9).

### The test (Spanish)

El objetivo del test de programación es conectarse con un servicio REST para obtener un paciente, se requiere mostrar su información.

1. Para obtener los datos de un paciente debes conectarte con el servicio https://0q27loouph.execute-api.us-east-1.amazonaws.com/ (cada vez que llames al servicio este responderá algo distinto).

2. Los datos que retorna tienen la siguiente estructura:

<pre><code>
{
    "name":  String,
    "email": String,
    "phone": String,
    "image": String
}
</code></pre>

3. Debes desarrollar una APP sencilla en React que sea capáz de mostrar la información proveniente del servicio entregado anteriormente.

4. El proyecto lo debes publicar en tu cuenta de Github, Gitlab, etc. y enviarnos el link al mail: hola@nutrial.us con el asunto “Test programación + <tu_nombre>”. Importante mencionar como ejecutar el proyecto.

5. Bonus
   1. Crear un botón que cada vez que se presione actualice los datos.
   2. Mostrar buen manejo de estilos usando Flexbox (que se vea bonito).
   3. Desarrollar la APP en React Native usando Expo.

### Development
It was required that the app displayed some data fields obtained through a REST service, like name, email and phone number, but I also found that it had a nutritionist field, so I added it. Each time it was called, it answered different data.
This project was developed in 3 days, most of the time it was learning and debugging React, React Native and Expo. It was developed with web and mobile in mind. At first I used a left and right panel, the left one showed the picture, and the right, the button and data fields, but on mobile, it was too small and didn't work the way I intended, so I only used basic flex and only in columns.

### Requirements
- [Node.js](https://nodejs.org/)
- [Expo](https://docs.expo.io/get-started/installation/)

### Setup project
1. Clone the project
2. Install project: ```npm install```
3. Start project: ```expo start```
4. (Optional) Build project:
    1. Web: ```expo build:web```
    2. Android: ```expo build:android```
    3. iOS (not tested): ```expo build:ios```
