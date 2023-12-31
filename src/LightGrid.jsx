import { useState, useEffect, useRef } from "react";
import "./LightGrid.css";
import LightCell from "./LightCell";

const LightGrid = () => {
  const [activatedCells, setActivatedCells] = useState([]);
  const [startDeactivate, setStartDeactivate] = useState(false);
  const isMountedRef = useRef(true);

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
    if (startDeactivate) {
      const timer = setInterval(() => {
        setActivatedCells((prevActivatedCells) => {
          if (prevActivatedCells.length === 0) {
            clearInterval(timer);
            setStartDeactivate(false);
            return prevActivatedCells;
          }

          const updatedCells = [...prevActivatedCells];
          updatedCells.pop();
          return updatedCells;
        });
      }, 300);

      return () => {
        clearInterval(timer);
        isMountedRef.current = false;
      };
    }
  }, [startDeactivate]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

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
