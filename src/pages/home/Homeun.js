import { useState, useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Homeun.module.css";
import { FcSearch } from "react-icons/fc";
import Unsplash from "../../components/footers/Unsplash";
import Rain from "../loading/Rain";

function Homeun() {
  const locationRef = useRef();
  let history = useHistory();
  function buttonHandler() {
    history.push(`/search/${locationRef.current.value}`);
    console.log(locationRef.current.value);
  }
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.unsplash.com/photos/random?query=weather&client_id={API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadedData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <Rain />;
  }
  console.log(loadedData);
  return (
    <div
      className={classes.bgImage}
      style={{
        backgroundImage: `url(${loadedData.urls.raw}&w=${window.innerWidth}&dpr=2)`,
      }}
    >
      <div className={classes.centerpanel}>
        <h1 className={classes.h1}>Weather App</h1>
        <div className={classes.barAndButton}>
          <input
            className={classes.inputbox}
            type="text"
            required
            id="location"
            placeholder="Enter city"
            ref={locationRef}
            autoComplete="off"
          />
          <button
            className={classes.searchButton}
            onClick={buttonHandler}
            type="submit"
          >
            <FcSearch style={{ fontSize: "2em" }} />
          </button>
        </div>
      </div>
      <Unsplash />
    </div>
  );
}
export default Homeun;
