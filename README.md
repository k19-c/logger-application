npm i -D json-server concurrently

in the scripts section, add below scripts

"json-server": "json-server --watch db.json --port 5000",
"dev": "concurrently \"npm start\" \"npm run json-server\"",

to start your application, run the below command

npm run dev

Add this proxy

"proxy": "http://localhost:5000"

npm i materialize-css

Now Import these below files

import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min.js';

Initialize Materialize JS

M.AutoInit();

Search for https://google.github.io/material-design-icons/ and copy the below one from site and paste it in the index.html

<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

in the materialize docs, search for Navbar and take that code

npm i moment react-moment

In Materialize CSS, we can search for Preloader and get the sample code

You can search for Icons and get the below

<i className="large material-icons">add</i>

add,person,person_add are icons of materializeCSS

search for checkbox in materializeCSS

search for button

delete is standard keyword

npm i redux react-redux redux-thunk redux-devtools-extension

1)logReducer is mentioned inside the combineReducers 2) Stored logReducer as log 3) we can access this entire logReducer's initialState using state.log

ex: log:state.log

bring the connect to the component, when you are connecting with the redux


<!-- Upon reloading, deleted stays (I was not able to fix) -->