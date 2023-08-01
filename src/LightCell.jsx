// eslint-disable-next-line react/prop-types
const LightCell = ({ isActive, onClick }) => {
  return (
    <div
      className={`light-cell ${isActive ? "activated" : "#f0f0f0"}`}
      onClick={onClick}
    ></div>
  );
};

export default LightCell;
