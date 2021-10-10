import classes from "./GreenButton.module.css";

const GreenButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default GreenButton;
