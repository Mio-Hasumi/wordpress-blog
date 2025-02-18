export const onClientEntry = () => {
    console.log("✅ Gatsby Browser API Loaded!");

    setTimeout(() => {
        console.log("✅ Injecting scripts.js...");

        const script = document.createElement("script");
        script.src = "/scripts.js";
        script.defer = true;
        script.onload = () => console.log("✅ scripts.js successfully loaded!");
        script.onerror = () => console.error("❌ Failed to load scripts.js!");

        document.body.appendChild(script);
    }, 1000); // Delay ensures Gatsby fully loads before injecting script
};