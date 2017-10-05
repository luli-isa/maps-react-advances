import _ from "underscore";
import numeral from "numeral";

const letters = "0123456789ABCDEF";

export const randomColor = () => {  
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
