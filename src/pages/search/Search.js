import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import classes from "./Search.module.css";
import Pixabay from "../../components/footers/Pixabay";
const pageVariation = {
  initial: {
    opacity: 0,
    y: "100vw",
    scale: 1.2,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100vw",
    scale: 0.8,
  },
};

const pageTransition = {
  duration: 2.4,
  type: "tween",
  ease: "easeOut",
};
function Search() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [place, setPlace] = useState({});
  const [currWeather, setCurrWeather] = useState({});
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${params.location}&limit=1&appid=d5715cfbcecbe308d71c483be2f44925`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPlace(data);
          fetch(
            `http://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&appid=d5715cfbcecbe308d71c483be2f44925&units=metric`
          )
            .then((r) => {
              return r.json();
            })
            .then((d) => {
              setCurrWeather(d);
            })
            .catch((e) => {
              console.log(e);
            });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <motion.div className={classes.outerbox}>
        <motion.div
          className={classes.centerpanel}
          initial={{
            opacity: 1,
            // height: "50%",
            // margin: "0 auto",
          }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 1,
            // position: "absolute",
            // top: "50px",
            // left: "0px",
          }}
          // transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className={classes.h1}>Weather App</h1>
        </motion.div>
      </motion.div>
    );
  }
  // console.log(currWeather);
  return (
    <div
      className={classes.outerbox}
      // initial="initial"
      // animate="in"
      // exit="out"
      // variants={pageVariation}
      // transition={pageTransition}
    >
      <div className={classes.centerpanel}>
        <h1 className={classes.h1}>Weather App</h1>
      </div>
      <Card weather={currWeather} location={place} />
      <Pixabay />
    </div>
  );
}
export default Search;
