import classes from "./ServerDate.module.css";
function ServerDate() {
  let dayconverter = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesay",
    4: "Thursday",
    5: "Friday",
    6: "Satday",
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
  let date = new Date();
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let today = dayconverter[date.getDay()];
  let month = monthconverter[date.getMonth()];
  let currentdate = date.getDate();
  return (
    <div className={classes.mainbox}>
      <div className={classes.timebox}>
        {hours}:{minutes.substr(-2)}
      </div>
      <div className={classes.datebox}>
        {today} | {currentdate} {month}
      </div>
    </div>
  );
}
export default ServerDate;
