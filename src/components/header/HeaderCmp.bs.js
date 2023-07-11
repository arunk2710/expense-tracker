// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as AssetManager from "../../assets/AssetManager.bs.js";

function HeaderCmp(props) {
  var expense_icon = AssetManager.getImage("expense.png");
  return React.createElement("div", {
              className: "box"
            }, React.createElement("img", {
                  alt: "expense logo",
                  height: "25px",
                  src: expense_icon,
                  width: "25px"
                }), React.createElement("h3", {
                  className: "heading"
                }, "Expense Tracker"));
}

var make = HeaderCmp;

export {
  make ,
}
/* react Not a pure module */
