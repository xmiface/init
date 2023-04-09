import clsx from "clsx";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

const field = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, 0],
];

export default function () {
  const [pos, setPos] = useState([0, 0]); //x, y
  const gameRef = useRef(null);

  useEffect(() => {
    gameRef.current && gameRef.current?.focus();
  }, []);

  function handleKey(e: KeyboardEvent<HTMLDivElement>): void {
    if (e.key === "d") {
      setPos([pos[0] + 1, pos[1]]);
    }
    if (e.key === "a") {
      setPos([pos[0] - 1, pos[1]]);
    }
    if (e.key === "w") {
      setPos([pos[0], pos[1] - 1]);
    }
    if (e.key === "s") {
      setPos([pos[0], pos[1] + 1]);
    }
    console.log(pos);
  }

  return (
    <div tabIndex={0} ref={gameRef} onKeyDown={(e) => handleKey(e)}>
      <div>
        {field.map((line, y) => (
          <div className="flex gap-2 border-2">
            {line.map((item, x) => (
              <div className={clsx("h-24 w-24", pos[0] === x && pos[1] === y ? "bg-red-500" : "bg-blue-500")}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
