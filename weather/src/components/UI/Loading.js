import React from "react";
import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={classes.loader}>
      <div class={classes.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
