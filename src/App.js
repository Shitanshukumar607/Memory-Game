import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Images from "./images.js";

import { useState, useEffect } from "react";

export default function App() {
  const [gameInfo, setgameInfo] = useState({
    moves: 10,
    time: 39,
  });

  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    setImagesArray(shuffleArray(Images));
  }, []);

  const [currentImage, setCurrentImage] = useState([]);

  function handleClick(event) {
    console.log(event.target);

    const id = event.target.id;
    console.log(id);
    const imagePng = imagesArray[id];
    const imagePath = "images/" + imagePng;
    const questionMarkPath = "images/question-mark.png";

    event.target.classList.add("animation");

    setTimeout(() => {
      event.target.src = imagePath;
      event.target.classList.remove("question");
    }, 200);

    setCurrentImage((prevState) => {
      let returnArray = [];

      returnArray = [...prevState, event.target.id];

      console.log(returnArray.length);

      console.log(imagesArray[returnArray[0]]);
      console.log(imagesArray[returnArray[1]]);

      returnArray.length == 2 &&
        (imagesArray[returnArray[0]] == imagesArray[returnArray[1]]
          ? handleMatch(returnArray)
          : handleNotAMatch(returnArray));

      return returnArray;
    });
  }

  function handleMatch(arrayPara) {
    console.log("match");
    arrayPara = [];
  }

  function handleNotAMatch(arrayPara) {
    // imagesArray[arrayPara[0]].classList.remove("animation");

    console.log("not a match");
    arrayPara = [];
  }

  return (
    <>
      <Header info={gameInfo} />
      <Main imagesArray={imagesArray} handleClick={handleClick} />
    </>
  );
}

function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
