import { useState } from "react";
import "../HoverButton.css";

export default function HoverButton() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <button
      className={`my-button ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      Click Me :3
    </button>
  );
}
