import { useState, useEffect } from "react";
import "./LightGrid.css";
import LightCell from "./LightCell";

const LightGrid = () => {
  const [activatedCells, setActivatedCells] = useState([]);
  const [startDeactivate, setStartDeactivate] = useState(false);

  const handleCellClick = (cellIndex) => {
    if (!activatedCells.includes(cellIndex)) {
      setActivatedCells([...activatedCells, cellIndex]);
    }
  };

  useEffect(() => {
    if (activatedCells.length === 8) {
      setStartDeactivate(true);
    }
  }, [activatedCells.length]);

  useEffect(() => {
    let timer;
    const deactivateCells = () => {
      if (activatedCells.length === 0) return;

      setActivatedCells((prevActivatedCells) => {
        const updatedCells = [...prevActivatedCells];
        updatedCells.pop();
        return updatedCells;
      });
    };

    timer = setInterval(deactivateCells, 300);

    return () => clearInterval(timer);
  }, [startDeactivate]);

  return (
    <div className="light-grid">
      {[...Array(9)].map((_, index) => {
        if (index !== 4) {
          const isActive = activatedCells.includes(index);

          return (
            <LightCell
              key={index}
              isActive={isActive}
              onClick={() => handleCellClick(index)}
            />
          );
        } else {
          return <p key={index} />;
        }
      })}
    </div>
  );
};

export default LightGrid;
