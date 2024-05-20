const Button = ({ colors, text }) => {
  return (
    <button
      className={`${colors} p-2 m-2 rounded-md shadow-md hover:scale-105 transition`}
    >
      {text}
    </button>
  );
};

export default Button;
