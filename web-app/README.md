# Projet Scout47

<h2>Table Of Contents</h2>
<ol>
  <li><a href="#about"></a>About</li>
  <li><a href="#setup"></a>Setup</li>
  <ul>
    <li><a href="#webApp"></a>Web-App</li>
    <li><a href="#mobileApp"></a>Mobile-App</li>
    <li><a href="webServer"></a>Web-Server</li>
  </ul>
</ol>

<p id="about">It's a 3 man first "real" client project for Scout47.</p>
<p>This project is made using :<p>
<ul>
  <li>React JS</li>
  <li>Javascript</li>
  <li>React Native</li>
  <li>Express JS</li>
  <li>MYSQL/Sequelize</li>
</ul>
<h2 id="setup">Setup</h2>

`git clone <url>`<br>
`cd <directory>`<br>

<p>After the setup you will see 3 folders named Web-Server, Web-App and Mobile-App.</p>
<p>Each of the folders needs a setup on it's own which will be explained in the sections below.</p>

<h2 id="webApp">Setup Web-Application</h2>
<h3>Installation:</h3>

`cd web-app`<br>
`npm install`<br>

<h3>Main Dependencies used:</h3>
<ul>
    <li>Material UI</li>
    <li>Axios</li>
    <li>React Router Dom</li>
</ul>

```
// src/pages/players/Index.js

await axios
      .get("http://localhost:5000/api/players")

The URL

```

- Web-mobile :
  - Need to install Expo CLI to run the project
  - npm start (starting the project)
- Web-server :
  - Create a .env file with your database informations (name, localhost, DataBase Name,...)
  - npm install (installing all packages in package JSON)
  - npm/nodemon start (starting the project, nodemon only if you added "start": "nodemon <file name>" in package JSON)
- Web-app :
  - npm install (installing all packages in package JSON)
  - npm start (starting the project)

The project is still in development.

Team Scout47.
