import React, { useEffect } from "react";

const ClientOnly = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Example: Scroll event listener
    const handleScroll = () => {
      const topBar = document.querySelector(".top-bar");
      if (topBar) {
        if (window.scrollY > 10) {
          topBar.classList.add("scrolled");
        } else {
          topBar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component only executes client-side scripts, no UI needed
};

export default ClientOnly;
