// components/ModalViewer.jsx
import React from "react";
import { projects } from "../../pages/Works/data";
import ModalProjectA from "./ProjectModals/ModalProjectA";
import ModalProjectB from "./ProjectModals/ModalProjectB";
// import other modals...

const MODAL_COMPONENTS = {
  "project-a": ModalProjectA,
  "project-b": ModalProjectB,
  // Add others keyed by project.slug or id
};

export default function ModalViewer({ selectedIndex, setSelectedIndex }) {
  if (selectedIndex === null) return null;

  const currentProject = projects[selectedIndex];
  const ModalComponent = MODAL_COMPONENTS[currentProject.slug];

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  const close = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="modal-fullscreen-container" onClick={close}>
      <div className="modal-scroll-wrapper" onClick={(e) => e.stopPropagation()}>
        {ModalComponent ? (
          <ModalComponent project={currentProject} />
        ) : (
          <div style={{ padding: "4rem", color: "white" }}>
            <h2>{currentProject.title}</h2>
            <p>{currentProject.description}</p>
          </div>
        )}

        <div className="modal-footer">
          <button className="next-button" onClick={goToNext}>
            View Next Work →
          </button>
        </div>
      </div>
      <button className="modal-close-btn" onClick={close}>
        ×
      </button>
    </div>
  );
}
