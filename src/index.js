import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <Provider store={store}>
         <BrowserRouter>
         <App /> 
         </BrowserRouter>
      
    </Provider>
);
