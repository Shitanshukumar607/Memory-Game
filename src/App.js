import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Images from "./images.js";

import { useState, useEffect } from "react";

export default function App() {
  const [gameInfo, setgameInfo] = useState({
    moves: 0,
    time: 39,
  });

  const [imagesArray, setImagesArray] = useState([]);
  const questionMarkPath = "images/question-mark.png";

  useEffect(() => {
    setImagesArray(shuffleArray(Images));
  }, []);

  const [currentImage, setCurrentImage] = useState([]);

  function handleClick(event) {
    if (!event.target.classList.contains("not-flipped")) {
      return;
    }

    event.target.classList.remove("not-flipped");

    setgameInfo((prevState) => {
      return { ...prevState, moves: prevState.moves + 1 };
    });

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

      returnArray = [
        ...prevState,
        { id: event.target.id, element: event.target },
      ];

      console.log(returnArray.length);

      console.log(imagesArray[returnArray[0].id]);
      console.log(returnArray[1] && imagesArray[returnArray[1].id]);

      returnArray.length == 2 &&
        (imagesArray[returnArray[0].id] == imagesArray[returnArray[1].id]
          ? (returnArray = handleMatch(returnArray))
          : (returnArray = handleNotAMatch(returnArray)));

      return returnArray;
    });
  }

  function handleMatch(arrayPara) {
    console.log("match");

    return [];
  }

  function handleNotAMatch(arrayPara) {
    arrayPara[0].element.classList.remove("animation");
    console.log("not a match");
    console.log(arrayPara[0].element);

    arrayPara[0].element.classList.add("animation");

    setTimeout(() => {
      arrayPara[0].element.src = questionMarkPath;
      arrayPara[0].element.classList.add("question");
      arrayPara[0].element.classList.add("not-flipped");

      arrayPara[1].element.src = questionMarkPath;
      arrayPara[1].element.classList.add("question");
      arrayPara[1].element.classList.add("not-flipped");
    }, 2000);

    return [];
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
