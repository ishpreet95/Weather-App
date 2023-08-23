import { useState, useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Homepix.module.css";
import { FcSearch } from "react-icons/fc";
import Pixabay from "../../components/footers/Pixabay";
import ServerDate from "../../components/date/ServerDate";
import Rain from "../loading/Rain";
import { motion } from "framer-motion";

const pageVariation = {
  initial: {
    opacity: 0,
    y: "100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  duration: 4,
  type: "tween",
  ease: "easeOut",
};
function Homepix() {
  // const ServerDateMotion = motion(ServerDate);
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
    console.log(process.env.REACT_APP_pix_key);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_pix_key}&q=nature&per_page=200&category=nature&editors_choice="true"`
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoadedData(data.hits[Math.round(Math.random() * 100 - 1)]);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <Rain />;
  }
  console.log(loadedData);
  document.body.style.backgroundImage = `url(${loadedData.fullHDURL})`;
  return (
    <div className={classes.outerbox}>
      <ServerDate />
      <motion.div
        initial="initial"
        animate="in"
        variants={pageVariation}
        transition={pageTransition}
        className={classes.centerpanel}
      >
        <h1 className={classes.h1}>Weather App</h1>
        <motion.div
          exit={{ opacity: 0, x: "100vw" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={classes.barAndButton}
        >
          <input
            className={classes.inputbox}
            type="text"
            required
            id="location"
            placeholder="Enter city"
            ref={locationRef}
            autoComplete="off"
          />
          <button className={classes.searchButton} onClick={buttonHandler}>
            <FcSearch style={{ fontSize: "2em" }} />
          </button>
        </motion.div>
      </motion.div>
      <Pixabay />
    </div>
  );
}
export default Homepix;
