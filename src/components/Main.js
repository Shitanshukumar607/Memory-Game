export default function Main(props) {
  //   console.log(props.imagesArray);

  const imageBlock = props.imagesArray.map((image, index) => {
    return (
      <img
        src="images/question-mark.png"
        className="question"
        onClick={props.handleClick}
        key={index}
        id={index}
        alt=""
      />
    );
  });

  return <main> {imageBlock} </main>;
}
