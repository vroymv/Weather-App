<!-- Banner Image, Landing Page Of Computer Vision Site -->
<div align="center">
  <br />
    <a href="">

  <div>
        <img src="https://img.shields.io/badge/node-js?style=for-the-badge&logo=nodedotjs&logoColor=white&label=Node%20JS" alt="Node JS" />

  </div>

  <h1 align="center">Weather App</h1>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)

## 🚨 About

Enter a City and get it's current weather conditions. (Rain and temperature). Feel free to embed this in your larger projects

## <a name="introduction">🤖 Introduction</a>

This simple project implements node js and open weather map api

## <a name="tech-stack">⚙️ Tech Stack</a>

- Node js
- Open Weather map api.

## <a name="features">🔋 Features</a>

👉 **Home Screen**:

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Screenshot%202024-07-03%20at%2014.02.26.png?alt=media&token=a12ad4ff-a56f-40ff-b54e-55df03a875c5">

👉 **Weather Result**:

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Screenshot%202024-07-03%20at%2014.02.41.png?alt=media&token=88a45ee1-2672-4901-a06d-9ddf95596cdf" alt="Weather Results">

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/vroymv/Weather-App.git
cd Weather-App
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
nodemon app.js
```

**Setup Open Weather Map API**

Create An Account on Open Weather Map <br>
I useed this api, feel free to use any other
https://openweathermap.org/<br>

## <a name="snippets">🕸️ Snippets</a>

**Modify the following In your Code**

<details>
<summary><code>app.js</code></summary>

In the code below, replace ${process.env.apiid} with your actual api key.

```javascript
https
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=${process.env.apiid}&lang=en`,
      function (response) {
        console.log("Status Code: " + response.statusCode);

```

</details>
