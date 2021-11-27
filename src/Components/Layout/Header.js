import React from "react";
import foodImage from "../../assets/food.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Bhoj</h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
