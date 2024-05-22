import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {DataProvider} from './Components/DataProvider/DataProvider.jsx'
import {initialstate, reducer} from './Utility/reducer.js'




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialstate={initialstate}>
      <App />
    </DataProvider>
  </React.StrictMode>
);


