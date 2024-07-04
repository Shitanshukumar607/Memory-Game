export default function Header(props) {
  return (
    <header>
      <p>
        <span>Moves: </span>
        {props.info.moves}
      </p>
      <p>
        <span>Time: </span>
        {props.info.time}s
      </p>
    </header>
  );
}
