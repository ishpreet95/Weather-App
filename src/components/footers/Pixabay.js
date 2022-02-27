import classes from "./Pixabay.module.css";
function Pixabay() {
  return (
    <div className={classes.footer}>
      <img
        className={classes.logo}
        src={process.env.PUBLIC_URL + "/pixabay.png"}
      />
    </div>
  );
}
export default Pixabay;
