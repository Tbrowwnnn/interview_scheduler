import React from "react";
import "components/Button.scss";
import classNames from "classnames";

//element that represents our save and cancel buttons
function Button(props) {

   const buttonClass = classNames('button', {
      ' button--confirm': props.confirm,
      ' button--danger': props.danger
   });


   return <button className={buttonClass} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
      ;
}
export default Button;

