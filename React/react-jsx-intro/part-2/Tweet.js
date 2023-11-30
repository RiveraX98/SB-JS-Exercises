const Tweet = (props) => {
  return (
    <div>
      <h3>{props.username}</h3>
      <b>{props.name}</b>
      <p>Date: {props.date}</p>
      <p>Message: {props.message}</p>
    </div>
  );
};
