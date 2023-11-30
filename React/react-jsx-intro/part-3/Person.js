const Person = (props) => {
  return (
    <div>
      <p>Learn some information about this person</p>
      <h2>
        Name: {props.name.length > 8 ? props.name.slice(0, 7) : props.name}
      </h2>
      <h2>Age: {props.age}</h2>
      <h3>
        {props.age >= 18 ? "Please go vote" : "You must be at least 18 to vote"}
      </h3>
      <ul>
        {props.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
