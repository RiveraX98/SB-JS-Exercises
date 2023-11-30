const App = () => (
  <div>
    <Person name="Xavier" age={25} hobbies={["Dance", "Piano", "Coding"]} />
    <Person
      name="Alejandro"
      age={19}
      hobbies={["Game", "Eat Pizza", "Complain"]}
    />
    <Person name="Ruben" age={4} hobbies={["Run", "Draw", "Watch TV"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
