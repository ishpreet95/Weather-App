import classes from "./Todaycard.module.css";
function Todaycard(props) {
  let dayconverter = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
  };
  let monthconverter = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  console.log(props.data);
  let date = new Date(props.data.dt * 1000);
  let thedate = date.getDate();
  let day = dayconverter[date.getDay()];
  let month = monthconverter[date.getMonth()];
  return (
    <div className={classes.todaycard}>
      <div style={{ fontFamily: "Pushster", fontSize: "2em" }}>
        {/* {day} | {thedate} {month} */}
        {/* Today */}
      </div>
      <div className={classes.arrangehorizontally}>
        <div className={classes.arrangevertically}>
          <img
            className={classes.icon}
            src={
              process.env.PUBLIC_URL +
              `/icons/${props.data.weather[0].icon}.svg`
            }
          />
          <div className={classes.temp}>
            {Math.round(props.data.temp)}
            <span
              style={{
                position: "relative",
                bottom: "34px",
                left: "2px",
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              &deg;
            </span>
          </div>
        </div>
        <div
          className={classes.arrangevertically}
          style={{
            padding: "3px",
            margin: "5px",
            alignItems: "flex-start",
          }}
        >
          <div className={classes.h3}>{props.data.weather[0].main}</div>
          <div
            className={classes.arrangehorizontally}
            style={{ fontFamily: "Poppins-ExtraLight" }}
          >
            <img
              className={classes.smallicon}
              src={process.env.PUBLIC_URL + `/icons/cloudCover.svg`}
            />
            {props.data.clouds}%
          </div>
          <div
            className={classes.arrangehorizontally}
            style={{ fontFamily: "Poppins-ExtraLight" }}
          >
            <img
              className={classes.smallicon}
              src={process.env.PUBLIC_URL + `/icons/humidity.svg`}
            />
            {props.data.humidity}%
          </div>
          <div
            className={classes.arrangehorizontally}
            style={{ fontFamily: "Poppins-ExtraLight" }}
          >
            <img
              className={classes.smallicon}
              src={process.env.PUBLIC_URL + `/icons/uv-index.svg`}
            />
            {props.data.uvi}
          </div>
          <div
            className={classes.arrangehorizontally}
            style={{ fontFamily: "Poppins-ExtraLight" }}
          >
            <img
              className={classes.smallicon}
              src={process.env.PUBLIC_URL + `/icons/windsock.svg`}
            />
            {props.data.wind_speed} m/s
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todaycard;
