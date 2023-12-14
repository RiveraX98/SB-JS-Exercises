const Todo = ({ removeItem, item, id }) => {
  const handleClick = () => {
    removeItem(id);
  };
  return (
    <div>
      <li>{item}</li>
      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default Todo;
