import { motion } from "framer-motion";
import classes from "./Card.module.css";
import Todaycard from "./Todaycard";
import Minicard from "./Minicard";
import HorizontalScroll from "react-scroll-horizontal";
function Card(props) {
  if (props.weather.current && props.weather.current.temp && props.location) {
    let dailyweather = props.weather.daily.slice(0, 7).map((day) => {
      return <Minicard data={day} />;
    });
    console.log(props.weather);
    console.log(props.location);
    console.log(props.weather.current.weather[0].icon);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.maincard}
      >
        <div className={classes.h4}>
          {props.location[0].name} {props.location[0].state}
        </div>
        <div className={classes.arrangehorizontally}>
          <Todaycard
            className={classes.todaycard}
            data={props.weather.current}
          />
          <div
            className={`${classes.dailyweather} ${classes.arrangehorizontally}`}
          >
            <HorizontalScroll>{dailyweather}</HorizontalScroll>
          </div>
        </div>
      </motion.div>
    );
  }
  return <div></div>;
}
export default Card;
