import React, { useEffect } from "react";

const ClientScripts = () => {
    useEffect(() => {
        // Top bar scrolling effect
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

        // Navbar show/hide effect
        const navbar = document.getElementById("navbar");
        if (navbar) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 50) {
                    navbar.classList.add("show");
                    navbar.classList.remove("hide");
                } else {
                    navbar.classList.add("hide");
                    navbar.classList.remove("show");
                }
            });
        }

        // Smooth scroll for navbar buttons
        document.querySelectorAll(".navbar button").forEach((button) => {
            button.addEventListener("click", () => {
                const target = document.querySelector(`.${button.dataset.target}`);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    document.querySelectorAll(".navbar button").forEach((btn) => btn.classList.remove("active"));
                    button.classList.add("active");
                }
            });
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null; // This component only runs scripts, so it doesn't render anything
};

export default ClientScripts;
