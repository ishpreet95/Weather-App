import classes from "./Unsplash.module.css";
function Unsplash() {
  return (
    <div clasName={classes.footer}>
      <img
        className={classes.logo}
        src={process.env.PUBLIC_URL + "/unsplash.png"}
      />
    </div>
  );
}
export default Unsplash;
