// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";

function getImage(name) {
  var requireImage = function (name) {
    return require(`./${name}`).default;
  };
  return Curry._1(requireImage, name);
}

export { getImage };
/* No side effect */
