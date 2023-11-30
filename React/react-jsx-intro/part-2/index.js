const App = () => (
  <div>
    <Tweet
      username="Xay98"
      name="Xavier R"
      date="11.29.2023"
      message="My First tweet"
    />
    <Tweet
      username="JaydenRain"
      name="Jayden B"
      date="11.29.2023"
      message="I have a nice car"
    />
    <Tweet
      username="BigDripper"
      name="Kamari M"
      date="11.29.2023"
      message="Happy Thanksgiving!"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
