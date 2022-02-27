import classes from "./Testing.module.css";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Blurhash } from "react-blurhash";

function Testing() {
  const locationRef = useRef();
  let history = useHistory();
  function buttonHandler() {
    history.push(`/search/${locationRef.current.value}`);
    console.log(locationRef.current.value);
  }
  document.body.style.backgroundImage = `url("https://via.placeholder.com/500")`;
  return (
    <div>
      <h1>Weather App</h1>
      <p>Testing phase</p>
      <input type="text" required id="location" ref={locationRef} />
      <button onClick={buttonHandler}>Search</button>
    </div>
  );
}
export default Testing;
