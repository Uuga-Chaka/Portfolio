import { loadApp } from "./Utils/waitForElement.js";

const App = document.getElementById("app")!;

loadApp("#app").then((e) => {
  if (e) e.innerHTML = "Hola";
});
