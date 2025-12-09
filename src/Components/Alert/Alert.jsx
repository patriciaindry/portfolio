import React, { useEffect, useState } from "react";

const MobileAlert = () => {
  const [show, setShow] = useState({ en: false, ja: false });
  const [animate, setAnimate] = useState({ en: false, ja: false });

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (!isMobile) return;

    // Show both alerts
    setShow({ en: true, ja: true });

    // Animate in
    const startAnim = setTimeout(() => {
      setAnimate({ en: true, ja: true });
    }, 50);

    // Animate out after 5 seconds
    const hideTimeout = setTimeout(() => {
      setAnimate({ en: false, ja: false });
    }, 5000);

    // Remove completely after fade out
    const removeTimeout = setTimeout(() => {
      setShow({ en: false, ja: false });
    }, 5500);

    return () => {
      clearTimeout(startAnim);
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!show.en && !show.ja) return null;

  return (
    <>
      {show.en && (
        <div
          style={{
            position: "fixed",
            bottom: animate.en ? "20px" : "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "14px",
            zIndex: 9999,
            textAlign: "center",
            transition: "all 0.5s ease-in-out",
            opacity: animate.en ? 1 : 0,
          }}
        >
          This site is optimized for desktop. Viewing on mobile may be slightly different.
        </div>
      )}

      {show.ja && (
        <div
          style={{
            position: "fixed",
            bottom: animate.ja ? "120px" : "-60px", // stacked above the English alert
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "14px",
            zIndex: 9999,
            textAlign: "center",
            transition: "all 0.5s ease-in-out",
            opacity: animate.ja ? 1 : 0,
          }}
        >
          このサイトはデスクトップ向けに最適化されています。モバイルで閲覧すると表示が少し異なる場合があります。
        </div>
      )}
    </>
  );
};

export default MobileAlert;
