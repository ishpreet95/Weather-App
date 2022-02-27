import { MeteorRainLoading } from "react-loadingg";
import classes from "./Rain.module.css";
function Loading() {
  return (
    <div className={classes.canvas}>
      <MeteorRainLoading speed={2} size={"large"} />
    </div>
  );
}
export default Loading;
