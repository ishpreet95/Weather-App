import { WindMillLoading } from "react-loadingg";
import classes from "./Windmill.module.css";
function Loading() {
  return (
    <div className={classes.canvas}>
      <WindMillLoading speed={3} size={"large"} />
    </div>
  );
}
export default Loading;
