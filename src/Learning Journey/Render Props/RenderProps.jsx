// Mouse position track kore render prop function er vetor send kora

import { useState } from "react";

function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // if mouse move state update
  const handleMove = (e) => {   
    setPos({x: e.clientX, y: e.clientY, });
  };

  return (
    <div
      style={{ height: "200px", background: "#eef" }}
      onMouseMove={handleMove}
    >
        {/* calling render prop function */}
      {render(pos)} 
    </div>
  );
}

/// Parent Component

export default function Render() {
  return (
    <div>
      <h1>Render Props (Mouse Tracker)</h1>

      <MouseTracker
        render={(pos) => (
          <p>Mouse Position → X: {pos.x}, Y: {pos.y}</p>
        )}
      />
    </div>
  );
}