import classes from "./EditButton.module.css";

const EditButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default EditButton;
