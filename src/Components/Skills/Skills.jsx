import React from "react";
import "./Skills.css";

export default function Blocks() {
  const itemCount = 8; // same as --item-count in CSS
  const animDuration = 30; // must match --anim-duration (in seconds)

  // Example logos (replace with your own paths or SVG imports)
  const logos = [
    "/logos/html.svg",
    "/logos/css.svg",
    "/logos/js.svg",
    "/logos/react.svg",
    "/logos/node.svg",
    "/logos/git.svg",
    "/logos/github.svg",
    "/logos/tailwind.svg",
  ];

  const items = Array.from({ length: itemCount }, (_, i) => {
    const delay = (animDuration / itemCount) * (itemCount - (i + 1)) * -1 + "s";
    return { id: i, delay, logo: logos[i % logos.length] };
  });

  return (
    <>
      <h1>Skills</h1>

      {/* Left scroll */}
      <div className="wrapper">
        {items.map(({ id, delay, logo }) => (
          <div
            key={id}
            className="itemLeft"
            style={{ animationDelay: delay }}
          >
            <img src={logo} alt={`logo-${id}`} />
          </div>
        ))}
      </div>

      {/* Right scroll */}
      <div className="wrapper">
        {items.map(({ id, delay, logo }) => (
          <div
            key={id}
            className="itemRight"
            style={{ animationDelay: delay }}
          >
            <img src={logo} alt={`logo-${id}`} />
          </div>
        ))}
      </div>
    </>
  );
}
