/* eslint-disable no-unused-vars */
import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "./component/app-bar";
import "./component/footer-bar";
// import './component/hero-element';
import App from "./views/app";
// import main from './views/pages/main';
import swRegister from "./utils/sw-register";

// document.addEventListener('DOMContentLoaded', main);

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#posts"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
  //   swRegister();
});
