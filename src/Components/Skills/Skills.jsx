import React from "react";
import "./Skills.css";

export default function Blocks() {
  const itemCount = 11; // same as --item-count in CSS
  const animDuration = 30; // must match --anim-duration (in seconds)

  // Example logos (replace with your own paths or SVG imports)
  const logos = [
  `${import.meta.env.BASE_URL}logos/html.png`,
  `${import.meta.env.BASE_URL}logos/css-3.png`,
  `${import.meta.env.BASE_URL}logos/js.png`,
  `${import.meta.env.BASE_URL}logos/react.svg`,
  `${import.meta.env.BASE_URL}logos/vscode.svg`,
  `${import.meta.env.BASE_URL}logos/php.png`,
  `${import.meta.env.BASE_URL}logos/after-effects.png`,
  `${import.meta.env.BASE_URL}logos/illustrator.png`,
  `${import.meta.env.BASE_URL}logos/photoshop.png`,
  `${import.meta.env.BASE_URL}logos/ibis-paint-x.png`,
  `${import.meta.env.BASE_URL}logos/premiere-pro.png`
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
