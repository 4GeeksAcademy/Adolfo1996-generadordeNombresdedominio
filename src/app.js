/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronombre = ["El", "Ella"];
  let adjetivo = ["Grande", "Gordo"];
  let sustantivo = ["Cazador", "Oso"];
  for (let prono = 0; prono < pronombre.length; prono++) {
    for (let adje = 0; adje < adjetivo.length; adje++) {
      for (let sust = 0; sust < sustantivo.length; sust++) {
        console.log(
          pronombre[adje] + adjetivo[sust] + sustantivo[prono] + ".com"
        );
      }
    }
  } //write your code here
};
