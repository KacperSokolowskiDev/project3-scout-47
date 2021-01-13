# Projet Scout47

<h2>Table Of Contents</h2>
<ol>
  <li><a href="#about">About</a></li>
  <li><a href="#setup">Setup</a></li>
  <ul>
    <li><a href="#webApp">Web-App</a></li>
    <li><a href="#mobileApp">Mobile-App</a></li>
    <li><a href="#webServer">Web-Server</a></li>
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
<h3>Installation + start :</h3>

`cd web-app`<br>
`npm install`<br>
`npm start`

<h3>Main Dependencies used:</h3>
<ul>
    <li>Material UI</li>
    <li>Axios</li>
    <li>React Router Dom</li>
</ul>

<h3>Warning !</h3>

```
// src/pages/players/Index.js

await axios
      .get("http://localhost:5000/api/players")

-> If localhost isn't working you might need to use the IP address BUT you cannot change the port 5000 because the request won't work !!! (port 5000 is used in our web-server).
```

<h2 id="mobileApp">Setup Mobile-App</h2>
<h3>Installation + start :</h3>

<p>To use the Mobile App part, you need to install Expo CLI. If you did instal the Expo CLI you can proceed to the next step.</p><br>
<p>Step 1 :</p>

`cd ~`<br>
`npm install --global expo-cli`
<br>

<p>Step 2 :</p>

`cd mobile-app`<br>
`npm install`<br>
`npm start`<br>

<h3>Main Dependencies used :</h3>
<ul>
  <li>@react-navigation</li>
  <li>Expo</li>
  <li>formik</li>
  <li>yup</li>
</ul>

<h3>Warning !</h3>

```
// app\screens\ListPlayerScreen.js

await axios
      .get("http://localhost:5000/api/players")

// app\screens\AddPlayerScreen.js

await axios
      .post("http://localhost:5000/api/players")

// app\screens\AddClubScreen.js

await axios
      .post("http://localhost:5000/api/clubs")

-> Same as in Web-App, if the localhost isn't working you need to use your IP address but remember to keep the port 5000 ! The requests won't work without it !
```

<h2 id="webServer">Setup Web-Server</h2>

The project is still in development.

Team Scout47.
