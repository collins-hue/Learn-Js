const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use("/static", express.static(path.resolve(__dirname, "Frontend", "static")));

// Serve the main HTML file
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "index.html"));
});



app.listen(process.env.PORT || 5000, () => console.log("Server running..................."))