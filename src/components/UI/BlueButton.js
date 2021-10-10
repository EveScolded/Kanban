import classes from "./BlueButton.module.css";

const BlueButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default BlueButton;
