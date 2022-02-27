import classes from "./Minicard.module.css";
function Minicard(props) {
  let dayconverter = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    0: "Sun",
  };
  let monthconverter = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };
  // console.log(props.data);
  let date = new Date(props.data.dt * 1000);
  let thedate = date.getDate();
  let day = dayconverter[date.getDay()];
  let month = monthconverter[date.getMonth()];
  return (
    <div className={classes.minicard}>
      <div
        style={{
          fontFamily: "Rubik",
          fontSize: "1.5em",
          margin: "4px 2px 0px",
        }}
      >
        {thedate} {day}
      </div>
      <img
        className={classes.icon}
        src={
          process.env.PUBLIC_URL + `/icons/${props.data.weather[0].icon}.svg`
        }
      />
      <div
        style={{
          fontSize: "1.8em",
          margin: "0px 2px 4px",
          fontFamily: "Rubik",
        }}
      >
        {Math.round(props.data.temp.max)}
        <span
          style={{
            position: "relative",
            bottom: "10px",
            left: "1px",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          &deg;
        </span>
        {""}/{Math.round(props.data.temp.min)}
        <span
          style={{
            position: "relative",
            bottom: "10px",
            left: "1px",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          &deg;
        </span>
      </div>
      <div style={{ fontFamily: "Montserrat-Light", fontSize: "1.2em" }}>
        {props.data.weather[0].main}
      </div>
      <div
        className={classes.arrangehorizontally}
        style={{ fontFamily: "Montserrat-Light", fontSize: "0.9em" }}
      >
        <img
          className={classes.smallicon}
          src={process.env.PUBLIC_URL + `/icons/raindrop.svg`}
        />
        {props.data.humidity}%
      </div>
    </div>
  );
}
export default Minicard;
