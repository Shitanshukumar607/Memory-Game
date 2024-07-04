import Header from "./components/Header.js";
import Main from "./components/Main.js";

import { useState } from "react";

export default function App() {
  const [gameInfo, setgameInfo] = useState({
    moves: 10,
    time: 39,
  });

  const images = [
    "bee.png",
    "cat.png",
    "dog.png",
    "fish.png",
    "panda.png",
    "penguin.png",
    "rabbit.png",
    "turtle.png",
    "bee.png",
    "cat.png",
    "dog.png",
    "fish.png",
    "panda.png",
    "penguin.png",
    "rabbit.png",
    "turtle.png",
  ];

  const [imagesArray, setImagesArray] = useState(shuffleArray(images));
  console.log(imagesArray);

  function handleClick(event) {
    console.log(event.target);

    event.target.classList.add("flip-vertical-left");
    event.target.src = "images/cat.png";
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
