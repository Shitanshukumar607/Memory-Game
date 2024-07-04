export default function Main(props) {
  console.log(props.imagesArray);

  const imageBlock = props.imagesArray.map((image) => {
    return (
      <img
        src="images/question-mark.png"
        className="question"
        onClick={props.handleClick}
      />
    );
  });
  //     return <img src={"images/" + image} />;
  //   });

  return <main> {imageBlock} </main>;
}
