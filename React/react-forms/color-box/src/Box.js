const Box = ({ removeBox, id, height, width, color }) => {
  const handleClick = () => {
    removeBox(id);
  };
  return (
    <div>
      <div style={{ backgroundColor: color, height: height, width: width }}>
        <h2
          onClick={handleClick}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          X
        </h2>
      </div>
    </div>
  );
};

export default Box;
